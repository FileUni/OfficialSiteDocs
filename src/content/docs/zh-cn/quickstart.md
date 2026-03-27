---
title: 快速开始
description: 基于当前 FileUni 项目的启动说明。
order: 2
---

# 快速开始

本页只说明当前仓库里已经存在的运行方式和入口。

## 1. 选择运行入口

FileUni 目前主要有两个入口：

- `fileuni` CLI：用于启动服务、在需要时进入设置向导、管理系统服务，以及导入导出备份。
- `fileuni-gui`：基于 Tauri 的桌面壳层，和 CLI 共用同一套核心能力，并遵循同样的首次启动设置逻辑。

请先从[下载页面](https://fileuni.com/zh-cn/download)获取对应构建包。

- 服务器部署请选择 CLI 包。
- 本机桌面使用请选择 GUI 包。

## 2. 准备运行目录

当前项目已经收敛为单目录运行模型：

- `-R` / `--runtime-dir`：唯一运行目录，统一存放配置、安装锁、数据库、缓存和其他运行文件
- `--service-workdir`：仅在 `service install` 场景下使用的同一运行目录参数

固定配置文件位置为：

```text
{runtime-dir}/config.toml
```

示例运行目录结构：

```text
./runtime
```

如果后续要安装成系统服务，请把运行目录改成绝对路径。

## 3. 准备 `config.toml` 里引用的依赖服务

FileUni 不允许把环境变量作为配置来源，运行参数都必须来自 `config.toml`。

按当前项目的实现，部署时通常需要先准备好该文件里引用的依赖，尤其是：

- 数据库连接
- KV 服务连接
- VFS 所需的存储路径

如果缺少 `config.toml` 或 `{runtime-dir}/install.lock`，FileUni 会进入设置向导。

设置向导负责写入 `config.toml` 和 `install.lock`，并确保内置管理员账号已就绪。

正常启动不会自动创建特权账号。如果在 `install.lock` 已存在的情况下管理员账号缺失，启动会被拒绝。

## 4. 启动 FileUni

如果 `{runtime-dir}/install.lock` 不存在，CLI 与 GUI 都会在正常启动前直接进入设置向导。

如果你之后还想重新进入设置向导，删除 `{runtime-dir}/install.lock` 后再正常启动即可：

```bash
rm -f ./runtime/install.lock
./fileuni --runtime-dir ./runtime
```

只校验配置、不启动完整服务：

```bash
./fileuni --configtest --runtime-dir ./runtime
```

正常启动：

```bash
./fileuni --runtime-dir ./runtime
```

## 5. 打开 WebUI

启动成功后，FileUni 会输出当前可用地址，包括：

- WebUI：`http://<host>:<port>/`
- HTTP API：`http://<host>:<port>`
- OpenAPI JSON：`http://<host>:<port>/api/v1/openapi.json`

当前项目内置使用的本地默认 WebUI 地址是：

```text
http://localhost:19000/
```

如果配置里启用了相关协议，还会同时开放 S3、FTP、SFTP 等访问入口。

## 下一步

- [功能特性](./features)
- [访问方式与文件操作](./file-management)
- [安装为系统服务](./install-service)
