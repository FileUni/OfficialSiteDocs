---
title: クイックスタート
description: CLI またはデスクトップアプリで現在の FileUni プロジェクトを開始。
order: 2
---

# クイックスタート

このガイドは、現在のワークスペースレイアウトとランタイムモデルに基づいています。

## 1. ランタイムエントリを選択

FileUni には現在 2 つのメインエントリポイントがあります：

- `fileuni` CLI：サーバーの起動、必要に応じた設定センターの起動、サービスの管理、バックアップのエクスポート/インポートに使用されます。
- `fileuni-gui`：同じコアライブラリをラップする Tauri デスクトップラッパーで、サービス制御、設定編集、同じ初回実行セットアップ動作を備えています。

[ダウンロードページ](https://fileuni.com/ja/download)から適切なパッケージを入手してください。

- サーバーデプロイの場合は、CLI パッケージを選択してください。
- ローカルデスクトップ使用の場合は、GUI パッケージを選択してください。

## 2. ランタイムディレクトリを準備

現在のプロジェクトは単一のランタイムディレクトリを使用します：

- `-R` / `--runtime-dir`：設定、install lock、データベース、キャッシュ、その他のランタイムファイルをまとめて保存する単一のランタイムディレクトリ
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

`{runtime-dir}/install.lock` がない場合、FileUni は通常起動の前に設定センターを開きます。

設定センターは `config.toml` と `install.lock` を書き込み、組み込み管理者アカウントを確保します。

通常の起動では特権アカウントは自動作成されません。`install.lock` が存在するのに管理者アカウントがない場合、起動は拒否されます。

## 4. FileUni を起動する

`{runtime-dir}/install.lock` がない場合、CLI と GUI の両方が通常の起動前に設定センターを開きます。

あとで再び設定センターを開きたい場合は、`{runtime-dir}/install.lock` を削除してから通常どおり FileUni を起動してください：

```bash
rm -f ./runtime/install.lock
./fileuni --runtime-dir ./runtime
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
