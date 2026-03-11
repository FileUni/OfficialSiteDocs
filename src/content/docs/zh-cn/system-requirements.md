---
title: 系统最低要求
description: FileUni 各类构建物的建议系统版本与可能最低版本说明。
order: 1
---

# 系统最低要求

本页面用于说明 FileUni 的建议操作系统版本，以及可能仍可运行的最低版本。FileUni 提供桌面 GUI、CLI 服务器、容器与移动端等不同构建物，每种构建物的底线略有差异。

## 建议版本（最佳体验）

以下版本是我们主要保证完整功能与稳定更新的范围：

- **Windows**：Windows 10 (1806) 或更新版本
- **macOS**：macOS 11.0 或更新版本
- **Linux**：仍在官方安全支持期内的主流发行版
- **FreeBSD**：FreeBSD 14 或更新版本

## 可能的最低版本（尽力而为）

旧版系统有机会运行，但属于**尽力适配**，不保证完整功能。最低可运行范围与 Rust 工具链及构建物类型有关：

- **Windows**：Windows 10（更早版本可能可用，但不保证）
- **macOS**：
  - Intel：macOS 10.12 或更新版本
  - Apple Silicon：macOS 11.0 或更新版本
- **Linux（标准构建）**：较旧的 LTS 发行版可能可运行，但稳定性取决于系统库
- **Linux（静态构建）**：更适合老旧或非标准 Linux
- **FreeBSD**：FreeBSD 12 或更新版本（更早版本不建议）

此文档 可能滞后于实际开发进度会有偏差，FileUni只能尽力适配旧版操作系统，但是首要目标是在主流的现代操作系统系统提供完整的功能支持。

## 不同构建物的最低平台说明

### 桌面 GUI（Tauri）

| 构建物 | 建议版本 | 可能最低版本（尽力而为） |
| --- | --- | --- |
| Windows 桌面版 | Windows 10 (1806)+ | Windows 10（更早版本可能可用） |
| macOS 桌面版（Intel） | macOS 11.0+ | macOS 10.12+ |
| macOS 桌面版（Apple Silicon） | macOS 11.0+ | macOS 11.0+ |
| Linux 桌面版（AppImage） | 当前 LTS 发行版 | 旧版 LTS + 静态构建（如有） |

### CLI / 服务器

| 构建物 | 建议版本 | 可能最低版本（尽力而为） |
| --- | --- | --- |
| Windows CLI（x64/x86） | Windows 10 (1806)+ | Windows 10（更早版本可能可用） |
| macOS CLI（Intel） | macOS 11.0+ | macOS 10.12+ |
| macOS CLI（Apple Silicon） | macOS 11.0+ | macOS 11.0+ |
| Linux CLI（标准构建） | 当前 LTS 发行版 | 旧版 LTS（取决于系统库） |
| Linux CLI（静态构建） | 任意现代 Linux | 老旧或非标准 Linux（首选方案） |
| FreeBSD CLI | FreeBSD 14+ | FreeBSD 12+ |
| Android CLI（Termux/ADB） | 近期 Android 设备 | 随设备/厂商而定，视为尽力而为 |

### 容器（Docker）

| 构建物 | 建议版本 | 可能最低版本（尽力而为） |
| --- | --- | --- |
| Docker 镜像（Alpine/Debian） | 使用最新 Docker 引擎的 Linux 主机 | 以 Docker 官方支持的系统版本为准 |

### 移动端 App

| 构建物 | 建议版本 | 可能最低版本（尽力而为） |
| --- | --- | --- |
| Android App | 近期 Android 版本 | 依设备与系统限制而定，老版本可能不稳定 |
| iOS App | 近期 iOS 版本 | 依设备与签名方式而定 |

### Proxmox VE（LXC/CT 模板）

| 构建物 | 建议版本 | 可能最低版本（尽力而为） |
| --- | --- | --- |
| Proxmox VE CT | PVE 8.x | PVE 7.x |

## 补充说明

- 不确定时，请优先选择“建议版本”。
- 老旧 Linux 建议选择 **静态构建**。
- 如果可以启动但功能不完整，建议升级操作系统以获得最佳体验。
