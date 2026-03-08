---
title: Install FileUni
description: Install FileUni with one command or download GitHub release assets directly
order: 3
---

# Install FileUni

FileUni provides two coordinated install paths:

1. One-line installer scripts hosted on `docs.fileuni.com`
2. A website download page that reads GitHub Releases in real time and links directly to GitHub assets

The installer scripts do not hardcode release URLs. They call the FileUni website resolver API, and the website API normalizes data from GitHub Releases.

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
curl.exe -fsSL -o "%TEMP%\fileuni-install.cmd" https://docs.fileuni.com/install.cmd && cmd /c "%TEMP%\fileuni-install.cmd"
```

Install the prerelease channel explicitly:

```bat
curl.exe -fsSL -o "%TEMP%\fileuni-install.cmd" https://docs.fileuni.com/install.cmd && cmd /c "%TEMP%\fileuni-install.cmd pre"
```

The Windows installer downloads the current CLI package through the website resolver API and extracts `fileuni.exe` into `%USERPROFILE%\AppData\Local\FileUni\bin` by default.

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
- `FILEUNI_API_BASE`

### `install.cmd`

Arguments:

- `stable`
- `pre`
- `auto`

Environment variables:

- `FILEUNI_CHANNEL`
- `FILEUNI_INSTALL_DIR`
- `FILEUNI_API_BASE`

## After Installation

Check the binary:

```bash
fileuni --help
```

If the install directory is not already in `PATH`, add it manually.

For first-time setup and runtime configuration, continue with the [Quick Start](./quickstart) guide.
