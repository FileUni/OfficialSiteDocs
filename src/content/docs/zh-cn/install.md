---
title: 安装 FileUni
description: 使用一行命令安装 FileUni，或直接下载 GitHub Releases 资产
order: 3
---

# 安装 FileUni

FileUni 当前提供两条配合使用的安装路径：

1. 托管在 `docs.fileuni.com` 的在线安装脚本
2. 官网读取公开 releases JSON 的下载页，并直接跳转到 GitHub 资产

安装脚本不会写死发布链接。脚本会读取下面这个公开元数据地址，而官网后端负责从 GitHub Releases 生成这个 JSON：

```text
https://fileuni.com/api/downloads/releases.json
```

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
set "I=%TEMP%\fileuni-install.cmd" && certutil -urlcache -split -f https://docs.fileuni.com/install.cmd "%I%" >nul && cmd /c "%I%"
```

明确安装预发布版：

```bat
set "I=%TEMP%\fileuni-install.cmd" && certutil -urlcache -split -f https://docs.fileuni.com/install.cmd "%I%" >nul && cmd /c "%I%" pre
```

Windows 安装脚本会读取同一个公开 releases JSON，下载当前 CLI ZIP，并默认解压到 `%USERPROFILE%\AppData\Local\FileUni\bin` 下。

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
- `FILEUNI_RELEASES_JSON_URL`

### `install.cmd`

参数：

- `stable`
- `pre`
- `auto`

环境变量：

- `FILEUNI_CHANNEL`
- `FILEUNI_INSTALL_DIR`
- `FILEUNI_RELEASES_JSON_URL`

## 安装后

检查二进制是否可用：

```bash
fileuni --help
```

如果安装目录不在 `PATH` 中，请手动添加。

首次初始化和运行配置请继续阅读 [快速开始](./quickstart)。
