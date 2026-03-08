@if (@CodeSection == @Batch) @then
@echo off
setlocal
cscript //E:JScript //nologo "%~f0" %*
exit /b %errorlevel%
@end

var shell = WScript.CreateObject("WScript.Shell");
var fso = new ActiveXObject("Scripting.FileSystemObject");

function getEnv(name, fallback) {
  var value = shell.Environment("PROCESS")(name);
  return value ? value : fallback;
}

function echo(text) {
  WScript.Echo(text);
}

function fail(text) {
  WScript.StdErr.WriteLine(text);
  WScript.Quit(1);
}

function parseArgs() {
  var result = {
    channel: getEnv("FILEUNI_CHANNEL", "auto"),
    releasesJsonUrl: getEnv("FILEUNI_RELEASES_JSON_URL", "https://fileuni.com/api/downloads/releases"),
    installDir: getEnv("FILEUNI_INSTALL_DIR", ""),
  };

  for (var i = 0; i < WScript.Arguments.length; i += 1) {
    var arg = WScript.Arguments.Item(i);
    if (arg === "stable" || arg === "pre" || arg === "auto") {
      result.channel = arg;
      continue;
    }

    if (arg === "--channel" && i + 1 < WScript.Arguments.length) {
      result.channel = WScript.Arguments.Item(i + 1);
      i += 1;
      continue;
    }

    if (arg === "--to" && i + 1 < WScript.Arguments.length) {
      result.installDir = WScript.Arguments.Item(i + 1);
      i += 1;
      continue;
    }

    if (arg === "--json" && i + 1 < WScript.Arguments.length) {
      result.releasesJsonUrl = WScript.Arguments.Item(i + 1);
      i += 1;
      continue;
    }

    if (arg === "--help" || arg === "-h") {
      echo("FileUni installer");
      echo("");
      echo("Usage:");
      echo("  install.cmd [stable|pre|auto]");
      echo("  install.cmd --channel auto|stable|pre [--to DIR] [--json URL]");
      WScript.Quit(0);
    }

    fail("Unknown argument: " + arg);
  }

  return result;
}

function detectArch() {
  var arch = getEnv("PROCESSOR_ARCHITEW6432", getEnv("PROCESSOR_ARCHITECTURE", ""));
  arch = String(arch).toUpperCase();

  if (arch === "AMD64" || arch === "X64") {
    return "x86_64";
  }

  if (arch === "ARM64") {
    return "aarch64";
  }

  return "x86_32";
}

function channelKey(value) {
  if (value === "stable") {
    return "stable";
  }

  if (value === "pre" || value === "prerelease") {
    return "prerelease";
  }

  return "recommended";
}

function createRequest() {
  var progIds = [
    "WinHttp.WinHttpRequest.5.1",
    "MSXML2.ServerXMLHTTP.6.0",
    "MSXML2.XMLHTTP.6.0",
    "MSXML2.XMLHTTP",
  ];

  for (var i = 0; i < progIds.length; i += 1) {
    try {
      return new ActiveXObject(progIds[i]);
    } catch (error) {}
  }

  fail("Unable to create an HTTP request object.");
}

function httpGetText(url) {
  var request = createRequest();
  request.open("GET", url, false);
  request.send();

  if (request.status < 200 || request.status >= 300) {
    fail("HTTP request failed for " + url + " with status " + request.status);
  }

  return request.responseText;
}

function httpDownload(url, filePath) {
  var request = createRequest();
  request.open("GET", url, false);
  request.send();

  if (request.status < 200 || request.status >= 300) {
    fail("Download failed for " + url + " with status " + request.status);
  }

  var stream = new ActiveXObject("ADODB.Stream");
  stream.Type = 1;
  stream.Open();
  stream.Write(request.responseBody);
  stream.SaveToFile(filePath, 2);
  stream.Close();
}

function parseJson(text) {
  if (typeof JSON !== "undefined" && JSON.parse) {
    return JSON.parse(text);
  }

  return eval("(" + text + ")");
}

function ensureFolder(path) {
  if (!fso.FolderExists(path)) {
    fso.CreateFolder(path);
  }
}

function joinPath(base, leaf) {
  if (base.charAt(base.length - 1) === "\\" || base.charAt(base.length - 1) === "/") {
    return base + leaf;
  }

  return base + "\\" + leaf;
}

function extractZip(zipPath, destinationDir) {
  ensureFolder(destinationDir);

  var shellApp = new ActiveXObject("Shell.Application");
  var source = shellApp.NameSpace(zipPath);
  var destination = shellApp.NameSpace(destinationDir);

  if (!source || !destination) {
    fail("Unable to access ZIP extraction APIs.");
  }

  destination.CopyHere(source.Items(), 16);

  var target = joinPath(destinationDir, "fileuni.exe");
  var timeoutAt = new Date().getTime() + 60000;
  while (!fso.FileExists(target)) {
    if (new Date().getTime() > timeoutAt) {
      fail("Timed out while extracting fileuni.exe.");
    }
    WScript.Sleep(500);
  }
}

var options = parseArgs();
var arch = detectArch();
var installDir = options.installDir || joinPath(getEnv("USERPROFILE", "."), "AppData\\Local\\FileUni\\bin");
var key = "cli-windows-" + arch + "-msvc." + channelKey(options.channel);

echo("Release metadata: " + options.releasesJsonUrl);
echo("Target platform: windows/" + arch + "/msvc");
echo("Installing to: " + installDir);

var catalog = parseJson(httpGetText(options.releasesJsonUrl));
if (!catalog.targetAssetUrls || !catalog.targetAssetUrls[key]) {
  fail("No matching Windows asset was found in the public releases JSON for key: " + key);
}

var downloadUrl = String(catalog.targetAssetUrls[key]);
var tempRoot = getEnv("TEMP", ".");
var zipPath = joinPath(tempRoot, "fileuni-cli.zip");
var extractDir = joinPath(tempRoot, "fileuni-cli");
var extractedExe = joinPath(extractDir, "fileuni.exe");
var installExe = joinPath(installDir, "fileuni.exe");

if (fso.FileExists(zipPath)) {
  fso.DeleteFile(zipPath, true);
}

if (fso.FolderExists(extractDir)) {
  fso.DeleteFolder(extractDir, true);
}

ensureFolder(installDir);
ensureFolder(extractDir);

httpDownload(downloadUrl, zipPath);
extractZip(zipPath, extractDir);

if (!fso.FileExists(extractedExe)) {
  fail("Unable to locate extracted fileuni.exe.");
}

if (fso.FileExists(installExe)) {
  fso.DeleteFile(installExe, true);
}

fso.CopyFile(extractedExe, installExe, true);

echo("FileUni installed at " + installExe);
echo("Add " + installDir + " to PATH if needed.");
echo("Run: fileuni.exe --help");
