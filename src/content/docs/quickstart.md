---
title: Quick Start
description: Start the current FileUni project with the CLI or desktop app.
order: 2
---

# Quick Start

This guide is based on the current workspace layout and runtime model.

## 1. Choose a Runtime Entry

FileUni currently has two main entry points:

- `fileuni` CLI: used to start the server, open the setup wizard when needed, manage services, and export or import backups.
- `fileuni-gui`: a Tauri desktop wrapper around the same core library, with service control, configuration editing, and the same first-run setup behavior.

Get the appropriate package from the [download page](https://fileuni.com/download).

- For server deployment, choose the CLI package.
- For local desktop use, choose the GUI package.

## 2. Prepare the Runtime Directory

The current project now uses a single runtime directory:

- `-R` / `--runtime-dir`: runtime directory for config, install lock, database, cache, and other runtime files
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

If `config.toml` or `install.lock` is missing, FileUni will enter the setup wizard.

The setup wizard is responsible for writing `config.toml` and `install.lock`, and for ensuring the built-in administrator account exists.

Normal startup does not auto-create privileged accounts. If the admin account is missing while `install.lock` exists, startup will be rejected.

## 4. Start FileUni

If `{runtime-dir}/install.lock` is missing, both CLI and GUI will open the setup wizard before normal startup.

To re-enter the setup wizard later, delete `{runtime-dir}/install.lock`, then start FileUni normally:

```bash
rm -f ./runtime/install.lock
./fileuni --runtime-dir ./runtime
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

- [Features](./features)
- [Access and File Operations](./file-management)
- [Install as Service](./install-service)
