---
title: Install as Service
description: Guide on how to install FileUni as a system service for background execution.
---

# Install FileUni as a Service

FileUni provides built-in commands to manage its lifecycle as a system service on Windows, macOS, and Linux.

## Service Commands

You can use the `service` subcommand to manage the FileUni service:

```bash
fileuni service <ACTION> [OPTIONS]
```

### Supported Actions

| Action | Description |
|--------|-------------|
| `install` | Install FileUni as a system service |
| `uninstall` | Remove the service from the system |
| `start` | Start the service |
| `stop` | Stop the service |
| `status` | Check service status |
| `reload` | Reload service configuration |

## Quick Installation

To install FileUni as a service with default settings, ensure you specify the configuration and data directories:

```bash
# Example for Linux/macOS
sudo fileuni -c /etc/fileuni -A /var/lib/fileuni service install

# Example for Windows (Run as Administrator)
fileuni.exe -c C:\FileUni\config -A C:\FileUni\data service install
```

## Advanced Options

When installing, you can customize how the service runs:

| Option | Description | Default |
|--------|-------------|---------|
| `--service-label` | Custom name for the service | `io.fileuni.server` |
| `--service-user` | User account to run the service | Current user |
| `--service-level` | Service level: `system` or `user` | `system` |
| `--service-autostart` | Start service on boot: `true` or `false` | `true` |
| `--service-workdir` | Working directory for the service | Binary location |

### Example: Installing as a User Service

If you don't have root/admin access, you can install it for your user account only:

```bash
fileuni -c ~/fileuni/config -A ~/fileuni/data service install --service-level user
```

## Troubleshooting

- **Permissions**: Installing system-level services typically requires **Root** (Linux/macOS) or **Administrator** (Windows) privileges.
- **Paths**: Always use **absolute paths** for `-c` and `-A` when installing a service to ensure the system can locate directories on boot.
- **Logs**: If the service fails to start, check system logs (`journalctl -u fileuni` on Linux, Event Viewer on Windows).
