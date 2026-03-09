---
title: 重置管理员密码
description: 为当前 FileUni 部署重置内置管理员密码。
---

# 重置管理员密码

如果管理员账号无法登录，当前项目里明确支持的恢复方式是使用 CLI 重置密码。

## 方式一：命令行重置

使用 `-a` 或 `--admin` 参数来重置管理员密码：

```bash
# 使用短参数
fileuni -a <新密码>

# 使用长参数
fileuni --admin <新密码>

# 指定配置目录与应用数据目录
fileuni -c /path/to/config-dir -A /path/to/app-data-dir -a <新密码>
```

### 示例

```bash
# 将密码重置为 "MyNewP@ss123"
fileuni -a MyNewP@ss123

# 使用指定目录
fileuni -c /etc/fileuni -A /var/lib/fileuni -a MyNewP@ss123
```

### 要求

- 必须有运行 FileUni 服务器的命令行访问权限
- 如需显式指定目录，请使用 `-c/--config-date` 与 `-A/--AppDataDir`
- 目标部署必须能够正确加载当前配置和数据库连接

## 方式二：设置模式

如果您需要重新配置整个系统，可以强制 FileUni 进入设置模式：

```bash
# 进入设置模式
fileuni --setup

# 指定目录
fileuni --setup -c /path/to/config-dir -A /path/to/app-data-dir
```

在设置模式中，您可以：
- 重新进入当前运行目录对应的初始化流程
- 回到安装阶段的关键配置步骤

> **警告**：设置模式更适合安装和恢复场景，在已有部署上使用前请先确认影响范围。

## 故障排除

### "Failed to reset admin password"（重置管理员密码失败）

此错误通常发生在：
1. 数据库连接不可用
2. 配置目录或应用数据目录不正确
3. 当前部署配置无法被正常加载

**解决方案**：
- 验证配置目录是否正确且包含 `config.toml`
- 验证应用数据目录是否指向同一套部署数据
- 确保数据库服务正在运行
- 查看日志获取详细错误信息

### "Runtime directories are invalid"（运行时目录无效）

请确保使用 `-c` 与 `-A` 参数指定正确目录：

```bash
fileuni -c /path/to/your/config-dir -A /path/to/your/app-data-dir -a NewPassword123
```

## 安全建议

如果当前部署中还没有管理员账号，启动流程会创建默认管理员 `admin / admin888`。真实部署时请尽快修改该默认密码。

传给 `-a` 的密码在很多系统里会出现在 Shell 历史中。恢复操作完成后，建议按需清理历史记录，或在临时 Shell 会话中执行：

```bash
# 重置密码
fileuni -a MySecureP@ss

# 清理 bash 历史（可选）
history -c
```

## 相关主题

- [快速开始指南](./quickstart) - 初始设置说明
- [安装为系统服务](./install-service) - 让部署持续后台运行
