---
title: Dependencias externas
description: Ejecutables y servicios opcionales usados por FileUni y sus claves de config.
order: 8
---

# Dependencias externas

FileUni usa un conjunto pequeno de ejecutables externos para preview/miniaturas/compresion y servicios KV/SQL opcionales para produccion. Las miniaturas de imagen mas comunes ahora ya vienen integradas en la capa VFS, por lo que las herramientas externas se usan sobre todo para PDF, Office, texto, video en desktop y rutas de fallback opcionales.

## 1. Ejecutables externos

- 7-Zip (`7z` / `7z-full`): compresion/descompresion avanzada
- libvips: renderizado externo rapido de miniaturas de imagen/PDF
- ImageMagick: fallback externo para miniaturas y generacion de miniaturas de texto
- FFmpeg: miniaturas de video y metadatos en Linux, Windows, macOS y FreeBSD
- LibreOffice (`soffice`): miniaturas de documentos Office
- Toolchain LaTeX (`latexmk` + `xelatex`): preview/miniaturas LaTeX

## 1.1 Cobertura de miniaturas de imagen integradas en Rust

- FileUni incluye ahora un backend integrado de miniaturas de imagen en Rust dentro de la capa VFS. Es la ruta predeterminada para miniaturas de imagen.
- Formatos de entrada soportados: `jpg`, `jpeg`, `png`, `webp`, `gif`, `bmp`, `tiff`, `tif`, `svg`
- Formatos de salida soportados: `jpg`, `png`, `webp`
- Cuando `vfs_storage_hub.thumbnail.image.backend = "builtin"`, estas miniaturas de imagen no requieren libvips ni ImageMagick.
- Las miniaturas de video siguen usando FFmpeg en Linux, Windows, macOS y FreeBSD. Android e iOS usan el framework multimedia del sistema.
- Las miniaturas de PDF, Office, texto y LaTeX siguen dependiendo de herramientas externas. En despliegues moviles como servidor, PDF, Office y texto se desactivan por defecto.

## 2. Servicios externos opcionales (KV y SQL)

- KeyDB / Redis / Valkey: cache KV distribuida
- PostgreSQL: base de datos SQL para produccion
- SQLite: base de datos embebida para despliegues simples

## 3. Claves de configuracion relacionadas

Ejecutables:

- `vfs_storage_hub.thumbnail.tools.vips_path`
- `vfs_storage_hub.thumbnail.tools.imagemagick_path`
- `vfs_storage_hub.thumbnail.tools.ffmpeg_path`
- `vfs_storage_hub.thumbnail.tools.libreoffice_path`
- `latex_preview.latexmk_path`
- `file_compress.exe_7zip_path`

Interruptores habituales:

- `vfs_storage_hub.thumbnail.enabled`
- `vfs_storage_hub.thumbnail.image.backend`
- `vfs_storage_hub.thumbnail.<image|video|pdf|office|text>.enabled`
- `latex_preview.enable_latexmk`

Servicios:

- `fast_kv_storage_hub.kv_type`
- `fast_kv_storage_hub.redis_url`
- `database.db_type`
- `database.postgres_config.database_dsn`
- `database.sqlite_config.database_dsn`
