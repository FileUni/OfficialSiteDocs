---
title: Quick Start
description: Set up your private file server in just a few minutes
order: 2
---

# Quick Start Guide

This guide will help you set up your FileUni file server in just a few minutes.

## Installation Methods

### Method 1: One-Line Install (Recommended)

Run the following command in your terminal:

```bash
curl -fsSL https://fileuni.com/install.sh | sh
```

The service will start automatically after installation.

### Method 2: Download Pre-built Binaries

1. Visit the [Download Page](https://fileuni.com/download)
2. Select the version for your device:
   - Windows: Download `.exe` file
   - Mac: Download `.dmg` file
   - Linux: Download binary for your architecture
   - Router/ARM devices: Choose ARM version
3. Extract and run the program

### Method 3: Docker Deployment

If you're familiar with Docker, use this command:

```bash
docker run -d \
  --name FileUni \
  -p 19000:19000 \
  -v /your/data/path:/data \
  fileuni/fileuni:latest
```

## First-Time Setup Wizard

On first launch, the system will guide you through a simple configuration:

### Step 1: Choose Storage Location

Select the folder where you want to store files:
- Can be internal hard drive
- Can be external USB drive
- Choose a disk with plenty of space

### Step 2: Create Admin Account

Set up your administrator username and password:
- Username: Use something memorable (not an email)
- Password: Use at least 8 characters with letters and numbers

> 💡 **Tip**: This is the highest privilege account. Please keep the password secure.

### Step 3: Select Running Mode

Choose based on your device's performance:

| Mode | Suitable For | Characteristics |
|------|-------------|-----------------|
| **Power Saving** | Routers, old phones | Limits concurrency, reduces resource usage |
| **Standard** | Regular computers | Balanced performance and resource use |
| **Performance** | Dedicated servers | Full hardware utilization |

## Access Your Server

After configuration, you can access FileUni in several ways:

### Web Browser
Open your browser and enter:
```
http://localhost:19000/ui
```

If accessing from another device, replace `localhost` with the server IP address.

### Mobile Apps
FileUni supports standard protocols. You can use these apps:
- **Android**: Solid Explorer, MiXplorer
- **iOS**: Documents, FileBrowser

Connect using WebDAV or SFTP protocol, enter the server address and credentials. (Note: FTP only supports plaintext; SFTP is recommended for secure transfers)

## Basic Operations

### Upload Files
1. Log in to the web interface
2. Click the "Upload" button
3. Select files or folders to upload
4. Wait for the upload to complete

### Create Folder
1. Click the "New Folder" button
2. Enter folder name
3. Click confirm

### Share Files
1. Select the file or folder to share
2. Click the "Share" button
3. Set sharing password and expiration
4. Copy the share link and send to others

## FAQ

**Q: Forgot admin password?**
A: Run on the server: `fileuni -a newpassword` to reset the password

**Q: How to access from outside my network?**
A: You need to configure port forwarding or DDNS. See [Remote Access Guide](./remote-access)

**Q: How to backup data?**
A: Regularly backup your storage folder, or use the system export function

## Getting Help

Need help? You can:
- 📖 Browse full documentation
- 💬 Join community discussions
- 🐛 Submit feedback

Next, learn more about FileUni [Features](./features).
