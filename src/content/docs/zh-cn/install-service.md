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

要使用默认设置安装服务，请务必指定配置和数据目录：

```bash
# Linux/macOS 示例
sudo ./fileuni -c /etc/fileuni -A /var/lib/fileuni service install

# Windows 示例 (需以管理员身份运行)
fileuni.exe -c C:\FileUni\config -A C:\FileUni\data service install
```

## 高级选项

在执行 `install` 操作时，您可以自定义服务运行方式：

| 选项 | 说明 | 默认值 |
|--------|-------------|---------|
| `--service-label` | 自定义服务名称 | `io.fileuni.server` |
| `--service-user` | 运行服务的用户账号 | 当前用户 |
| `--service-level` | 服务等级：`system` (系统) 或 `user` (用户) | `system` |
| `--service-autostart` | 是否开机自启：`true` 或 `false` | `true` |
| `--service-workdir` | 服务的工作目录 | 程序所在位置 |

### 示例：安装为用户级服务

如果您没有 root/管理员权限，可以仅为当前用户安装服务：

```bash
fileuni -c ~/fileuni/config -A ~/fileuni/data service install --service-level user
```

## 常见问题

- **权限问题**：安装系统级服务通常需要 **Root** (Linux/macOS) 或 **管理员** (Windows) 权限。
- **路径要求**：安装服务时，建议为 `-c` 和 `-A` 使用 **绝对路径**，确保系统重启后仍能正确定位目录。
- **查看日志**：如果服务无法启动，请检查系统日志（Linux 使用 `journalctl -u fileuni`，Windows 查看事件查看器）。
