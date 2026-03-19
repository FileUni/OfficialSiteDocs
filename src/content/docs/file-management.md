---
title: Access and File Operations
description: How to access the current FileUni server and what file operations exist.
order: 4
---

# Access and File Operations

This page focuses on the access paths and file operations that can be verified from the current project.

## Web UI

The embedded frontend is served from:

```text
/
```

The Web UI is the main human-facing entry point for:

- Browsing files and directories
- Uploading and downloading files
- Search and preview flows
- Working with recent items, favorites, recycle bin, and shares
- Calling backend APIs from the browser frontend

## HTTP API

The server exposes REST-style endpoints under:

```text
/api/v1
```

For API inspection and client generation, the project also exposes:

```text
/api/v1/openapi.json
```

This is the most accurate public description of the currently mounted API surface.

## Protocol Access

Depending on configuration, FileUni can also expose protocol-based access:

- WebDAV: mounted under `/@dav` by default (configurable)
- S3: served on the configured S3 port
- FTP: served on the configured FTP port
- SFTP: served on the configured SFTP port

When the server starts successfully, it prints the active HTTP address and whether S3, FTP, and SFTP are enabled.

## Verified File Operations

The current VFS and frontend modules already include implementations for:

- Browse directories
- Upload files and temporary upload handling
- Download files
- Move and copy
- Rename
- Delete to recycle bin and restore from recycle bin
- Search
- Favorites
- Share records and share filters
- Archive browse, compression, and extraction

## Operational Notes

Some of these capabilities are feature-gated by configuration. In practice:

- If a protocol is disabled in config, it will not be available at runtime.
- If an optional frontend capability is turned off, the entry may disappear from the UI.
- Build modes may also affect what is bundled.

## Recommended Access Choices

Use the Web UI when you need:

- The easiest way to browse and manage files
- Preview flows
- Administrative operations already exposed by the frontend

Use WebDAV, S3, FTP, or SFTP when you need:

- Integration with existing tools
- Drive mounting or third-party file managers
- Automated workflows and scripting

## Next Steps

- [Quick Start](./quickstart)
- [Features](./features)
- [Install as Service](./install-service)
