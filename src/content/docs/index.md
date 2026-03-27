---
title: FileUni Documentation
description: Practical documentation for the current FileUni project.
order: 0
---

# FileUni Documentation

This site tracks the current FileUni project instead of describing hypothetical product plans.

FileUni is a Rust-based file platform with:

- A shared core used by both the CLI server and the Tauri desktop app
- A Web UI served from `/`
- An OpenAPI document exposed at `/api/v1/openapi.json`
- Optional access protocols such as WebDAV, S3, FTP, and SFTP
- A single runtime directory that stores both configuration and runtime data

## Quick Links

- [System Requirements](./system-requirements)
- [Quick Start](./quickstart)
- [Download FileUni](https://fileuni.com/download)
- [Features](./features)
- [Nextcloud Compatibility](./nextcloud-compatibility)
- [Access and File Operations](./file-management)
- [Install as Service](./install-service)
- [Reset Admin Password](./get-admin-passwd)

## Current Documentation Scope

The docs currently focus on what can already be verified in this repository:

- Local deployment and first startup
- Runtime directory layout and service installation requirements
- Web UI, API, and protocol-based access
- Nextcloud client compatibility positioning and current scope
- Administrator maintenance tasks

Topics that do not match the current project state have been removed for now.
