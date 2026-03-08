---
title: Install FileUni
description: Install FileUni with one command or download GitHub release assets directly
order: 3
---

# Install FileUni

FileUni provides two coordinated install paths:

1. One-line installer scripts hosted on `docs.fileuni.com`
2. A website download page that reads a public releases JSON and links directly to GitHub assets

The installer scripts do not hardcode release URLs. They read the public metadata endpoint below, and the website backend generates that JSON from GitHub Releases:

```text
https://fileuni.com/api/downloads/releases.json
```

## Online Install

### Linux / macOS / FreeBSD

```bash
curl -fsSL https://docs.fileuni.com/install.sh | sh
```

Default behavior:

- Prefer the latest stable release
- If no stable release exists, fall back to the latest prerelease
- Detect the local OS, CPU architecture, and Linux libc automatically

Install the prerelease channel explicitly:

```bash
curl -fsSL https://docs.fileuni.com/install.sh | sh -s -- --channel pre
```

Install to a custom directory:

```bash
curl -fsSL https://docs.fileuni.com/install.sh | sh -s -- --to "$HOME/.local/bin"
```

### Windows CMD

```bat
set "I=%TEMP%\fileuni-install.cmd" && certutil -urlcache -split -f https://docs.fileuni.com/install.cmd "%I%" >nul && cmd /c "%I%"
```

Install the prerelease channel explicitly:

```bat
set "I=%TEMP%\fileuni-install.cmd" && certutil -urlcache -split -f https://docs.fileuni.com/install.cmd "%I%" >nul && cmd /c "%I%" pre
```

The Windows installer reads the same public releases JSON, downloads the current CLI ZIP, and extracts `fileuni.exe` into `%USERPROFILE%\AppData\Local\FileUni\bin` by default.

## Download Page

If you prefer selecting packages manually, use the official download page:

- English: [fileuni.com/download](https://fileuni.com/download)
- Simplified Chinese: [fileuni.com/zh-cn/download](https://fileuni.com/zh-cn/download)

That page:

- Separates stable and prerelease versions
- Leaves a channel blank when no matching release exists
- Sends every download action directly to GitHub release assets
- Shows one-line install commands that match the docs site scripts

## Installer Arguments

### `install.sh`

```text
sh install.sh [--channel auto|stable|pre] [--to DIR]
```

Environment variables:

- `FILEUNI_CHANNEL`
- `FILEUNI_INSTALL_DIR`
- `FILEUNI_RELEASES_JSON_URL`

### `install.cmd`

Arguments:

- `stable`
- `pre`
- `auto`

Environment variables:

- `FILEUNI_CHANNEL`
- `FILEUNI_INSTALL_DIR`
- `FILEUNI_RELEASES_JSON_URL`

## After Installation

Check the binary:

```bash
fileuni --help
```

If the install directory is not already in `PATH`, add it manually.

For first-time setup and runtime configuration, continue with the [Quick Start](./quickstart) guide.
