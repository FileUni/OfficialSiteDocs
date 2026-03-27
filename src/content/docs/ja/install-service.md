---
title: サービスとしてインストール
description: FileUni をオペレーティングシステムサービスとしてインストール・管理。
---

# FileUni をサービスとしてインストール

FileUni には Windows、macOS、Linux 向けの組み込みサービス管理が含まれています。CLI がこれらの操作の信頼できるエントリポイントであり、GUI は同じサービス制御をラップしています。

## サービスコマンド

`service` サブコマンドを使用して FileUni サービスを管理できます：

```bash
fileuni service <ACTION> [OPTIONS]
```

### サポートされるアクション

| アクション | 説明 |
|--------|-------------|
| `install` | FileUni をシステムサービスとしてインストール |
| `uninstall` | システムからサービスを削除 |
| `start` | サービスを開始 |
| `stop` | サービスを停止 |
| `status` | サービスのステータスを確認 |
| `reload` | サービス設定をリロード |

## クイックインストール

FileUni をサービスとしてインストールするには、1 つのランタイムディレクトリを明示的に指定します。インストール時にそのパスがサービス定義へ保存されます。

```bash
# Linux/macOS の例
# --runtime-dir で共通のランタイムディレクトリを指定
sudo ./fileuni --runtime-dir /srv/fileuni service install

# Windows の例（管理者として実行）
.\fileuni.exe --runtime-dir C:\FileUni\runtime service install
```

> 重要：サービスとしてインストールする際は、必ず `--runtime-dir` に絶対パスを使ってください。そうすると、再起動後もサービスが正しいデータを見つけられます。

## 高度なサービスオプション

FileUni の `service install` は、きめ細かい制御のための追加フラグをサポートしています：

- `--service-label <LABEL>`：内部サービス名を変更（デフォルト：`io.fileuni.server`）。
- `--service-user <USER>`：プロセスを実行する OS ユーザーを指定（システムレベルのみ）。
- `--service-level <system|user>`：グローバルシステムサービスかユーザーごとのサービスかを選択。
- `--service-autostart <true|false>`：起動時の自動開始を有効または無効。
- `--service-workdir <DIR>`：`service install` でのみ使える `--runtime-dir` の別名。

### 例：カスタムサービスタベル

```bash
sudo ./fileuni --runtime-dir /srv/fileuni service install --service-label custom.fileuni.node
```

## トラブルシューティング

- 権限：システムレベルのサービスをインストールするには、通常 Root（Linux/macOS）または Administrator（Windows）権限が必要です。
- パス：`service install` には有効な `--runtime-dir` パスが必要です。
- ログ：サービスの起動に失敗した場合は、Linux では `journalctl` などのシステムログ、Windows ではイベントビューアーを確認してください。
