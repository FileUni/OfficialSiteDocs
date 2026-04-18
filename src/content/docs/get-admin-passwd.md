---
title: Reset Admin Password
description: Recover administrator access with the CLI or desktop launcher for the current FileUni deployment.
---

# Reset Admin Password

If you lose the built-in administrator password, use an explicit administrator reset action.

## Recovery Steps

1. Stop the running FileUni service or desktop instance.
2. Locate your runtime directory.
3. Run an administrator reset command, or use the change-admin-password action in the GUI launcher.
4. Enter the target username and new password.
5. If that username already exists, FileUni will ask for confirmation before promoting that user to administrator and updating the password.

## Example

If your runtime directory is `/srv/fileuni`, you can run:

```bash
fileuni --runtime-dir /srv/fileuni reset-admin --user admin --password admin888
```

If `admin` does not exist, the command creates an administrator.

If that username already exists but is not an administrator, the command can promote that user and update the password after confirmation.

## Important Notes

- Use the same runtime directory as the deployment you are recovering.
- If you point to a different runtime directory, you may initialize a different deployment by mistake.

## Troubleshooting

### The command did not change the expected deployment

Check these items:

- The runtime directory passed by `-R/--runtime-dir` is correct
- The database connection in `config.toml` points to the deployment you meant to update

### I do not know my runtime directory

You can recover it from:

- Your service install command or service manager
- Your desktop app runtime directory selection
- Your startup script or shell history

## Related Topics

- [Quick Start Guide](./quickstart)
- [Install as Service](./install-service)
