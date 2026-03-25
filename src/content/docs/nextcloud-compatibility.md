---
title: Nextcloud Compatibility
description: Compatibility checklist for using FileUni with the Nextcloud client ecosystem.
order: 4
---

# Nextcloud Compatibility

This page explains the compatibility target for FileUni when it is accessed from Nextcloud clients.

FileUni treats Nextcloud client compatibility as an important product characteristic after lightweight deployment and scalable performance.

## Compatibility Goal

FileUni aims to remain compatible with the mainstream Nextcloud client flows that users expect when migrating from a Nextcloud-based setup.

That compatibility target currently focuses on:

- File sync and remote file access through WebDAV
- File management operations used by desktop and mobile clients
- Favorites, shares, media-related access flows, and common metadata interactions
- Behavior that keeps existing Nextcloud client habits usable without redesigning the client side

## Current Compatibility Scope

The current repository already exposes the building blocks required for this direction:

- WebDAV service support in the storage stack
- Web UI and API flows for file browsing, upload, download, rename, move, copy, delete, recent history, favorites, and recycle bin
- Media preview and common file preview flows in the frontend
- Modular protocol services that can be enabled according to deployment size

These pieces are the basis for the Nextcloud compatibility work. Exact client behavior still depends on your configuration, enabled modules, and the specific Nextcloud client version.

## Checklist

| Area | Target | Status |
| --- | --- | --- |
| WebDAV endpoint access | Compatible with Nextcloud client WebDAV connection flows | Available foundation |
| File management | Browse, upload, download, rename, move, copy, delete | Implemented in current platform |
| Favorites | Keep favorites-related workflows compatible with Nextcloud clients | Implemented direction |
| Shares | Keep sharing-related workflows compatible with Nextcloud clients | Compatibility target |
| Media | Keep media browsing and preview flows usable with Nextcloud-style clients | Implemented direction |
| Chat | Planned follow-up capability | Planned |
| Notes | Planned follow-up capability | Planned |

## Notes About Status Labels

- Available foundation: the repository already contains the protocol or platform layer needed for this area.
- Implemented in current platform: the capability already exists in FileUni itself and is part of the compatibility base.
- Implemented direction: related FileUni capability already exists, and compatibility work builds on it.
- Compatibility target: this is part of the stated compatibility goal and should be read as a product direction, not a promise that every client edge case is already complete.
- Planned: listed future scope, not current functionality.

## Practical Guidance

When documenting or presenting FileUni externally, describe this area carefully:

- FileUni is a lightweight and scalable file platform.
- FileUni is also designed to stay compatible with Nextcloud clients for file management, favorites, shares, media flows, and WebDAV-based access.
- Chat and Notes are part of the planned follow-up scope, not features that should be presented as already released.

## Related Pages

- [Features](./features)
- [Access and File Operations](./file-management)
- [Quick Start](./quickstart)
