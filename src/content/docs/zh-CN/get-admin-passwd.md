---
title: 重置管理员密码
description: 通过重新打开当前 FileUni 部署的设置中心来恢复管理员访问权限。
slug: zh-CN/get-admin-passwd
---

# 重置管理员密码

如果您丢失了内置管理员密码，当前受支持的恢复方式已经不再是单独的 CLI 重置参数。

FileUni 现在把 `{runtime-dir}/install.lock` 视为安装完成标记：

- 存在 `install.lock` 时，CLI 与 GUI 正常启动。
- 缺少 `install.lock` 时，CLI 与 GUI 都会阻断常规启动并打开设置中心。
- 设置中心完成后会重新写入 `install.lock`，系统才会继续后续启动流程。

因此，管理员密码恢复现在统一通过“重新打开设置中心”完成。

## 恢复步骤

1. 停止正在运行的 FileUni 服务或桌面程序。
2. 找到当前部署的运行目录。
3. 删除 `{runtime-dir}/install.lock`。
4. 重新启动 FileUni 的 CLI 或 GUI。
5. FileUni 会自动打开设置中心。
6. 在设置中心中设置新的管理员密码并完成首次设置。

## 示例

如果您的运行目录是 `/srv/fileuni`，请删除下面这个文件：

```bash
rm /srv/fileuni/install.lock
```

然后重新启动 FileUni：

```bash
fileuni --runtime-dir /srv/fileuni
```

或者重新打开桌面程序，并选择同一个运行目录。

## 重要说明

- 删除 `install.lock` 后再重启，等价于该部署的“系统重置入口”。
- 这一步本身不会直接删除数据库或应用数据，但会强制您重新经过初始化流程。
- 恢复时必须使用和原部署相同的运行目录。
- 如果指向了另一组运行目录，您可能会误初始化另一套部署。

## 故障排除

### 没有进入设置中心

请检查：

- 删除的是否真的是 `{runtime-dir}/install.lock`
- 重启的是否是同一套部署
- `-R/--runtime-dir` 指向的运行目录是否正确

### 我不知道运行目录在哪里

可以从这些位置反查：

- 系统服务安装命令或服务管理器
- 桌面程序里之前选择过的运行时目录
- 启动脚本或 Shell 历史记录

## 相关主题

- [快速开始指南](./quickstart)
- [安装为系统服务](./install-service)
