---
title: クイックスタート
description: CLI またはデスクトップアプリで現在の FileUni プロジェクトを開始。
order: 2
---

# クイックスタート

このガイドは、現在のワークスペースレイアウトとランタイムモデルに基づいています。

## 1. ランタイムエントリを選択

FileUni には現在 2 つのメインエントリポイントがあります：

- `fileuni` CLI：サーバーの起動、サービス管理、バックアップのエクスポート/インポート、管理者アクセスの回復に使用されます。
- `fileuni-gui`：同じコアライブラリをラップする Tauri デスクトップラッパーで、サービス制御、設定編集、管理者パスワードの回復を備えています。

[ダウンロードページ](https://fileuni.com/ja/download)から適切なパッケージを入手してください。

- サーバーデプロイの場合は、CLI パッケージを選択してください。
- ローカルデスクトップ使用の場合は、GUI パッケージを選択してください。

## 2. ランタイムディレクトリを準備

現在のプロジェクトは単一のランタイムディレクトリを使用します：

- `-R` / `--runtime-dir`：設定、データベース、キャッシュ、その他のランタイムファイルをまとめて保存する単一のランタイムディレクトリ
- `--runtime-dir`：`service install` でのみ使うランタイムディレクトリ

固定設定ファイルパスは：

```text
{runtime-dir}/config.toml
```

ランタイムレイアウトの例：

```text
./runtime
```

サービスインストールの場合は、相対パスではなく絶対パスを使用してください。

## 3. 設定で参照されるサービスを準備

FileUni は環境変数を設定ソースとして使用しません。ランタイム値は `config.toml` から取得する必要があります。

現在のプロジェクトでは、デプロイは通常、そのファイルで参照されるバッキングサービスの準備を意味します。特に：

- データベース接続
- KV サービス接続
- VFS 設定で必要なストレージロケーション

`{runtime-dir}/config.toml` がない場合、FileUni は初回起動時に example config を自動作成し、ランタイムディレクトリを初期化します。

データベースに `yh_users` テーブルがまだない場合、起動時に既定の管理者アカウント `admin/admin888` も作成されます。

データベースに既にユーザーテーブルがある場合、既存ユーザーは変更されず、管理者アクセスも自動ではリセットされません。

## 4. FileUni を起動する

初回起動：

```bash
./fileuni --runtime-dir ./runtime
```

後で管理者アクセスを回復する場合：

```bash
./fileuni --runtime-dir ./runtime reset-admin --user admin --password admin888
```

完全なサーバーを起動せずに設定を検証するには：

```bash
./fileuni --runtime-dir ./runtime config test
```

通常どおりサーバーを起動するには：

```bash
./fileuni --runtime-dir ./runtime
```

## 5. Web インターフェースを開く

起動が成功すると、FileUni は以下のアクティブなアドレスを出力します：

- Web インターフェース：`http://<host>:<port>/`
- HTTP API：`http://<host>:<port>`
- OpenAPI JSON：`http://<host>:<port>/api/v1/openapi.json`

プロジェクトで使用されるデフォルトのローカル Web インターフェース URL は：

```text
http://localhost:19000/
```

設定によっては、S3、FTP、SFTP エンドポイントも有効になっている場合があります。

## 次のステップ

- [機能](https://fileuni.com/ja/features/)
- [アクセスとファイル操作](./file-management)
- [サービスとしてインストール](./install-service)
