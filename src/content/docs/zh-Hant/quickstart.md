---
title: 快速開始
description: 基於當前 FileUni 專案的啟動說明。
slug: zh-Hant/quickstart
order: 2
---

# 快速開始

本頁只說明當前倉庫裡已經存在的執行方式和入口。

## 1. 選擇執行入口

FileUni 目前主要有兩個入口：

- `fileuni` CLI：用於啟動服務、在需要時開啟設定中心、管理系統服務，以及匯入匯出備份。
- `fileuni-gui`：基於 Tauri 的桌面殼層，和 CLI 共用同一套核心能力，並遵循同樣的首次啟動設定邏輯。

請先從[下載頁面](https://fileuni.com/zh-Hant/download)獲取對應構建包。

- 伺服器部署請選擇 CLI 包。
- 本機桌面使用請選擇 GUI 包。

## 2. 準備執行目錄

當前專案已經收斂為單目錄執行模型：

- `-R` / `--runtime-dir`：唯一執行目錄，統一存放設定、安裝鎖、資料庫、快取和其他執行檔案
- `--runtime-dir`：僅在 `service install` 場景下使用的執行目錄引數

固定設定檔案位置為：

```text
{runtime-dir}/config.toml
```

示例執行目錄結構：

```text
./runtime
```

如果後續要安裝成系統服務，請把執行目錄改成絕對路徑。

## 3. 準備 `config.toml` 裡引用的依賴服務

FileUni 不允許把環境變數作為設定來源，執行引數都必須來自 `config.toml`。

按當前專案的實現，部署時通常需要先準備好該檔案裡引用的依賴，尤其是：

- 資料庫連線
- KV 服務連線
- VFS 所需的儲存路徑

如果 `{runtime-dir}/install.lock` 缺失，FileUni 會在正常啟動前開啟設定中心。

設定中心負責寫入 `config.toml` 和 `install.lock`，並確保內建管理員賬號已就緒。

正常啟動不會自動建立特權賬號。如果在 `install.lock` 已存在的情況下管理員賬號缺失，啟動會被拒絕。

## 4. 啟動 FileUni

如果 `{runtime-dir}/install.lock` 不存在，CLI 與 GUI 都會在正常啟動前直接進入設定中心。

如果你之後還想重新開啟設定中心，刪除 `{runtime-dir}/install.lock` 後再正常啟動即可：

```bash
rm -f ./runtime/install.lock
./fileuni --runtime-dir ./runtime
```

只校驗設定、不啟動完整服務：

```bash
./fileuni --runtime-dir ./runtime config test
```

正常啟動：

```bash
./fileuni --runtime-dir ./runtime
```

## 5. 開啟 WebUI

啟動成功後，FileUni 會輸出當前可用地址，包括：

- WebUI：`http://<host>:<port>/`
- HTTP API：`http://<host>:<port>`
- OpenAPI JSON：`http://<host>:<port>/api/v1/openapi.json`

當前專案內建使用的本地預設 WebUI 地址是：

```text
http://localhost:19000/
```

如果設定裡啟用了相關協議，還會同時開放 S3、FTP、SFTP 等訪問入口。

## 下一步

- [功能特性](https://fileuni.com/zh-Hant/features/)
- [訪問方式與檔案操作](./file-management)
- [安裝為系統服務](./install-service)
