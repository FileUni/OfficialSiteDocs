---
title: External Dependencies
description: Optional external executables and services used by FileUni, when to install them, and which config keys they map to.
order: 8
---

# External Dependencies

FileUni uses a small set of external executables for preview/thumbnail/compression features, plus optional KV and SQL services for production deployments. This page explains why these dependencies exist, when you need them, how to install them, and which configuration items must be set afterward.

## 1. External Executables

These tools enable preview, thumbnail, and compression features. Common image thumbnails are now built into the VFS layer, so external tools are mainly needed for PDF, Office, text, desktop video, and optional fallback paths. If you do not need a feature, you can skip the corresponding tool, but make sure the related config items are adjusted accordingly.

- 7-Zip (`7z` / `7z-full`)
  - Purpose: High-compression formats and multi-threaded compression/decompression.
  - Needed when: You want 7z format support or accelerated compression beyond native ZIP/TAR.
- libvips
  - Purpose: Fast external image/PDF thumbnail rendering.
  - Needed when: You enable PDF thumbnails or switch image thumbnails to the external backend.
- ImageMagick
  - Purpose: Fallback external thumbnail rendering, text thumbnail generation, and rasterization for formats such as `psd` and `ai`.
  - Needed when: You enable text thumbnails or want a fallback for PDF/image thumbnails while using the external path.
- FFmpeg
  - Purpose: Video thumbnails (frame extraction), WebUI video transcoding, and video metadata.
  - Needed when: You enable video thumbnails or video transcoding on Linux, Windows, macOS, or FreeBSD.
- LibreOffice (`soffice`)
  - Purpose: Office document thumbnails (convert to PDF, then thumbnail).
  - Needed when: You enable Office document thumbnails.
- LaTeX toolchain (`latexmk` + `xelatex`)
  - Purpose: LaTeX preview and LaTeX thumbnails (compile to PDF).
  - Needed when: You enable LaTeX preview or LaTeX thumbnails.
- Blender
  - Purpose: 3D model thumbnails (`obj`, `stl`, `gltf`, `glb`).
  - Needed when: You enable 3D model thumbnails.

## 1.1 Built-in Rust Image Thumbnail Coverage

- FileUni now ships a built-in Rust image thumbnail backend inside the VFS layer. This is the default image thumbnail path.
- Supported source formats: `jpg`, `jpeg`, `png`, `webp`, `gif`, `bmp`, `tiff`, `tif`, `svg`
- Additional common formats handled through the external raster toolchain: `psd`, `ai`
- Additional 3D model formats handled through Blender: `obj`, `stl`, `gltf`, `glb`
- Supported output formats: `jpg`, `png`, `webp`
- When `vfs_storage_hub.thumbnail.image.backend = "builtin"`, these image thumbnails do not require libvips or ImageMagick.
- If the built-in image backend cannot decode a source format and libvips or ImageMagick is configured, FileUni falls back to the external raster path automatically.
- Video thumbnails still use FFmpeg on Linux, Windows, macOS, and FreeBSD. Android and iOS use the system media framework instead.
- When `vfs_storage_hub.media_transcoding.hardware.enabled = true`, desktop video thumbnails try the same hardware backend first for frame extraction and automatically fall back to software extraction if that path fails.
- PDF, Office, text, and LaTeX thumbnails still rely on external tools. On mobile server deployments, PDF, Office, and text thumbnails are disabled by default.

## 2. Optional External Services (KV and SQL)

These services are optional and selected by configuration. They are not bundled inside the Docker image and should be deployed separately when required.

- KeyDB / Redis / Valkey
 - Purpose: Distributed KV cache and coordination.
 - Needed when: You choose a KV-backed cache type for production or multi-instance deployments.
- PostgreSQL (pgsql)
 - Purpose: Primary SQL database for production.
 - Needed when: You choose `postgres`/`pgsql` as the database type.
- SQLite
 - Purpose: Embedded SQL database for single-node or low-resource environments.
 - Needed when: You choose `sqlite` as the database type.

## 3. Docker Packaging Policy

The default Docker image only bundles lightweight executables still useful for preview, thumbnail, and compression flows. Common image thumbnails already work with the built-in Rust backend. LibreOffice is still excluded because it is too large, and KV/SQL services (KeyDB/Redis/Valkey/PostgreSQL) are still external by design.

## 4. Configuration Items to Update After Installation

External executables:
- `vfs_storage_hub.thumbnail.tools.vips_path`
- `vfs_storage_hub.thumbnail.tools.imagemagick_path`
- `vfs_storage_hub.external_tools.ffmpeg_path`
- `vfs_storage_hub.thumbnail.tools.libreoffice_path`
- `vfs_storage_hub.thumbnail.tools.blender_path`
- `file_manager_api.latex_preview.latexmk_path`
- `vfs_storage_hub.file_compress.exe_7zip_path`

Video transcoding:
- `vfs_storage_hub.media_transcoding.enabled`
- `vfs_storage_hub.media_transcoding.video.*`
- `vfs_storage_hub.media_transcoding.hardware.*`

Feature switches and limits (commonly used with the tools above):
- `latex_preview.enable_latexmk`
- `vfs_storage_hub.thumbnail.enabled`
- `vfs_storage_hub.thumbnail.image.backend`
- `vfs_storage_hub.thumbnail.<image|video|pdf|office|text>.enabled`
- `vfs_storage_hub.thumbnail.model3d.enabled`

Optional KV services:
- `fast_kv_storage_hub.kv_type`
- `fast_kv_storage_hub.redis_url`

Optional SQL services:
- `database.db_type`
- `database.postgres_config.database_dsn`
- `database.sqlite_config.database_dsn`

## 5. Manual Installation Command Reference

Debian / Ubuntu (external executables):

```bash
sudo apt-get update
sudo apt-get install -y \
  ffmpeg \
  imagemagick \
  libvips-tools \
  p7zip-full \
  latexmk \
  texlive-xetex
```

LibreOffice (only if Office thumbnails are enabled):

```bash
sudo apt-get install -y libreoffice
```

Optional services via Docker (recommended for quick setup):

```bash
# Redis
docker run -d --name redis -p 6379:6379 redis:7

# Valkey
docker run -d --name valkey -p 6379:6379 valkey/valkey:7

# KeyDB
docker run -d --name keydb -p 6379:6379 eqalpha/keydb:alpine

# PostgreSQL
docker run -d --name postgres -p 5432:5432 \
  -e POSTGRES_PASSWORD=admin888 \
  -e POSTGRES_DB=fileuni \
  postgres:16
```

After installing, ensure the executable paths and service URLs in `config.toml` match your environment.
