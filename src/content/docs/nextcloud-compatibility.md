---
title: Nextcloud Compatibility
description: Compatibility checklist for using FileUni with the Nextcloud client ecosystem.
order: 4
---

# Nextcloud Compatibility

FileUni is designed to work with Nextcloud clients for file management, favorites, shares, media browsing, and WebDAV-based access.

## Current Compatibility Scope

FileUni provides the foundational features for Nextcloud client compatibility:

- WebDAV service support for file sync and remote access
- File management operations: browse, upload, download, rename, move, copy, delete
- Favorites, recent files, and recycle bin
- Media preview and common file preview capabilities

Actual client behavior may vary depending on your configuration, enabled modules, and the specific Nextcloud client version.

## Checklist

| Area | Target | Status |
| --- | --- | --- |
| WebDAV endpoint access | Compatible with Nextcloud client WebDAV connection | Available |
| File management | Browse, upload, download, rename, move, copy, delete | Available |
| Favorites | Favorites-related workflows | Available |
| Shares | Sharing-related workflows | In progress |
| Media | Media browsing and preview | Available |
| Chat | Chat capability | Planned |
| Notes | Notes capability | Available |

## Status Labels

- Available: the feature is ready for use.
- In progress: the feature is under active development.
- Planned: the feature is on the roadmap for future releases.

## Related Pages

- [Features](https://fileuni.com/features/)
- [Access and File Operations](./file-management)
- [Quick Start](./quickstart)
