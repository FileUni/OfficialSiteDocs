---
title: 快速开始
description: 基于当前 FileUni 项目的启动说明。
order: 2
---

# 快速开始

本页只说明当前仓库里已经存在的运行方式和入口。

## 1. 选择运行入口

FileUni 目前主要有两个入口：

- `fileuni` CLI：用于启动服务、进入设置模式、管理系统服务、导入导出备份。
- `fileuni-gui`：基于 Tauri 的桌面壳层，和 CLI 共用同一套核心能力，并遵循同样的首次启动设置逻辑。

请先从[下载页面](https://fileuni.com/zh-cn/download)获取对应构建包。

- 服务器部署请选择 CLI 包。
- 本机桌面使用请选择 GUI 包。

## 2. 准备运行目录

当前项目采用双目录运行模型：

- `-c` / `--config-date`：配置目录
- `-A` / `--AppDataDir`：应用数据目录

固定配置文件位置为：

```text
{config-dir}/config.toml
```

示例运行目录结构：

```text
./config
./appdata
```

如果后续要安装成系统服务，请把这两个目录改成绝对路径。

## 3. 准备 `config.toml` 里引用的依赖服务

FileUni 不允许把环境变量作为配置来源，运行参数都必须来自 `config.toml`。

按当前项目的实现，部署时通常需要先准备好该文件里引用的依赖，尤其是：

- 数据库连接
- KV 服务连接
- VFS 所需的存储路径

首次启动时如果缺少 `config.toml`，程序可以创建该文件；但后续如果必填项缺失、为空或无效，启动会被拒绝。

## 4. 进入设置模式或直接启动

如果 `{config-dir}/install.lock` 不存在，CLI 与 GUI 都会在正常启动前强制进入设置向导。

显式进入设置模式：

```bash
./fileuni --setup -c ./config -A ./appdata
```

只校验配置、不启动完整服务：

```bash
./fileuni --configtest -c ./config -A ./appdata
```

正常启动：

```bash
./fileuni -c ./config -A ./appdata
```

## 5. 打开 WebUI

启动成功后，FileUni 会输出当前可用地址，包括：

- WebUI：`http://<host>:<port>/ui`
- HTTP API：`http://<host>:<port>`
- OpenAPI JSON：`http://<host>:<port>/api/v1/openapi.json`

当前项目内置使用的本地默认 WebUI 地址是：

```text
http://localhost:19000/ui
```

如果配置里启用了相关协议，还会同时开放 S3、FTP、SFTP 等访问入口。

## 下一步

- [功能特性](./features)
- [访问方式与文件操作](./file-management)
- [安装为系统服务](./install-service)
