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
- WebDAV mounted at `/@dav` by default (configurable)
- S3, FTP, and SFTP services when enabled in configuration

## File Platform Capabilities

The workspace contains a dedicated VFS storage hub and frontend modules for:

- Directory browsing, upload, download, move, copy, rename, and delete
- Search, recent history, favorites, and recycle bin views
- File preview flows for common file types in the Web UI
- Archive-related operations such as browsing, compression, and extraction

The exact availability of some features depends on your configuration and the selected build mode.

## Nextcloud Client Compatibility Direction

Besides lightweight deployment on low-end hardware and better scaling on high-end hardware, FileUni also treats compatibility with Nextcloud clients as an important product characteristic.

The intended compatibility scope covers:

- File management flows
- Favorites and sharing-related workflows
- Media-oriented access flows
- WebDAV-based access used by Nextcloud clients

Chat and Notes belong to the follow-up roadmap and should be presented as planned capabilities.

## Deployment Model

The current runtime model is intentionally explicit:

- Configuration comes from `config.toml`, not environment variables
- Runtime state is anchored to one runtime directory that holds config and data together
- Missing required config fields reject startup instead of silently falling back to defaults
- Service installation persists the chosen runtime directory

## Operations and Maintenance

Current built-in maintenance actions include:

- Settings Center for first-run configuration
- Config validation with `config test`
- System service install, uninstall, start, stop, status, and restart
- Admin password recovery by reopening Settings Center
- Backup export and import from the command line

## Lightweight Positioning

FileUni is still positioned as a lightweight file platform. The public site currently describes deployments as low as 32 MB RAM, and the workspace itself is structured around selectively enabling services instead of forcing every subsystem on every installation.

## Next Steps

- [Quick Start](./quickstart)
- [Access and File Operations](./file-management)
- [Nextcloud Compatibility](./nextcloud-compatibility)
- [Install as Service](./install-service)
