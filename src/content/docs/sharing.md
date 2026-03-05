---
title: File Sharing
description: Learn how to securely share files with others
order: 5
---

# File Sharing Guide

FileUni provides flexible file sharing capabilities, allowing you to share files with others securely and conveniently.

## Sharing Methods Overview

| Share Type | Security | Suitable For |
|-----------|----------|--------------|
| **Private Sharing** | ⭐⭐⭐ High | Sensitive files, important documents |
| **Public Sharing** | ⭐⭐ Medium | Public materials, promotional content |
| **Direct Link** | ⭐ Low | Embedding in other systems, program downloads |

## Creating a Share

### Share a Single File

1. Find the file you want to share in the file list
2. Select the file (click on filename)
3. Click the "Share" button in the top toolbar
4. Configure sharing options in the popup window

### Share an Entire Folder

1. Find the folder you want to share
2. Select the folder
3. Click the "Share" button
4. Configure sharing options

> 💡 **Tip**: When sharing a folder, others can browse all contents within it.

## Share Configuration

### Basic Settings

#### 1. Extraction Password
When a password is set, others need to enter it to access:
- **Random Generation**: System automatically generates a 4-digit password
- **Quick Select**: Choose common ones like 1111, 1234
- **Custom**: Enter your own password

> 💡 **Recommendation**: Always set a password when sharing sensitive files

#### 2. Validity Period
Set how long the share link remains active:
- **24 Hours**: Temporary share, expires after one day
- **7 Days**: Short-term share, expires after one week
- **30 Days**: Long-term share, expires after one month
- **Permanent**: Link stays active until you manually cancel it

### Advanced Options

#### 1. Download Count Limit
Set maximum download count, link automatically expires when reached:
- Suitable for limiting distribution scope
- Prevents malicious downloading
- Can be set to 1 (self-destruct effect)

#### 2. Direct Link Access
When enabled, files can be downloaded via direct link:
- Suitable for embedding in other systems
- Can be downloaded directly with download tools
- Requires password authentication for access

## Using Share Links

### Copy Share Information

After clicking "Copy Full Share Information", you'll get text like this:

```
[FileUni File Share]
File: Annual Report.pdf
Share Link: http://your-server.com/ui/share?id=XXXXXX
Password: 1234

[Direct Link Info]
Direct URL: http://your-server.com/api/direct/XXXXXX/
Username: fileuni
Password: 1234
```

Simply paste and send to recipients.

### QR Code Sharing

Click the QR code button to:
- Generate a QR code for the share link
- Recipients can scan with phone to access
- Suitable for face-to-face sharing or printing on materials

## Managing My Shares

### View All Shares

Click "Shares" in the left sidebar to:
- View all active shares
- See access statistics for each share
- Check share expiration dates and passwords

### Share List View

**List Mode**:
- Shows file path, view count, creation time
- Shares nearing expiration are highlighted in red
- Lock icon indicates password protection

**Icon Mode**:
- Large icon display
- Security status badge in top right corner
- View count label at bottom

### Edit Share

To modify share settings:
1. Find the share in the share list
2. Right-click and select "Edit"
3. Modify password, expiration, etc.
4. Click save

> ⚠️ **Note**: After changing the password, old share links may require the new password.

### Cancel Share

1. Find the share you want to cancel in the list
2. Select it and click the "Cancel Share" button
3. After confirmation, the link becomes invalid immediately

> 💡 **Tip**: After canceling a share, files already downloaded to the recipient's device are not affected.

## Visitor Access Experience

### Accessing Share Page

When visitors open a share link:
1. They see file information and preview (if supported format)
2. If there's a password, they need to enter it to continue
3. Click download button to get the file

### Browsing Shared Folders

When a folder is shared, visitors can:
- Browse contents like a regular folder
- Click into subfolders
- View breadcrumb navigation to understand current location
- Download individual or multiple files

## Security Recommendations

### Sharing Sensitive Files
- ✅ Always set an extraction password
- ✅ Set reasonable expiration (not too long)
- ✅ Limit download count
- ❌ Don't publicly share passwords

### Sharing Public Materials
- Can be shared without password for easy access
- But still set an expiration date
- Regularly check the share list

### Regular Checks
It's recommended to regularly check "My Shares":
- Cancel shares that are no longer needed
- Check for unusual access records
- Update shares nearing expiration

## FAQ

**Q: What if the share link expires?**
A: If the link expires or is canceled, you'll need to create a new share.

**Q: Recipient says password is incorrect?**
A: Please confirm the correct password was sent, noting case sensitivity and numbers.

**Q: Can I modify an already created share?**
A: Yes, find the share in "My Shares" and click edit to modify settings.

**Q: How do I know who downloaded the file?**
A: Currently you can view access count, detailed access logs feature is in development.

**Q: What happens if the shared file is deleted?**
A: If the original file is deleted or moved, the share link will become invalid.

## Usage Tips

### Quick Share
For temporary sharing, use:
- 24-hour validity
- Random password
- Quickly copy and send link

### Long-term Share
For shares that need to remain active:
- Set to permanent
- Use easy-to-remember password
- Regularly check access status

### Batch Share
Currently each file/folder needs separate share creation, batch sharing will be supported in the future.

## Next Steps

- Learn about [Recycle Bin](./recycle-bin) to protect accidentally deleted files
- Learn [Storage Management](./storage) to optimize space usage
- View [User Management](./user-management) to understand multi-user collaboration
