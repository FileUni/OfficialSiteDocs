---
title: 重置管理員密碼
description: 透過重新開啟當前 FileUni 部署的設定中心來恢復管理員訪問許可權。
slug: zh-Hant/get-admin-passwd
---

# 重置管理員密碼

如果您丟失了內建管理員密碼，當前受支援的恢復方式已經不再是單獨的 CLI 重置引數。

FileUni 現在把 `{runtime-dir}/install.lock` 視為安裝完成標記：

- 存在 `install.lock` 時，CLI 與 GUI 正常啟動。
- 缺少 `install.lock` 時，CLI 與 GUI 都會阻斷常規啟動並開啟設定中心。
- 設定中心完成後會重新寫入 `install.lock`，系統才會繼續後續啟動流程。

因此，管理員密碼恢復現在統一透過“重新開啟設定中心”完成。

## 恢復步驟

1. 停止正在執行的 FileUni 服務或桌面程式。
2. 找到當前部署的執行目錄。
3. 刪除 `{runtime-dir}/install.lock`。
4. 重新啟動 FileUni 的 CLI 或 GUI。
5. FileUni 會自動開啟設定中心。
6. 在設定中心中設定新的管理員密碼並完成首次設定。

## 示例

如果您的執行目錄是 `/srv/fileuni`，請刪除下面這個檔案：

```bash
rm /srv/fileuni/install.lock
```

然後重新啟動 FileUni：

```bash
fileuni --runtime-dir /srv/fileuni
```

或者重新開啟桌面程式，並選擇同一個執行目錄。

## 重要說明

- 刪除 `install.lock` 後再重啟，等價於該部署的“系統重置入口”。
- 這一步本身不會直接刪除資料庫或應用資料，但會強制您重新經過初始化流程。
- 恢復時必須使用和原部署相同的執行目錄。
- 如果指向了另一組執行目錄，您可能會誤初始化另一套部署。

## 故障排除

### 沒有進入設定中心

請檢查：

- 刪除的是否真的是 `{runtime-dir}/install.lock`
- 重啟的是否是同一套部署
- `-R/--runtime-dir` 指向的執行目錄是否正確

### 我不知道執行目錄在哪裡

可以從這些位置反查：

- 系統服務安裝命令或服務管理器
- 桌面程式裡之前選擇過的執行時目錄
- 啟動指令碼或 Shell 歷史記錄

## 相關主題

- [快速開始指南](./quickstart)
- [安裝為系統服務](./install-service)
