---
title: Install as Service
description: Install and manage FileUni as an operating system service.
---

# Install FileUni as a Service

FileUni includes built-in service management for Windows, macOS, and Linux. The CLI is the authoritative entry point for these operations, and the GUI wraps the same service controls.

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
| `restart` | Restart the service by stop + start |

## Quick Installation

To install FileUni as a service, you must pass the runtime directory through `--service-workdir`. The install step persists that single path into the service definition.

```bash
# Example for Linux/macOS
# Use --service-workdir for service install
sudo ./fileuni service install --service-workdir /srv/fileuni

# Example for Windows (Run as Administrator)
.\fileuni.exe service install --service-workdir C:\FileUni\runtime
```

> Important: Always use an absolute path for `--service-workdir` when installing as a service. This ensures the service can correctly locate its data upon system reboot.

## Advanced Service Options

FileUni's `service install` supports additional flags for fine-grained control:

- `--service-label <LABEL>`: Change the internal service name (Default: `io.fileuni.server`).
- `--service-user <USER>`: Specify which OS user should run the process (System-level only).
- `--service-level <system|user>`: Choose between a global system service or a per-user service.
- `--service-autostart <true|false>`: Enable or disable automatic start on boot.
- `--service-workdir <DIR>`: Runtime directory used only by `service install`.

### Example: Custom Service Label

```bash
sudo ./fileuni service install --service-workdir /srv/fileuni --service-label custom.fileuni.node
```

## Troubleshooting

- Permissions: Installing system-level services typically requires Root (Linux/macOS) or Administrator (Windows) privileges.
- Paths: `service install` requires a valid `--service-workdir` path.
- Logs: If the service fails to start, check system logs such as `journalctl` on Linux or Event Viewer on Windows.
