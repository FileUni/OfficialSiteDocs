@echo off
setlocal ENABLEEXTENSIONS

set "CHANNEL=auto"
set "INSTALL_DIR="
set "API_BASE=https://fileuni.com/api/downloads/resolve"

if /I "%~1"=="stable" set "CHANNEL=stable"
if /I "%~1"=="pre" set "CHANNEL=pre"
if /I "%~1"=="auto" set "CHANNEL=auto"

if not "%FILEUNI_CHANNEL%"=="" set "CHANNEL=%FILEUNI_CHANNEL%"
if not "%FILEUNI_INSTALL_DIR%"=="" set "INSTALL_DIR=%FILEUNI_INSTALL_DIR%"
if not "%FILEUNI_API_BASE%"=="" set "API_BASE=%FILEUNI_API_BASE%"

if "%INSTALL_DIR%"=="" set "INSTALL_DIR=%USERPROFILE%\AppData\Local\FileUni\bin"
if not exist "%INSTALL_DIR%" mkdir "%INSTALL_DIR%" >nul 2>nul

set "ARCH=x86_64"
if /I "%PROCESSOR_ARCHITECTURE%"=="x86" set "ARCH=x86_32"
if /I "%PROCESSOR_ARCHITEW6432%"=="AMD64" set "ARCH=x86_64"
if /I "%PROCESSOR_ARCHITEW6432%"=="ARM64" set "ARCH=aarch64"
if /I "%PROCESSOR_ARCHITECTURE%"=="AMD64" set "ARCH=x86_64"
if /I "%PROCESSOR_ARCHITECTURE%"=="ARM64" set "ARCH=aarch64"

set "QUERY=%API_BASE%?channel=%CHANNEL%&kind=cli&os=windows&arch=%ARCH%&libc=msvc"

for /f "usebackq delims=" %%I in (`powershell -NoProfile -ExecutionPolicy Bypass -Command "(Invoke-WebRequest -UseBasicParsing '%QUERY%').Content.Trim()"`) do set "DOWNLOAD_URL=%%I"

if "%DOWNLOAD_URL%"=="" (
  echo Failed to resolve a FileUni download URL.
  exit /b 1
)

set "TMP_ZIP=%TEMP%\fileuni-cli.zip"
set "TMP_DIR=%TEMP%\fileuni-cli"
if exist "%TMP_ZIP%" del /f /q "%TMP_ZIP%" >nul 2>nul
if exist "%TMP_DIR%" rmdir /s /q "%TMP_DIR%" >nul 2>nul
mkdir "%TMP_DIR%" >nul 2>nul

echo Resolved channel: %CHANNEL%
echo Target platform: windows/%ARCH%/msvc
echo Installing to: %INSTALL_DIR%

powershell -NoProfile -ExecutionPolicy Bypass -Command "Invoke-WebRequest -UseBasicParsing '%DOWNLOAD_URL%' -OutFile '%TMP_ZIP%'; Expand-Archive -LiteralPath '%TMP_ZIP%' -DestinationPath '%TMP_DIR%' -Force"
if errorlevel 1 (
  echo Download or extraction failed.
  exit /b 1
)

if not exist "%TMP_DIR%\fileuni.exe" (
  echo Unable to locate fileuni.exe after extraction.
  exit /b 1
)

copy /y "%TMP_DIR%\fileuni.exe" "%INSTALL_DIR%\fileuni.exe" >nul
if errorlevel 1 (
  echo Failed to copy fileuni.exe to %INSTALL_DIR%.
  exit /b 1
)

echo FileUni installed at %INSTALL_DIR%\fileuni.exe
"%INSTALL_DIR%\fileuni.exe" --version 2>nul
echo Add %INSTALL_DIR% to PATH if needed.
echo Run: fileuni.exe --help
