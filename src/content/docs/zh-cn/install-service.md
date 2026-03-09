---
title: 安装为系统服务
description: 如何将 FileUni 安装为系统服务以实现后台持久运行。
---

# 将 FileUni 安装为服务

FileUni 内置了服务管理命令，支持在 Windows、macOS 和 Linux 上将其安装为系统后台服务。

## 服务管理命令

使用 `service` 子命令来管理 FileUni 服务：

```bash
fileuni service <操作> [选项]
```

### 支持的操作

| 操作 | 说明 |
|--------|-------------|
| `install` | 将 FileUni 安装为系统服务 |
| `uninstall` | 从系统中卸载服务 |
| `start` | 启动服务 |
| `stop` | 停止服务 |
| `status` | 查看服务状态 |
| `reload` | 重新加载服务配置 |

## 快速安装

安装服务时，您必须显式指定配置目录和数据目录。这些路径将被持久化记录在服务配置中。

```bash
# Linux/macOS 示例
# 使用 -c 指定配置目录，-A 指定应用数据目录
sudo ./fileuni -c /etc/fileuni -A /var/lib/fileuni service install

# Windows 示例 (需以管理员身份运行)
.\fileuni.exe -c C:\FileUni\config -A C:\FileUni\data service install
```

> **重要提示**：安装服务时请务必为 `-c` 和 `-A` 使用 **绝对路径**。这能确保系统重启后服务依然能正确定位到相关目录。

## 高级服务选项

FileUni 的 `service install` 命令支持以下参数进行精细化控制：

- `--service-label <名称>`：自定义系统服务名称（默认：`io.fileuni.server`）。
- `--service-user <用户>`：指定运行服务的系统账号（仅限系统级服务）。
- `--service-level <system|user>`：选择安装为全局系统服务或仅当前用户服务。
- `--service-autostart <true|false>`：是否在开机时自动启动。
- `--service-workdir <目录>`：设置服务运行时的起始工作目录。

### 示例：自定义服务标签

```bash
sudo ./fileuni -c /etc/fileuni -A /data service install --service-label my.fileuni.node
```

## 常见问题

- **权限问题**：安装系统级服务通常需要 **Root** (Linux/macOS) 或 **管理员** (Windows) 权限。
- **路径要求**：安装服务时，建议为 `-c` 和 `-A` 使用 **绝对路径**，确保系统重启后仍能正确定位目录。
- **查看日志**：如果服务无法启动，请检查系统日志（Linux 使用 `journalctl -u fileuni`，Windows 查看事件查看器）。
