---
title: 重置管理员密码
description: 如何通过命令行或设置模式重置管理员密码
---

# 重置管理员密码

如果您忘记了管理员密码，可以通过命令行界面进行重置。普通用户请使用登录页面的「忘记密码」功能。

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
- 新密码至少需要 8 个字符

## 方式二：设置模式

如果您需要重新配置整个系统，可以强制 FileUni 进入设置模式：

```bash
# 进入设置模式
fileuni --setup

# 指定目录
fileuni --setup -c /path/to/config-dir -A /path/to/app-data-dir
```

在设置模式中，您可以：
- 重新配置存储位置
- 创建新的管理员账户
- 调整系统设置

> ⚠️ **警告**：设置模式通常用于初次安装。在现有系统上运行可能会影响您的配置。

## 密码要求

- 至少 8 个字符
- 建议：使用字母、数字和特殊字符的组合
- 避免使用 "admin888" 或 "123456" 等常见密码

## 故障排除

### "Failed to reset admin password"（重置管理员密码失败）

此错误通常发生在：
1. 数据库连接不可用
2. 配置目录或应用数据目录不正确
3. 系统中没有管理员账户

**解决方案**：
- 验证配置目录是否正确且包含 `config.toml`，并确认应用数据目录可访问
- 确保数据库服务正在运行
- 查看日志获取详细错误信息

### "Runtime directories are invalid"（运行时目录无效）

请确保使用 `-c` 与 `-A` 参数指定正确目录：

```bash
fileuni -c /path/to/your/config-dir -A /path/to/your/app-data-dir -a NewPassword123
```

## 安全建议

1. **立即修改默认密码**：如果您正在使用默认密码 `admin888`，请尽快修改
2. **使用强密码**：组合使用大写字母、小写字母、数字和特殊字符
3. **定期更新密码**：建议定期更换密码
4. **清理命令历史**：密码可能出现在 Shell 历史记录中。重置后可考虑清理：

```bash
# 重置密码
fileuni -a MySecureP@ss

# 清理 bash 历史（可选）
history -c
```

## 相关主题

- [快速开始指南](./quickstart) - 初始设置说明
- [用户管理](./user-management) - 管理用户和权限
