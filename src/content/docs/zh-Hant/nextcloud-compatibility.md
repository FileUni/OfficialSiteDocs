---
title: Nextcloud 相容性
description: 說明 FileUni 與 Nextcloud 客戶端生態的相容性清單。
slug: zh-Hant/nextcloud-compatibility
order: 4
---

# Nextcloud 相容性

FileUni 支援與 Nextcloud 客戶端配合使用，覆蓋檔案管理、收藏、分享、媒體瀏覽以及基於 WebDAV 的訪問。

## 當前相容範圍

FileUni 已具備 Nextcloud 客戶端相容所需的基礎功能：

- WebDAV 服務支援，用於檔案同步與遠端訪問
- 檔案管理操作：瀏覽、上傳、下載、重新命名、移動、複製、刪除
- 收藏、最近訪問、回收站
- 媒體預覽和常見檔案預覽能力

實際客戶端表現可能因設定、啟用的模組以及 Nextcloud 客戶端版本而異。

## 相容性清單

| 範圍 | 目標 | 狀態 |
| --- | --- | --- |
| WebDAV 端點訪問 | 相容 Nextcloud 客戶端 WebDAV 連線 | 已支援 |
| 檔案管理 | 瀏覽、上傳、下載、重新命名、移動、複製、刪除 | 已支援 |
| 收藏 | 收藏相關功能 | 已支援 |
| 分享 | 分享相關功能 | 開發中 |
| 媒體 | 媒體瀏覽與預覽 | 已支援 |
| Chat | 聊天功能 | 計劃中 |
| Notes | 筆記功能 | 已支援 |

## 狀態說明

- 已支援：功能已可正常使用。
- 開發中：功能正在積極開發。
- 計劃中：功能已列入後續開發計劃。

## 相關頁面

- [功能特性](https://fileuni.com/zh-Hant/features/)
- [訪問方式與檔案操作](./file-management)
- [快速開始](./quickstart)
