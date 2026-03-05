---
title: User Management
description: How administrators can manage system users
order: 6
---

# User Management Guide

As a system administrator, you can create and manage multiple user accounts for multi-user collaboration and data isolation.

## User Roles

FileUni has two user roles:

### Administrator
- Has highest system privileges
- Can create, modify, and delete other users
- Can configure system settings
- Can view system logs and statistics

### Regular User
- Can only manage their own files
- Can create share links
- Can modify their own account information
- Cannot access other users' data

> ⚠️ **Note**: The first created account automatically becomes an administrator.

## User Management Interface

### Accessing Admin Panel
1. Log in with administrator account
2. Click avatar in top right corner
3. Select "Admin Panel"
4. Choose "User Management" from left menu

### User List
On the user management page, you can:
- View list of all users
- Check user storage usage
- View user status (active/disabled)
- Quickly search for users

## Creating New Users

### Single User Creation
1. Click "New User" button
2. Fill in user information:
   - **Username**: Name used for login (cannot be email format)
   - **Password**: Initial password, user can change after login
   - **Role**: Select Administrator or Regular User
   - **Storage Quota**: Set maximum storage space for this user
3. Click "Create"

### Batch Creation
If you need to create multiple users:
1. Click "Batch Import" button
2. Download template file
3. Fill in user information according to template format
4. Upload file to complete batch creation

## User Quota Management

### Setting Storage Quota
Each user has an independent storage space limit:

1. Find the user in the user list
2. Click "Edit"
3. Set "Storage Quota":
   - **Unlimited**: User can use all available space
   - **Custom**: Enter specific value (e.g., 10GB, 100GB)
4. Save settings

### Quota Alerts
When user's usage approaches the limit:
- System automatically sends reminders
- User cannot upload files exceeding quota
- Administrator can adjust quota anytime

## Managing User Status

### Enable/Disable User

**Disable User**:
1. Find the user to disable
2. Click "Disable" button
3. After confirmation, user cannot log in

**Enable User**:
1. Find the disabled user
2. Click "Enable" button
3. User returns to normal usage

> 💡 **Use Cases**: Disable accounts when employees leave, temporarily suspend access when needed.

### Reset Password
When a user forgets their password:
1. Find that user
2. Click "Reset Password"
3. Enter new password
4. Inform user of the new password

> 💡 **Recommendation**: Remind users to change to a familiar personal password soon after reset.

## Deleting Users

### Precautions
Before deleting a user, please note:
- All user files will be deleted
- Created share links will become invalid
- Deleted user data cannot be recovered

### Deletion Steps
1. Find the user to delete
2. Click "Delete" button
3. System will display the user's file statistics
4. Confirm to delete

> ⚠️ **Recommendation**: Notify user to backup important files before deletion.

## Viewing User Details

Click on username to view detailed information:

### Basic Information
- Username, role, creation time
- Last login time and IP
- Account status

### Storage Statistics
- Used space / Total quota
- File count statistics
- Storage usage trend chart

### Activity Records
- Recent login records
- File operation logs
- Share creation records

## User Group Management (Advanced)

### Creating User Groups
For convenient batch user management:
1. Click "User Groups" tab
2. Click "New User Group"
3. Enter group name (e.g., "Tech Dept", "Marketing Dept")
4. Set default quota for this group

### Adding Users to Group
1. Select user group
2. Click "Add Members"
3. Select users to add
4. Save

### Group Permission Settings
Can uniformly set for entire group:
- Default storage quota
- Feature access permissions
- Sharing policies

## Security Settings

### Login Security
- **Failed Lock**: Lock for 30 minutes after 5 consecutive wrong password attempts
- **Abnormal Login Alert**: Alert when unusual login location detected
- **Session Timeout**: Automatically logout after long period of inactivity

### Password Policy
Recommend requiring users to:
- Use passwords longer than 8 characters
- Include letters and numbers
- Change passwords regularly

## FAQ

**Q: Can usernames be changed?**
A: Currently usernames cannot be changed after creation, please confirm carefully when creating.

**Q: Can users register themselves?**
A: Depends on system settings, administrators can enable or disable registration in system settings.

**Q: How to see who uses the most space?**
A: In user list, click "Storage Usage" column header to sort by usage amount.

**Q: Can administrators recover files deleted by users?**
A: If files are still in recycle bin, administrators can enter user recycle bin to help recover.

**Q: Can users be set to read-only?**
A: Current version supports through disabling specific features, more granular permission control will be released soon.

## Best Practices

### New User Onboarding Process
1. Create user account
2. Set appropriate storage quota
3. Send login information to user
4. Recommend user change password after first login

### Regular Maintenance
Recommend administrators regularly:
- Check users who haven't logged in for a long time
- Clean up accounts of departed employees
- Check storage usage and expand capacity timely
- Check abnormal login records

### Principle of Least Privilege
- Only give regular users necessary permissions
- Administrator accounts only for management operations
- Recommend using regular user accounts for daily use

## Next Steps

- Learn more about [System Configuration](./system-config) options
- Learn how to use [Monitoring and Logs](./monitoring)
- View [Security Recommendations](./security) to protect your system
