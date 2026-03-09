---
title: Quick Start
description: Start the current FileUni project with the CLI or desktop app.
order: 2
---

# Quick Start

This guide is based on the current workspace layout and runtime model.

## 1. Choose a Runtime Entry

FileUni currently has two main entry points:

- `fileuni` CLI: used to start the server, run setup mode, manage services, reset the admin password, and export or import backups.
- `fileuni-gui`: a Tauri desktop wrapper around the same core library, with service control and configuration editing.

Get the appropriate package from the [download page](https://fileuni.com/download).

- For server deployment, choose the CLI package.
- For local desktop use, choose the GUI package.

## 2. Prepare Runtime Directories

The current project uses a dual-directory runtime model:

- `-c` / `--config-date`: configuration directory
- `-A` / `--AppDataDir`: application data directory

The fixed configuration file path is:

```text
{config-dir}/config.toml
```

Example runtime layout:

```text
./config
./appdata
```

For service installation, use absolute paths instead of relative paths.

## 3. Prepare the Services Referenced by Your Config

FileUni does not use environment variables as a configuration source. Runtime values must come from `config.toml`.

In the current project, deployment usually means preparing the backing services referenced by that file, especially:

- A database connection
- A KV service connection
- Storage locations required by the VFS configuration

If `config.toml` is missing on first startup, FileUni can create the file. If required fields are missing or left empty later, startup will be rejected.

## 4. Run Setup Mode or Start the Server

To enter setup mode explicitly:

```bash
./fileuni --setup -c ./config -A ./appdata
```

To validate configuration without starting the full server:

```bash
./fileuni --configtest -c ./config -A ./appdata
```

To start the server normally:

```bash
./fileuni -c ./config -A ./appdata
```

## 5. Open the Web UI

After a successful startup, FileUni prints the active addresses for:

- Web UI: `http://<host>:<port>/ui`
- HTTP API: `http://<host>:<port>`
- OpenAPI JSON: `http://<host>:<port>/api/v1/openapi.json`

The default local Web UI URL used by the project is:

```text
http://localhost:19000/ui
```

Depending on your configuration, S3, FTP, and SFTP endpoints may also be enabled.

## Next Steps

- [Features](./features)
- [Access and File Operations](./file-management)
- [Install as Service](./install-service)
