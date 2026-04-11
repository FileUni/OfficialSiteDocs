---
title: 系統最低要求
description: FileUni 各類構建物的建議系統版本與可能最低版本說明。
slug: zh-Hant/system-requirements
order: 1
---

# 系統最低要求

本頁面用於說明 FileUni 的建議作業系統版本，以及可能仍可執行的最低版本。FileUni 提供桌面 GUI、CLI 伺服器、容器與移動端等不同構建物，每種構建物的底線略有差異。

## 建議版本（最佳體驗）

以下版本是我們主要保證完整功能與穩定更新的範圍：

- Windows：Windows 10 (1806) 或更新版本
- macOS：macOS 11.0 或更新版本
- Linux：仍在官方安全支援期內的主流發行版
- FreeBSD：FreeBSD 14 或更新版本

## 可能的最低版本（盡力而為）

舊版系統有機會執行，但屬於盡力適配，不保證完整功能。最低可執行範圍與 Rust 工具鏈及構建物型別有關：

- Windows：Windows 10（更早版本可能可用，但不保證）
- macOS：
 - Intel：macOS 10.12 或更新版本
 - Apple Silicon：macOS 11.0 或更新版本
- Linux（標準構建）：最低基線由 Rust Tier‑1 目標決定：
 - `x86_64-unknown-linux-gnu`：kernel 3.2+ / glibc 2.17+
 - `aarch64-unknown-linux-gnu`：kernel 4.1+ / glibc 2.17+
- Linux（靜態構建）：如果低於上述基線，請嘗試使用 musl 版本
- FreeBSD：FreeBSD 12 或更新版本（更早版本不建議）

此文件 可能滯後於實際開發進度會有偏差，FileUni只能盡力適配舊版作業系統，但是首要目標是在主流的現代作業系統系統提供完整的功能支援。

## 不同構建物的最低平臺說明

### 桌面 GUI（Tauri）

| 構建物 | 建議版本 | 可能最低版本（盡力而為） |
| --- | --- | --- |
| Windows 桌面版 | Windows 10 (1806)+ | Windows 10（更早版本可能可用） |
| macOS 桌面版（Intel） | macOS 11.0+ | macOS 10.12+ |
| macOS 桌面版（Apple Silicon） | macOS 11.0+ | macOS 11.0+ |
| Linux 桌面版（zip） | 當前 LTS 發行版 | 舊版 LTS + 靜態構建（如有） |

### CLI / 伺服器

| 構建物 | 建議版本 | 可能最低版本（盡力而為） |
| --- | --- | --- |
| Windows CLI（x64/x86） | Windows 10 (1806)+ | Windows 10（更早版本可能可用） |
| macOS CLI（Intel） | macOS 11.0+ | macOS 10.12+ |
| macOS CLI（Apple Silicon） | macOS 11.0+ | macOS 11.0+ |
| Linux CLI（標準構建） | 當前 LTS 發行版 | 以上 kernel/glibc 基線 |
| Linux CLI（靜態構建） | 任意現代 Linux | 低於基線時優先嚐試 musl |
| FreeBSD CLI | FreeBSD 14+ | FreeBSD 12+ |
| Android CLI（Termux/ADB） | 近期 Android 裝置 | 隨裝置/廠商而定，視為盡力而為 |

### 容器（Docker）

| 構建物 | 建議版本 | 可能最低版本（盡力而為） |
| --- | --- | --- |
| Docker 映象（Alpine/Debian） | 使用最新 Docker 引擎的 Linux 主機 | 以 Docker 官方支援的系統版本為準 |

### 移動端 App

| 構建物 | 建議版本 | 可能最低版本（盡力而為） |
| --- | --- | --- |
| Android App | 近期 Android 版本 | 依裝置與系統限制而定，老版本可能不穩定 |
| iOS App | 近期 iOS 版本 | 依裝置與簽名方式而定 |

### Proxmox VE（LXC/CT 模板）

| 構建物 | 建議版本 | 可能最低版本（盡力而為） |
| --- | --- | --- |
| Proxmox VE CT | PVE 8.x | PVE 7.x |

## 記憶體與負載說明

FileUni 核心程序在約 15MB 可用記憶體下即可完成基礎啟動。

- 64MB 級裝置在精簡系統環境中，通常可以獲得較為流暢的基礎體驗。
- 32MB 級裝置不屬於通用保證場景，是否可用取決於作業系統佔用、啟用功能與實際負載。
- 在 Alpine、OpenWrt 或嚴格控制系統開銷的容器環境中，32MB 仍有機會承載精簡後的基礎設定。
- 低記憶體部署必須關閉部分重型功能並降低併發，不適合作為完整功能、重型預覽鏈路或高吞吐場景的基準。

## 補充說明

- 不確定時，請優先選擇“建議版本”。
- 老舊 Linux 建議選擇 靜態構建。
- 如果可以啟動但功能不完整，建議升級作業系統以獲得最佳體驗。
