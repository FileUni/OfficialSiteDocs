---
title: 外部依存関係
description: FileUni で使用されるオプションの外部実行可能ファイルとサービス、インストール時期、対応する設定キー。
order: 8
---

# 外部依存関係

FileUni はプレビュー/サムネイル/圧縮機能のために少数の外部実行可能ファイルと、本番デプロイ向けのオプションの KV および SQL サービスを使用します。このページでは、これらの依存関係が存在する理由、いつ必要か、インストール方法、設定後に更新する必要がある項目を説明します。

## 1. 外部実行可能ファイル

これらのツールはプレビュー、サムネイル、圧縮機能を有効にします。一般的な画像サムネイルはすでに VFS レイヤーへ内蔵されているため、外部ツールは主に PDF、Office、テキスト、デスクトップ環境の動画、および任意のフォールバック経路で必要になります。機能が必要ない場合は、対応するツールをスキップできますが、関連する設定項目を適切に調整してください。

- 7-Zip (`7z` / `7z-full`)
  - 目的：高圧縮フォーマットとマルチスレッド圧縮/展開。
  - 必要な場合：7z フォーマットのサポートまたはネイティブ ZIP/TAR 以上の高速圧縮が必要な場合。
- libvips
  - 目的：高速な外部画像/PDF サムネイルレンダリング。
  - 必要な場合：PDF サムネイルを有効にする場合、または画像サムネイルを external バックエンドへ切り替える場合。
- ImageMagick
  - 目的：外部フォールバックのサムネイルレンダリングとテキストサムネイル生成。
  - 必要な場合：テキストサムネイルを有効にする場合、または PDF/画像サムネイルに external 経路のフォールバックが必要な場合。
- FFmpeg
  - 目的：ビデオサムネイル（フレーム抽出）とビデオメタデータ。
  - 必要な場合：Linux、Windows、macOS、FreeBSD でビデオサムネイルを有効にする場合。
- LibreOffice (`soffice`)
  - 目的：Office ドキュメントサムネイル（PDF に変換してからサムネイル化）。
  - 必要な場合：Office ドキュメントサムネイルを有効にする場合。
- LaTeX ツールチェーン (`latexmk` + `xelatex`)
  - 目的：LaTeX プレビューと LaTeX サムネイル（PDF にコンパイル）。
  - 必要な場合：LaTeX プレビューまたは LaTeX サムネイルを有効にする場合。

## 1.1 内蔵 Rust 画像サムネイルの対応範囲

- FileUni には VFS レイヤー内に Rust 製の画像サムネイルバックエンドが組み込まれており、これがデフォルトの画像サムネイル経路です。
- 対応入力形式：`jpg`, `jpeg`, `png`, `webp`, `gif`, `bmp`, `tiff`, `tif`, `svg`
- 対応出力形式：`jpg`, `png`, `webp`
- `vfs_storage_hub.thumbnail.image.backend = "builtin"` の場合、これらの画像サムネイルに libvips や ImageMagick は不要です。
- 動画サムネイルは Linux、Windows、macOS、FreeBSD では引き続き FFmpeg を使い、Android と iOS ではシステムのメディアフレームワークを使います。
- PDF、Office、テキスト、LaTeX のサムネイルは引き続き外部ツールに依存します。モバイル端末をサーバーとして使う構成では、PDF、Office、テキストのサムネイルはデフォルトで無効です。

## 2. オプションの外部サービス（KV と SQL）

これらのサービスはオプションであり、設定で選択されます。Docker イメージにはバンドルされておらず、必要に応じて別途デプロイする必要があります。

- KeyDB / Redis / Valkey
  - 目的：分散 KV キャッシュと調整。
  - 必要な場合：本番またはマルチインスタンスデプロイで KV バックエンドキャッシュタイプを選択する場合。
- PostgreSQL (pgsql)
  - 目的：本番向けのプライマリ SQL データベース。
  - 必要な場合：データベースタイプとして `postgres`/`pgsql` を選択する場合。
- SQLite
  - 目的：シングルノードまたは低リソース環境向けの埋め込み SQL データベース。
  - 必要な場合：データベースタイプとして `sqlite` を選択する場合。

## 3. Docker パッケージングポリシー

デフォルトの Docker イメージには、プレビュー、サムネイル、圧縮の流れで引き続き有効な軽量実行ファイルのみがバンドルされています。一般的な画像サムネイルはすでに内蔵 Rust バックエンドで動作します。LibreOffice はサイズが大きいため引き続き同梱されず、KV/SQL サービス（KeyDB/Redis/Valkey/PostgreSQL）も引き続き外部サービスです。

## 4. インストール後に更新する設定項目

外部実行可能ファイル：
- `vfs_storage_hub.thumbnail.tools.vips_path`
- `vfs_storage_hub.thumbnail.tools.imagemagick_path`
- `vfs_storage_hub.thumbnail.tools.ffmpeg_path`
- `vfs_storage_hub.thumbnail.tools.libreoffice_path`
- `latex_preview.latexmk_path`
- `file_compress.exe_7zip_path`

機能スイッチと制限（上記のツールで一般的に使用）：
- `latex_preview.enable_latexmk`
- `vfs_storage_hub.thumbnail.enabled`
- `vfs_storage_hub.thumbnail.image.backend`
- `vfs_storage_hub.thumbnail.<image|video|pdf|office|text>.enabled`

オプションの KV サービス：
- `fast_kv_storage_hub.kv_type`
- `fast_kv_storage_hub.redis_url`

オプションの SQL サービス：
- `database.db_type`
- `database.postgres_config.database_dsn`
- `database.sqlite_config.database_dsn`

## 5. 手動インストールコマンドリファレンス

Debian / Ubuntu（外部実行可能ファイル）：

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

LibreOffice（Office サムネイルが有効な場合のみ）：

```bash
sudo apt-get install -y libreoffice
```

Docker 経由のオプションサービス（クイックセットアップに推奨）：

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

インストール後、`config.toml` の実行可能ファイルパスとサービス URL が環境に一致していることを確認してください。
