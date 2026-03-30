---
title: FileUni 文档中心
description: 以当前 FileUni 项目为准的实用文档。
order: 0
---

# FileUni 文档中心

这里的内容以当前仓库里的实际实现为准，不再保留脱离项目现状的产品化描述。

当前的 FileUni 主要包含这些已落地能力：

- CLI 与 Tauri GUI 共用的 Rust 核心
- 通过 `/` 提供的 Web 界面
- 通过 `/api/v1/openapi.json` 暴露的 OpenAPI 描述
- 按配置启用的 WebDAV、S3、FTP、SFTP 访问
- 单一运行目录模型：统一保存配置和运行数据

## 快捷入口

- [系统最低要求](./system-requirements)
- [快速开始](./quickstart)
- [下载与安装](https://fileuni.com/zh-cn/download)
- [功能特性](https://fileuni.com/zh-cn/features/)
- [Nextcloud 兼容性](./nextcloud-compatibility)
- [访问方式与文件操作](./file-management)
- [安装为系统服务](./install-service)
- [重置管理员密码](./get-admin-passwd)

## 当前文档范围

目前文档只保留能被源码或现有项目结构直接证明的内容：

- 本地部署与首次启动
- 运行目录和系统服务安装
- WebUI、API 与标准协议访问
- Nextcloud 客户端兼容定位与当前范围
- 管理员维护操作

与当前项目状态不一致的产品介绍、用户管理等页面暂时移除。
