---
title: 安装 FileUni
description: 使用一行命令安装 FileUni，或直接下载 GitHub Releases 资产
order: 3
---

# 安装 FileUni

FileUni 当前提供两条配合使用的安装路径：

1. 托管在 `docs.fileuni.com` 的在线安装脚本
2. 官网实时读取 GitHub Releases 的下载页，并直接跳转到 GitHub 资产

安装脚本不会写死发布链接。脚本会调用 FileUni 官网的解析 API，而官网 API 负责查询并规范化 GitHub Releases 数据。

## 在线安装

### Linux / macOS / FreeBSD

```bash
curl -fsSL https://docs.fileuni.com/install.sh | sh
```

默认行为：

- 优先选择最新正式版
- 如果当前没有正式版，则自动回退到最新预发布版
- 自动识别本机操作系统、CPU 架构以及 Linux 的 libc

明确安装预发布版：

```bash
curl -fsSL https://docs.fileuni.com/install.sh | sh -s -- --channel pre
```

安装到自定义目录：

```bash
curl -fsSL https://docs.fileuni.com/install.sh | sh -s -- --to "$HOME/.local/bin"
```

### Windows CMD

```bat
curl.exe -fsSL -o "%TEMP%\fileuni-install.cmd" https://docs.fileuni.com/install.cmd && cmd /c "%TEMP%\fileuni-install.cmd"
```

明确安装预发布版：

```bat
curl.exe -fsSL -o "%TEMP%\fileuni-install.cmd" https://docs.fileuni.com/install.cmd && cmd /c "%TEMP%\fileuni-install.cmd pre"
```

Windows 安装脚本会通过官网解析 API 下载当前 CLI 包，并默认解压到 `%USERPROFILE%\AppData\Local\FileUni\bin` 下。

## 下载页面

如果您希望手动选择安装包，请使用官网下载页：

- English: [fileuni.com/download](https://fileuni.com/download)
- 简体中文: [fileuni.com/zh-cn/download](https://fileuni.com/zh-cn/download)

该页面会：

- 区分正式版和预发布版
- 当某个渠道没有对应版本时保持留空
- 所有下载按钮都直接跳转到 GitHub Releases 资产
- 展示与 docs 脚本一致的在线安装命令

## 安装脚本参数

### `install.sh`

```text
sh install.sh [--channel auto|stable|pre] [--to DIR]
```

环境变量：

- `FILEUNI_CHANNEL`
- `FILEUNI_INSTALL_DIR`
- `FILEUNI_API_BASE`

### `install.cmd`

参数：

- `stable`
- `pre`
- `auto`

环境变量：

- `FILEUNI_CHANNEL`
- `FILEUNI_INSTALL_DIR`
- `FILEUNI_API_BASE`

## 安装后

检查二进制是否可用：

```bash
fileuni --help
```

如果安装目录不在 `PATH` 中，请手动添加。

首次初始化和运行配置请继续阅读 [快速开始](./quickstart)。
