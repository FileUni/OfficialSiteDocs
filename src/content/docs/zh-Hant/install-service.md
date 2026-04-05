---
title: 安裝為系統服務
description: 將 FileUni 安裝並管理為作業系統服務。
slug: zh-Hant/install-service
---

# 將 FileUni 安裝為服務

FileUni 內建了服務管理能力，支援在 Windows、macOS 和 Linux 上以系統服務方式執行。CLI 是這些操作的權威入口，GUI 只是複用同一套服務控制邏輯。

## 服務管理命令

使用 `service` 子命令來管理 FileUni 服務：

```bash
fileuni service <操作> [選項]
```

### 支援的操作

| 操作 | 說明 |
|--------|-------------|
| `install` | 將 FileUni 安裝為系統服務 |
| `uninstall` | 從系統中解除安裝服務 |
| `start` | 啟動服務 |
| `stop` | 停止服務 |
| `status` | 檢視服務狀態 |
| `restart` | 以 stop + start 語義重啟服務 |

## 快速安裝

安裝服務時，必須透過 `--runtime-dir` 傳入唯一的執行目錄，這個路徑會被持久化寫入服務定義。

```bash
# Linux/macOS 示例
# 使用 --runtime-dir 指定服務安裝的執行目錄
sudo ./fileuni service install --runtime-dir /srv/fileuni

# Windows 示例 (需以管理員身份執行)
.\fileuni.exe service install --runtime-dir C:\FileUni\runtime
```

> 重要提示：安裝服務時請務必為 `--runtime-dir` 使用絕對路徑。這能確保系統重啟後服務依然能正確定位到相關目錄。

## 高階服務選項

FileUni 的 `service install` 命令支援以下引數進行精細化控制：

- `--service-label <名稱>`：自定義系統服務名稱（預設：`io.fileuni.server`）。
- `--service-user <使用者>`：指定執行服務的系統賬號（僅限系統級服務）。
- `--service-level <system|user>`：選擇安裝為全域性系統服務或僅當前使用者服務。
- `--service-autostart <true|false>`：是否在開機時自動啟動。
- `--runtime-dir <目錄>`：僅供 `service install` 使用的執行目錄引數。

### 示例：自定義服務標籤

```bash
sudo ./fileuni service install --runtime-dir /srv/fileuni --service-label my.fileuni.node
```

## 常見問題

- 許可權問題：安裝系統級服務通常需要 Root (Linux/macOS) 或 管理員 (Windows) 許可權。
- 路徑要求：`service install` 必須配合有效的 `--runtime-dir` 使用。
- 檢視日誌：如果服務無法啟動，請檢查系統日誌，例如 Linux 上的 `journalctl` 或 Windows 事件檢視器。
