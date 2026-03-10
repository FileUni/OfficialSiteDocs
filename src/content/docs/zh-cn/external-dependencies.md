---
title: 外部依赖
description: FileUni 使用的外部可执行程序与可选服务，安装场景与配置项。
order: 8
---

# 外部依赖

FileUni 在预览、缩略图和压缩等功能上依赖少量外部可执行程序，同时支持可选的 KV 与 SQL 服务以满足生产环境需求。本页说明依赖的用途、安装条件、需要调整的配置项，以及常用的手动安装命令。

## 1. 外部可执行程序

这些工具用于预览、缩略图与压缩。如果某个功能不需要，可以不安装对应工具，但需要同步调整相关配置项以避免启动失败或功能不可用。

- 7-Zip（`7z` / `7z-full`）
  - 作用：提供 7z 格式与多线程压缩/解压能力。
  - 需要安装的情况：希望使用 7z 格式或提升压缩性能。
- libvips
  - 作用：高性能图片/PDF 缩略图渲染。
  - 需要安装的情况：开启图片或 PDF 缩略图（首选引擎）。
- ImageMagick
  - 作用：缩略图回退渲染与文本缩略图生成。
  - 需要安装的情况：启用文本缩略图，或作为 PDF/图片缩略图回退。
- FFmpeg
  - 作用：视频缩略图（抽帧）与视频信息解析。
  - 需要安装的情况：启用视频缩略图。
- LibreOffice（`soffice`）
  - 作用：Office 文档缩略图（先转 PDF，再走缩略图流程）。
  - 需要安装的情况：启用 Office 文档缩略图。
- LaTeX 工具链（`latexmk` + `xelatex`）
  - 作用：LaTeX 预览与 LaTeX 缩略图（编译为 PDF）。
  - 需要安装的情况：启用 LaTeX 预览或 LaTeX 缩略图。

## 2. 可选外部服务（KV 与 SQL）

这些服务是可选项，按配置启用，默认不内置在 Docker 镜像中。需要时由部署方独立提供并配置接入。

- KeyDB / Redis / Valkey
  - 作用：分布式 KV 缓存与多实例协调。
  - 需要安装的情况：选择 KV 类型作为缓存后端，尤其是生产或多实例部署。
- PostgreSQL（pgsql）
  - 作用：生产环境主要 SQL 数据库。
  - 需要安装的情况：`database.db_type` 选择 `postgres/pgsql`。
- SQLite
  - 作用：轻量单机或低资源环境数据库。
  - 需要安装的情况：`database.db_type` 选择 `sqlite`。

## 3. Docker 集成策略

默认 Docker 镜像只内置预览/缩略图/压缩所需的轻量可执行程序，不内置 LibreOffice（体积过大），也不内置 KeyDB/Redis/Valkey/PostgreSQL（均为可选外部服务）。这些服务应由部署方按需独立提供。

## 4. 安装后需要修改的配置项

外部可执行程序：
- `thumbnail.tools.vips_path`
- `thumbnail.tools.imagemagick_path`
- `thumbnail.tools.ffmpeg_path`
- `thumbnail.tools.libreoffice_path`
- `latex_preview.latexmk_path`
- `file_compress.exe_7zip_path`

功能开关与限制（与上面工具常配套使用）：
- `latex_preview.enable_latexmk`
- `thumbnail.enabled`
- `thumbnail.<image|video|pdf|office|text>.enabled`

可选 KV 服务：
- `fast_kv_storage_hub.kv_type`
- `fast_kv_storage_hub.redis_url`

可选 SQL 服务：
- `database.db_type`
- `database.postgres_config.database_dsn`
- `database.sqlite_config.database_dsn`

## 5. 手动安装命令参考

Debian / Ubuntu（外部可执行程序）：

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

LibreOffice（仅在启用 Office 缩略图时需要）：

```bash
sudo apt-get install -y libreoffice
```

可选服务的 Docker 快速部署：

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

安装完成后，请将 `config.toml` 中的可执行程序路径与服务连接地址配置为实际环境值。
