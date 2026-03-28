---
title: Externe Abhängigkeiten
description: Optionale externe ausführbare Dateien und Dienste, die von FileUni verwendet werden, wann sie zu installieren sind und welchen Konfigurationsschlüsseln sie zugeordnet sind.
order: 8
---

# Externe Abhängigkeiten

FileUni verwendet einen kleinen Satz externer ausführbarer Dateien für Vorschau-/Thumbnail-/Komprimierungsfunktionen sowie optionale KV- und SQL-Dienste für Produktionsbereitstellungen. Diese Seite erklärt, warum diese Abhängigkeiten existieren, wann Sie sie benötigen, wie Sie sie installieren und welche Konfigurationselemente danach aktualisiert werden müssen.

## 1. Externe ausführbare Dateien

Diese Tools ermöglichen Vorschau-, Thumbnail- und Komprimierungsfunktionen. Gängige Bild-Thumbnails sind jetzt bereits in der VFS-Schicht eingebaut, daher werden externe Tools hauptsächlich für PDF, Office, Text, Desktop-Video und optionale Fallback-Pfade benötigt. Wenn Sie eine Funktion nicht benötigen, können Sie das entsprechende Tool überspringen, aber stellen Sie sicher, dass die zugehörigen Konfigurationselemente entsprechend angepasst werden.

- 7-Zip (`7z` / `7z-full`)
  - Zweck: Hochkomprimierungsformate und Multi-Thread-Komprimierung/Dekomprimierung.
  - Benötigt wenn: Sie 7z-Format-Unterstützung oder beschleunigte Komprimierung über natives ZIP/TAR hinaus wünschen.
- libvips
  - Zweck: Schnelles externes Bild-/PDF-Thumbnail-Rendering.
  - Benötigt wenn: Sie PDF-Thumbnails aktivieren oder Bild-Thumbnails auf das externe Backend umstellen.
- ImageMagick
  - Zweck: Externes Fallback-Thumbnail-Rendering und Text-Thumbnail-Generierung.
  - Benötigt wenn: Sie Text-Thumbnails aktivieren oder für PDF-/Bild-Thumbnails einen externen Fallback wünschen.
- FFmpeg
  - Zweck: Video-Thumbnails (Frame-Extraktion) und Video-Metadaten.
  - Benötigt wenn: Sie Video-Thumbnails unter Linux, Windows, macOS oder FreeBSD aktivieren.
- LibreOffice (`soffice`)
  - Zweck: Office-Dokument-Thumbnails (Konvertierung zu PDF, dann Thumbnailing).
  - Benötigt wenn: Sie Office-Dokument-Thumbnails aktivieren.
- LaTeX-Toolchain (`latexmk` + `xelatex`)
  - Zweck: LaTeX-Vorschau und LaTeX-Thumbnails (Kompilierung zu PDF).
  - Benötigt wenn: Sie LaTeX-Vorschau oder LaTeX-Thumbnails aktivieren.

## 1.1 Integrierte Rust-Bild-Thumbnails

- FileUni enthält jetzt ein integriertes Rust-Backend für Bild-Thumbnails in der VFS-Schicht. Das ist der Standardpfad für Bild-Thumbnails.
- Unterstützte Eingabeformate: `jpg`, `jpeg`, `png`, `webp`, `gif`, `bmp`, `tiff`, `tif`, `svg`
- Unterstützte Ausgabeformate: `jpg`, `png`, `webp`
- Wenn `vfs_storage_hub.thumbnail.image.backend = "builtin"` gesetzt ist, benötigen diese Bild-Thumbnails weder libvips noch ImageMagick.
- Video-Thumbnails verwenden weiterhin FFmpeg unter Linux, Windows, macOS und FreeBSD. Unter Android und iOS werden stattdessen die System-Medienframeworks verwendet.
- PDF-, Office-, Text- und LaTeX-Thumbnails benötigen weiterhin externe Tools. Bei mobilen Server-Deployments sind PDF-, Office- und Text-Thumbnails standardmäßig deaktiviert.

## 2. Optionale externe Dienste (KV und SQL)

Diese Dienste sind optional und werden durch Konfiguration ausgewählt. Sie sind nicht im Docker-Image enthalten und sollten bei Bedarf separat bereitgestellt werden.

- KeyDB / Redis / Valkey
  - Zweck: Verteilter KV-Cache und Koordination.
  - Benötigt wenn: Sie einen KV-gestützten Cache-Typ für Produktion oder Multi-Instance-Bereitstellungen wählen.
- PostgreSQL (pgsql)
  - Zweck: Primäre SQL-Datenbank für Produktion.
  - Benötigt wenn: Sie `postgres`/`pgsql` als Datenbanktyp wählen.
- SQLite
  - Zweck: Eingebettete SQL-Datenbank für Einzelknoten- oder ressourcenarme Umgebungen.
  - Benötigt wenn: Sie `sqlite` als Datenbanktyp wählen.

## 3. Docker-Paketrichtlinie

Das Standard-Docker-Image enthält nur leichtgewichtige ausführbare Dateien, die weiterhin für Vorschau-, Thumbnail- und Komprimierungsabläufe sinnvoll sind. Gängige Bild-Thumbnails funktionieren bereits mit dem integrierten Rust-Backend. LibreOffice ist weiterhin ausgeschlossen, weil es zu groß ist, und KV/SQL-Dienste (KeyDB/Redis/Valkey/PostgreSQL) bleiben externe Dienste.

## 4. Nach der Installation zu aktualisierende Konfigurationselemente

Externe ausführbare Dateien:
- `vfs_storage_hub.thumbnail.tools.vips_path`
- `vfs_storage_hub.thumbnail.tools.imagemagick_path`
- `vfs_storage_hub.thumbnail.tools.ffmpeg_path`
- `vfs_storage_hub.thumbnail.tools.libreoffice_path`
- `latex_preview.latexmk_path`
- `file_compress.exe_7zip_path`

Funktionsschalter und Limits (häufig mit den oben genannten Tools verwendet):
- `latex_preview.enable_latexmk`
- `vfs_storage_hub.thumbnail.enabled`
- `vfs_storage_hub.thumbnail.image.backend`
- `vfs_storage_hub.thumbnail.<image|video|pdf|office|text>.enabled`

Optionale KV-Dienste:
- `fast_kv_storage_hub.kv_type`
- `fast_kv_storage_hub.redis_url`

Optionale SQL-Dienste:
- `database.db_type`
- `database.postgres_config.database_dsn`
- `database.sqlite_config.database_dsn`

## 5. Referenz für manuelle Installationsbefehle

Debian / Ubuntu (externe ausführbare Dateien):

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

LibreOffice (nur wenn Office-Thumbnails aktiviert sind):

```bash
sudo apt-get install -y libreoffice
```

Optionale Dienste über Docker (empfohlen für schnelles Setup):

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

Stellen Sie nach der Installation sicher, dass die Pfade zu den ausführbaren Dateien und die Dienst-URLs in `config.toml` Ihrer Umgebung entsprechen.
