---
title: Nextcloud 兼容性
description: 说明 FileUni 与 Nextcloud 客户端生态的兼容性清单。
slug: zh-Hant/nextcloud-compatibility
order: 4
---

# Nextcloud 兼容性

FileUni 支持与 Nextcloud 客户端配合使用，覆盖文件管理、收藏、分享、媒体浏览以及基于 WebDAV 的访问。

## 当前兼容范围

FileUni 已具备 Nextcloud 客户端兼容所需的基础功能：

- WebDAV 服务支持，用于文件同步与远程访问
- 文件管理操作：浏览、上传、下载、重命名、移动、复制、删除
- 收藏、最近访问、回收站
- 媒体预览和常见文件预览能力

实际客户端表现可能因配置、启用的模块以及 Nextcloud 客户端版本而异。

## 兼容性清单

| 范围 | 目标 | 状态 |
| --- | --- | --- |
| WebDAV 端点访问 | 兼容 Nextcloud 客户端 WebDAV 连接 | 已支持 |
| 文件管理 | 浏览、上传、下载、重命名、移动、复制、删除 | 已支持 |
| 收藏 | 收藏相关功能 | 已支持 |
| 分享 | 分享相关功能 | 开发中 |
| 媒体 | 媒体浏览与预览 | 已支持 |
| Chat | 聊天功能 | 计划中 |
| Notes | 笔记功能 | 已支持 |

## 状态说明

- 已支持：功能已可正常使用。
- 开发中：功能正在积极开发。
- 计划中：功能已列入后续开发计划。

## 相关页面

- [功能特性](https://fileuni.com/zh-Hant/features/)
- [访问方式与文件操作](./file-management)
- [快速开始](./quickstart)
