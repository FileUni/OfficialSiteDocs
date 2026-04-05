---
title: 外部依賴
description: FileUni 使用的外部可執行程式與可選服務，安裝場景與設定項。
slug: zh-Hant/external-dependencies
order: 8
---

# 外部依賴

FileUni 在預覽、縮圖和壓縮等功能上依賴少量外部可執行程式，同時支援可選的 KV 與 SQL 服務以滿足生產環境需求。本頁說明依賴的用途、安裝條件、需要調整的設定項，以及常用的手動安裝命令。

## 1. 外部可執行程式

這些工具用於預覽、縮圖與壓縮。常見圖片縮圖現在已經內建在 VFS 層，因此外部工具主要用於 PDF、Office、文字、桌面端影片，以及可選的外部回退鏈路。如果某個功能不需要，可以不安裝對應工具，但需要同步調整相關設定項以避免啟動失敗或功能不可用。

- 7-Zip（`7z` / `7z-full`）
  - 作用：提供 7z 格式與多執行緒壓縮/解壓能力。
  - 需要安裝的情況：希望使用 7z 格式或提升壓縮效能。
- libvips
  - 作用：高效能外部圖片/PDF 縮圖渲染。
  - 需要安裝的情況：啟用 PDF 縮圖，或把圖片縮圖切換到 external 後端。
- ImageMagick
  - 作用：外部縮圖回退渲染、文字縮圖生成，以及 `psd` / `ai` 這類需要外部光柵化的格式。
  - 需要安裝的情況：啟用文字縮圖，或希望為 PDF/圖片縮圖提供 external 路徑回退。
- FFmpeg
  - 作用：影片縮圖（抽幀）、WebUI 影片轉碼與影片資訊解析。
  - 需要安裝的情況：在 Linux、Windows、macOS、FreeBSD 上啟用影片縮圖或影片轉碼。
- LibreOffice（`soffice`）
  - 作用：Office 文件縮圖（先轉 PDF，再走縮圖流程）。
  - 需要安裝的情況：啟用 Office 文件縮圖。
- LaTeX 工具鏈（`latexmk` + `xelatex`）
  - 作用：LaTeX 預覽與 LaTeX 縮圖（編譯為 PDF）。
  - 需要安裝的情況：啟用 LaTeX 預覽或 LaTeX 縮圖。
- Blender
  - 作用：3D 模型縮圖（`obj`、`stl`、`gltf`、`glb`）。
  - 需要安裝的情況：啟用 3D 模型縮圖。

## 1.1 內建 Rust 圖片縮圖覆蓋範圍

- FileUni 現在在 VFS 層內建了 Rust 圖片縮圖後端，這也是預設圖片縮圖路徑。
- 支援的輸入格式：`jpg`、`jpeg`、`png`、`webp`、`gif`、`bmp`、`tiff`、`tif`、`svg`
- 額外可透過外部 raster 工具鏈處理的常見格式：`psd`、`ai`
- 額外可透過 Blender 處理的 3D 模型格式：`obj`、`stl`、`gltf`、`glb`
- 支援的輸出格式：`jpg`、`png`、`webp`
- 當 `vfs_storage_hub.thumbnail.image.backend = "builtin"` 時，這些圖片縮圖不依賴 libvips 或 ImageMagick。
- 當內建圖片縮圖後端無法解析某些格式時，如果已經設定 libvips 或 ImageMagick，FileUni 會自動回退到外部光柵化工具鏈。
- 影片縮圖在 Linux、Windows、macOS、FreeBSD 上繼續使用 FFmpeg；Android 與 iOS 改走系統媒體框架。
- 當 `vfs_storage_hub.media_transcoding.hardware.enabled = true` 時，桌面端影片縮圖會優先複用同一套硬體後端嘗試硬體抽幀，失敗時自動回退到軟體方式。
- PDF、Office、文字、LaTeX 縮圖仍然依賴外部工具；在移動端作為伺服器的部署場景中，PDF、Office、文字縮圖預設關閉。

## 2. 可選外部服務（KV 與 SQL）

這些服務是可選項，按設定啟用，預設不內建在 Docker 映象中。需要時由部署方獨立提供並設定接入。

- KeyDB / Redis / Valkey
 - 作用：分散式 KV 快取與多例項協調。
 - 需要安裝的情況：選擇 KV 型別作為快取後端，尤其是生產或多例項部署。
- PostgreSQL（pgsql）
 - 作用：生產環境主要 SQL 資料庫。
 - 需要安裝的情況：`database.db_type` 選擇 `postgres/pgsql`。
- SQLite
 - 作用：輕量單機或低資源環境資料庫。
 - 需要安裝的情況：`database.db_type` 選擇 `sqlite`。

## 3. Docker 整合策略

預設 Docker 映象只內建當前仍對預覽、縮圖、壓縮有價值的輕量可執行程式。常見圖片縮圖已經可以直接使用內建 Rust 後端；LibreOffice 仍然不內建（體積過大），KeyDB/Redis/Valkey/PostgreSQL 也仍然是外部服務。

## 4. 安裝後需要修改的設定項

外部可執行程式：
- `vfs_storage_hub.thumbnail.tools.vips_path`
- `vfs_storage_hub.thumbnail.tools.imagemagick_path`
- `vfs_storage_hub.external_tools.ffmpeg_path`
- `vfs_storage_hub.thumbnail.tools.libreoffice_path`
- `vfs_storage_hub.thumbnail.tools.blender_path`
- `file_manager_api.latex_preview.latexmk_path`
- `vfs_storage_hub.file_compress.exe_7zip_path`

影片轉碼相關：
- `vfs_storage_hub.media_transcoding.enabled`
- `vfs_storage_hub.media_transcoding.video.*`
- `vfs_storage_hub.media_transcoding.hardware.*`

功能開關與限制（與上面工具常配套使用）：
- `latex_preview.enable_latexmk`
- `vfs_storage_hub.thumbnail.enabled`
- `vfs_storage_hub.thumbnail.image.backend`
- `vfs_storage_hub.thumbnail.<image|video|pdf|office|text>.enabled`
- `vfs_storage_hub.thumbnail.model3d.enabled`

可選 KV 服務：
- `fast_kv_storage_hub.kv_type`
- `fast_kv_storage_hub.redis_url`

可選 SQL 服務：
- `database.db_type`
- `database.postgres_config.database_dsn`
- `database.sqlite_config.database_dsn`

## 5. 手動安裝命令參考

Debian / Ubuntu（外部可執行程式）：

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

LibreOffice（僅在啟用 Office 縮圖時需要）：

```bash
sudo apt-get install -y libreoffice
```

可選服務的 Docker 快速部署：

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

安裝完成後，請將 `config.toml` 中的可執行程式路徑與服務連線地址設定為實際環境值。
