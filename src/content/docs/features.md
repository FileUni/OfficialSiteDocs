---
title: Features
description: Verified capabilities in the current FileUni codebase.
order: 3
---

# Features

This page lists capabilities that can be verified from the current repository and runtime entry points.

## Shared Core for CLI and GUI

The CLI server and the Tauri desktop app use the same Rust core library:

- The CLI is the main server entry point.
- The GUI wraps the same backend with desktop-native service controls, config editing, and log viewing.
- The frontend for the server is statically embedded and served from `/`.

## Multiple Access Paths

The current project exposes several ways to reach the same file platform:

- Web UI at `/`
- HTTP API at `/api/v1/...`
- OpenAPI document at `/api/v1/openapi.json`
- WebDAV mounted at `/webdav` when enabled
- S3, FTP, and SFTP services when enabled in configuration

## File Platform Capabilities

The workspace contains a dedicated VFS storage hub and frontend modules for:

- Directory browsing, upload, download, move, copy, rename, and delete
- Search, recent history, favorites, and recycle bin views
- File preview flows for common file types in the Web UI
- Archive-related operations such as browsing, compression, and extraction

The exact availability of some features depends on your configuration and the selected build mode.

## Deployment Model

The current runtime model is intentionally explicit:

- Configuration comes from `config.toml`, not environment variables
- Runtime directories are separated into config and app data paths
- Missing required config fields reject startup instead of silently falling back to defaults
- Service installation persists the chosen runtime directories

## Operations and Maintenance

Current built-in maintenance actions include:

- Setup mode for first-run configuration
- Config validation with `--configtest`
- System service install, uninstall, start, stop, status, and reload
- Admin password reset from the command line
- Backup export and import from the command line

## Lightweight Positioning

FileUni is still positioned as a lightweight file platform. The public site currently describes deployments as low as 32 MB RAM, and the workspace itself is structured around selectively enabling services instead of forcing every subsystem on every installation.

## Next Steps

- [Quick Start](./quickstart)
- [Access and File Operations](./file-management)
- [Install as Service](./install-service)
