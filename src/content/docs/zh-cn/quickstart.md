---
title: 快速开始
description: 只需几分钟，搭建您的私人文件服务器
order: 2
---

# 快速开始指南

本指南将帮助您在几分钟内搭建起 FileUni 文件服务器。

## 1. 获取 FileUni

访问 [下载页面](https://fileuni.com/zh-cn/download) 并选择适合您设备的版本。

### 建议
- **Windows**: 优先使用 **桌面版** 以获得最佳的初始设置体验。
- **Linux / macOS / FreeBSD**: 可以使用 **一键安装** 命令：
  ```bash
  curl -fsSL https://docs.fileuni.com/install.sh | sh
  ```
- **Docker**: 容器爱好者请使用：
  ```bash
  docker run -d --name fileuni -p 19000:19000 fileuni/fileuni:alpine
  ```

## 2. 首次配置

首次启动时，FileUni 将进入配置向导（您也可以通过 `--setup` 参数强制进入）：

1.  **选择存储**：选择用于存储文件的目录。
2.  **创建管理员**：设置您的管理员用户名和密码（至少 8 位）。
3.  **运行模式**：根据您的硬件性能选择等级（最低支持 32MB 内存）。

## 3. 访问您的服务器

配置完成后，打开浏览器访问：
```
http://localhost:19000/ui
```
如果是从其他设备访问，请将 `localhost` 替换为服务器的 IP 地址。

## 下一步

- 了解如何[安装为服务](./install-service)以实现后台运行。
- 探索核心[功能特性](./features)。

