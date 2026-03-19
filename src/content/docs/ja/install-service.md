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

FileUni をサービスとしてインストールするには、両方のランタイムディレクトリを明示的に指定する必要があります。インストールステップはこれらのパスをサービス定義に永続化します。

```bash
# Linux/macOS の例
# -c で設定ディレクトリ、-A でアプリデータディレクトリを指定
sudo ./fileuni -c /etc/fileuni -A /var/lib/fileuni service install

# Windows の例（管理者として実行）
.\fileuni.exe -c C:\FileUni\config -A C:\FileUni\data service install
```

> 重要：サービスとしてインストールする際は、常に `-c` と `-A` に絶対パスを使用してください。これにより、サービスがシステム再起動時にデータを正しく見つけられることが保証されます。

## 高度なサービスオプション

FileUni の `service install` は、きめ細かい制御のための追加フラグをサポートしています：

- `--service-label <LABEL>`：内部サービス名を変更（デフォルト：`io.fileuni.server`）。
- `--service-user <USER>`：プロセスを実行する OS ユーザーを指定（システムレベルのみ）。
- `--service-level <system|user>`：グローバルシステムサービスかユーザーごとのサービスかを選択。
- `--service-autostart <true|false>`：起動時の自動開始を有効または無効。
- `--service-workdir <DIR>`：カスタム作業ディレクトリを設定。

### 例：カスタムサービスタベル

```bash
sudo ./fileuni -c /etc/fileuni -A /data service install --service-label custom.fileuni.node
```

## トラブルシューティング

- 権限：システムレベルのサービスをインストールするには、通常 Root（Linux/macOS）または Administrator（Windows）権限が必要です。
- パス：`service install` には有効な `-c/--config-date` と `-A/--AppDataDir` パスが必要です。
- ログ：サービスの起動に失敗した場合は、Linux では `journalctl` などのシステムログ、Windows ではイベントビューアーを確認してください。