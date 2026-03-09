---
title: Reset Admin Password
description: Reset the built-in administrator password for the current FileUni deployment.
---

# Reset Admin Password

If you lose access to the administrator account, the supported recovery path in the current project is the CLI reset command.

## Method 1: Command Line Reset

Use the `-a` or `--admin` parameter to reset the administrator password:

```bash
# Using short flag
fileuni -a <NEW_PASSWORD>

# Using long flag
fileuni --admin <NEW_PASSWORD>

# With explicit config/app-data directories
fileuni -c /path/to/config-dir -A /path/to/app-data-dir -a <NEW_PASSWORD>
```

### Example

```bash
# Reset password to "MyNewP@ss123"
fileuni -a MyNewP@ss123

# Reset with specific directories
fileuni -c /etc/fileuni -A /var/lib/fileuni -a MyNewP@ss123
```

### Requirements

- You must have command line access to the server running FileUni
- Use `-c/--config-date` and `-A/--AppDataDir` when explicit runtime directories are needed
- The target deployment must be able to load its current configuration and database connection

## Method 2: Setup Mode

If you need to reconfigure the entire system, you can force FileUni to enter setup mode:

```bash
# Enter setup mode
fileuni --setup

# With explicit runtime directories
fileuni --setup -c /path/to/config-dir -A /path/to/app-data-dir
```

In setup mode, you can:
- Reopen the setup flow for the current runtime directories
- Revisit installation-time configuration steps

> **Warning**: Setup mode is mainly an installation and recovery tool. Use it carefully on an existing deployment.

## Troubleshooting

### "Failed to reset admin password"

This error usually occurs when:
1. The database connection is not available
2. The runtime directories are incorrect
3. The deployment configuration cannot be loaded correctly

**Solution**: 
- Verify the config directory contains the correct `config.toml`
- Verify the app data directory points to the same deployment
- Ensure the database service is running
- Check the logs for detailed error messages

### "Runtime directories are invalid"

Make sure you specify the correct runtime directories using `-c` and `-A` parameters:

```bash
fileuni -c /path/to/your/config-dir -A /path/to/your/app-data-dir -a NewPassword123
```

## Security Recommendations

When no administrator account exists, the current startup flow creates a default admin account `admin / admin888`. Change that password immediately on real deployments.

The password passed to `-a` appears in shell history on many systems. Consider rotating shell history or using a temporary shell session for recovery work:

```bash
# Reset password
fileuni -a MySecureP@ss

# Clear bash history (optional)
history -c
```

## Related Topics

- [Quick Start Guide](./quickstart) - Initial setup instructions
- [Install as Service](./install-service) - Keep the deployment running in the background
