---
title: Reset Admin Password
description: Recover administrator access by re-entering the setup wizard for the current FileUni deployment.
---

# Reset Admin Password

If you lose the built-in administrator password, the supported recovery path is no longer a dedicated CLI reset flag.

FileUni now treats `{config-date}/install.lock` as the installation completion marker:

- If `install.lock` exists, FileUni starts normally.
- If `install.lock` is missing, both CLI and GUI block normal startup and force the setup wizard.
- Completing the setup wizard writes `install.lock` again and lets the system continue startup.

That means administrator password recovery is now done by reopening the setup wizard.

## Recovery Steps

1. Stop the running FileUni service or desktop instance.
2. Locate your configuration directory.
3. Delete `{config-date}/install.lock`.
4. Start FileUni again from CLI or GUI.
5. FileUni will enter the setup wizard automatically.
6. In the setup wizard, set a new administrator password and finish setup.

## Example

If your config directory is `/etc/fileuni`, delete this file:

```bash
rm /etc/fileuni/install.lock
```

Then restart FileUni:

```bash
fileuni -c /etc/fileuni -A /var/lib/fileuni
```

Or reopen the desktop app and select the same runtime directories.

## Important Notes

- Deleting `install.lock` and restarting is effectively the system reset entry for that deployment.
- This does not delete your existing database or app data by itself, but it does force you back through the initialization flow.
- Use the same config directory and app data directory as the deployment you are recovering.
- If you point to a different runtime directory pair, you may initialize a different deployment by mistake.

## Troubleshooting

### Setup wizard did not appear

Check these items:

- You deleted the correct file: `{config-date}/install.lock`
- You restarted the same deployment
- The runtime directories passed by `-c/--config-date` and `-A/--AppDataDir` are correct

### I do not know my config directory

You can recover it from:

- Your service install command or service manager
- Your desktop app runtime directory selection
- Your startup script or shell history

## Related Topics

- [Quick Start Guide](./quickstart)
- [Install as Service](./install-service)
