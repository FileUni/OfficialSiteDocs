---
title: FileUni 文件中心
description: 以當前 FileUni 專案為準的實用文件。
slug: zh-Hant
order: 0
---

# FileUni 文件中心

這裡的內容以當前倉庫裡的實際實現為準，不再保留脫離專案現狀的產品化描述。

當前的 FileUni 主要包含這些已落地能力：

- CLI 與 Tauri GUI 共用的 Rust 核心
- 透過 `/` 提供的 Web 介面
- 透過 `/api/v1/openapi.json` 暴露的 OpenAPI 描述
- 按設定啟用的 WebDAV、S3、FTP、SFTP 訪問
- 單一執行目錄模型：統一儲存設定和執行資料

## 快捷入口

- [系統最低要求](./system-requirements)
- [快速開始](./quickstart)
- [下載與安裝](https://fileuni.com/zh-Hant/download)
- [功能特性](https://fileuni.com/zh-Hant/features/)
- [Nextcloud 相容性](./nextcloud-compatibility)
- [訪問方式與檔案操作](./file-management)
- [安裝為系統服務](./install-service)
- [重置管理員密碼](./get-admin-passwd)

## 當前文件範圍

目前文件只保留能被原始碼或現有專案結構直接證明的內容：

- 本地部署與首次啟動
- 執行目錄和系統服務安裝
- WebUI、API 與標準協議訪問
- Nextcloud 客戶端相容定位與當前範圍
- 管理員維護操作

與當前專案狀態不一致的產品介紹、使用者管理等頁面暫時移除。
