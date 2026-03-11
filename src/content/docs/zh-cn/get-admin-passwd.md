---
title: 重置管理员密码
description: 通过重新进入当前 FileUni 部署的设置向导来恢复管理员访问权限。
---

# 重置管理员密码

如果您丢失了内置管理员密码，当前受支持的恢复方式已经不再是单独的 CLI 重置参数。

FileUni 现在把 `{config-date}/install.lock` 视为安装完成标记：

- 存在 `install.lock` 时，CLI 与 GUI 正常启动。
- 缺少 `install.lock` 时，CLI 与 GUI 都会阻断常规启动并强制进入设置向导。
- 设置向导完成后会重新写入 `install.lock`，系统才会继续后续启动流程。

因此，管理员密码恢复现在统一通过“重新进入设置向导”完成。

## 恢复步骤

1. 停止正在运行的 FileUni 服务或桌面程序。
2. 找到当前部署的配置目录。
3. 删除 `{config-date}/install.lock`。
4. 重新启动 FileUni 的 CLI 或 GUI。
5. FileUni 会自动进入设置向导。
6. 在设置向导中设置新的管理员密码并完成初始化。

## 示例

如果您的配置目录是 `/etc/fileuni`，请删除下面这个文件：

```bash
rm /etc/fileuni/install.lock
```

然后重新启动 FileUni：

```bash
fileuni -c /etc/fileuni -A /var/lib/fileuni
```

或者重新打开桌面程序，并选择同一组运行时目录。

## 重要说明

- 删除 `install.lock` 后再重启，等价于该部署的“系统重置入口”。
- 这一步本身不会直接删除数据库或应用数据，但会强制您重新经过初始化流程。
- 恢复时必须使用和原部署相同的配置目录与应用数据目录。
- 如果指向了另一组运行时目录，您可能会误初始化另一套部署。

## 故障排除

### 没有进入设置向导

请检查：

- 删除的是否真的是 `{config-date}/install.lock`
- 重启的是否是同一套部署
- `-c/--config-date` 与 `-A/--AppDataDir` 指向的运行时目录是否正确

### 我不知道配置目录在哪里

可以从这些位置反查：

- 系统服务安装命令或服务管理器
- 桌面程序里之前选择过的运行时目录
- 启动脚本或 Shell 历史记录

## 相关主题

- [快速开始指南](./quickstart)
- [安装为系统服务](./install-service)
