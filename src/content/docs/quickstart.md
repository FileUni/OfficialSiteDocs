---
title: Quick Start
description: Start the current FileUni project with the CLI or desktop app.
order: 2
---

# Quick Start

This guide is based on the current workspace layout and runtime model.

## 1. Choose a Runtime Entry

FileUni currently has two main entry points:

- `fileuni` CLI: used to start the server, manage services, export or import backups, and reset administrator access.
- `fileuni-gui`: a Tauri desktop wrapper around the same core library, with service control, configuration editing, and administrator password recovery.

Get the appropriate package from the [download page](https://fileuni.com/download).

- For server deployment, choose the CLI package.
- For local desktop use, choose the GUI package.

## 2. Prepare the Runtime Directory

The current project now uses a single runtime directory:

- `-R` / `--runtime-dir`: runtime directory for config, database, cache, and other runtime files
- `--runtime-dir`: service-install-only runtime directory option

The fixed configuration file path is:

```text
{runtime-dir}/config.toml
```

Example runtime layout:

```text
./runtime
```

For service installation, use an absolute runtime directory instead of a relative path.

## 3. Prepare the Services Referenced by Your Config

FileUni does not use environment variables as a configuration source. Runtime values must come from `config.toml`.

In the current project, deployment usually means preparing the backing services referenced by that file, especially:

- A database connection
- A KV service connection
- Storage locations required by the VFS configuration

If `{runtime-dir}/config.toml` is missing, FileUni creates an example config automatically during the first startup and initializes the runtime directory.

If the database does not already contain `yh_users`, startup also creates the default administrator account `admin/admin888`.

If the database already contains a users table, startup leaves existing users unchanged and does not auto-reset administrator access.

## 4. Start FileUni

First startup:

```bash
./fileuni --runtime-dir ./runtime
```

To recover administrator access later:

```bash
./fileuni --runtime-dir ./runtime reset-admin --user admin --password admin888
```

To validate configuration without starting the full server:

```bash
./fileuni --runtime-dir ./runtime config test
```

To start the server normally:

```bash
./fileuni --runtime-dir ./runtime
```

## 5. Open the Web UI

After a successful startup, FileUni prints the active addresses for:

- Web UI: `http://<host>:<port>/`
- HTTP API: `http://<host>:<port>`
- OpenAPI JSON: `http://<host>:<port>/api/v1/openapi.json`

The default local Web UI URL used by the project is:

```text
http://localhost:19000/
```

Depending on your configuration, S3, FTP, and SFTP endpoints may also be enabled.

## Next Steps

- [Features](https://fileuni.com/features/)
- [Access and File Operations](./file-management)
- [Install as Service](./install-service)
