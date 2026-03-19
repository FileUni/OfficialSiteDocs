---
title: FileUni ドキュメント
description: 現在の FileUni プロジェクトの実用的なドキュメント。
order: 0
---

# FileUni ドキュメント

このサイトは仮定的な製品計画ではなく、現在の FileUni プロジェクトを追跡しています。

FileUni は Rust ベースのファイルプラットフォームです：

- CLI サーバーと Tauri デスクトップアプリの両方が使用する共有コア
- `/` から提供される Web UI
- `/api/v1/openapi.json` で公開される OpenAPI ドキュメント
- WebDAV、S3、FTP、SFTP などのオプションのアクセスプロトコル
- 設定ディレクトリとアプリデータディレクトリに分離されたランタイムディレクトリ

## クイックリンク

- [システム要件](./system-requirements)
- [クイックスタート](./quickstart)
- [FileUni をダウンロード](https://fileuni.com/ja/download)
- [機能](./features)
- [アクセスとファイル操作](./file-management)
- [サービスとしてインストール](./install-service)
- [管理者パスワードのリセット](./get-admin-passwd)

## 現在のドキュメント範囲

現在のドキュメントは、このリポジトリで既に検証可能な内容に焦点を当てています：

- ローカルデプロイと初回起動
- ランタイムディレクトリレイアウトとサービスインストール要件
- Web UI、API、プロトコルベースのアクセス
- 管理者のメンテナンスタスク

現在のプロジェクトの状態と一致しないトピックは、現時点では削除されています。