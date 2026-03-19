---
title: Dependencias externas
description: Ejecutables y servicios opcionales usados por FileUni y sus claves de config.
order: 8
---

# Dependencias externas

FileUni usa un conjunto pequeno de ejecutables externos para preview/miniaturas/compresion, y servicios KV/SQL opcionales para produccion.

## 1. Ejecutables externos

- 7-Zip (`7z` / `7z-full`): compresion/descompresion avanzada
- libvips: miniaturas rapidas de imagen/PDF
- ImageMagick: fallback para miniaturas
- FFmpeg: miniaturas de video y metadatos
- LibreOffice (`soffice`): miniaturas de documentos Office
- Toolchain LaTeX (`latexmk` + `xelatex`): preview/miniaturas LaTeX

## 2. Servicios externos opcionales (KV y SQL)

- KeyDB / Redis / Valkey: cache KV distribuida
- PostgreSQL: base de datos SQL para produccion
- SQLite: base de datos embebida para despliegues simples

## 3. Claves de configuracion relacionadas

Ejecutables:

- `thumbnail.tools.vips_path`
- `thumbnail.tools.imagemagick_path`
- `thumbnail.tools.ffmpeg_path`
- `thumbnail.tools.libreoffice_path`
- `latex_preview.latexmk_path`
- `file_compress.exe_7zip_path`

Servicios:

- `fast_kv_storage_hub.kv_type`
- `fast_kv_storage_hub.redis_url`
- `database.db_type`
- `database.postgres_config.database_dsn`
- `database.sqlite_config.database_dsn`
