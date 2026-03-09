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

To install FileUni as a service, you must explicitly specify the configuration and data directories. These paths will be persisted within the service configuration.

```bash
# Example for Linux/macOS
# Use -c for config directory and -A for app data directory
sudo ./fileuni -c /etc/fileuni -A /var/lib/fileuni service install

# Example for Windows (Run as Administrator)
.\fileuni.exe -c C:\FileUni\config -A C:\FileUni\data service install
```

> **Important**: Always use **absolute paths** for `-c` and `-A` when installing as a service. This ensures the service can correctly locate its data upon system reboot.

## Advanced Service Options

FileUni's `service install` supports additional flags for fine-grained control:

- `--service-label <LABEL>`: Change the internal service name (Default: `io.fileuni.server`).
- `--service-user <USER>`: Specify which OS user should run the process (System-level only).
- `--service-level <system|user>`: Choose between a global system service or a per-user service.
- `--service-autostart <true|false>`: Enable or disable automatic start on boot.
- `--service-workdir <DIR>`: Set a custom working directory.

### Example: Custom Service Label

```bash
sudo ./fileuni -c /etc/fileuni -A /data service install --service-label custom.fileuni.node
```

## Troubleshooting

- **Permissions**: Installing system-level services typically requires **Root** (Linux/macOS) or **Administrator** (Windows) privileges.
- **Paths**: Always use **absolute paths** for `-c` and `-A` when installing a service to ensure the system can locate directories on boot.
- **Logs**: If the service fails to start, check system logs (`journalctl -u fileuni` on Linux, Event Viewer on Windows).
