---
title: Reset Admin Password
description: How to reset administrator password via command line or setup mode
---

# Reset Admin Password

If you have forgotten your administrator password, you can reset it using the command line interface. Regular users should use the "Forgot Password" feature on the login page.

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
- The new password must be at least 8 characters long

## Method 2: Setup Mode

If you need to reconfigure the entire system, you can force FileUni to enter setup mode:

```bash
# Enter setup mode
fileuni --setup

# With explicit runtime directories
fileuni --setup -c /path/to/config-dir -A /path/to/app-data-dir
```

In setup mode, you can:
- Reconfigure storage locations
- Create a new administrator account
- Adjust system settings

> ⚠️ **Warning**: Setup mode is typically used for initial installation. Running it on an existing system may affect your configuration.

## Password Requirements

- Minimum 8 characters
- Recommended: Use a combination of letters, numbers, and special characters
- Avoid using common passwords like "admin888" or "123456"

## Troubleshooting

### "Failed to reset admin password"

This error usually occurs when:
1. The database connection is not available
2. The run data directory is incorrect
3. There are no admin accounts in the system

**Solution**: 
- Verify the run data directory is correct and contains `config.toml`
- Ensure the database service is running
- Check the logs for detailed error messages

### "Runtime data directory is invalid"

Make sure you specify the correct runtime directories using `-c` and `-A` parameters:

```bash
fileuni -c /path/to/your/config-dir -A /path/to/your/app-data-dir -a NewPassword123
```

## Security Recommendations

1. **Change default password immediately**: If you're using the default password `admin888`, change it as soon as possible
2. **Use strong passwords**: Combine uppercase, lowercase, numbers, and special characters
3. **Regular password updates**: Consider changing your password periodically
4. **Secure command history**: The password may appear in your shell history. Consider clearing it after reset:

```bash
# Reset password
fileuni -a MySecureP@ss

# Clear bash history (optional)
history -c
```

## Related Topics

- [Quick Start Guide](./quickstart) - Initial setup instructions
- [User Management](./user-management) - Managing users and permissions
