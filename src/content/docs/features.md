---
title: Features
description: Learn about FileUni's core capabilities and advantages
order: 3
---

# Features

FileUni provides a complete file management solution, making your data management more efficient and secure.

## 📁 File Management

### Intuitive File Operations
- **Drag & Drop Upload**: Drag files like using a computer folder
- **Batch Operations**: Select multiple files to move, copy, or delete at once
- **Quick Search**: Enter filename or keywords to find files in seconds
- **Multiple View Modes**: Switch between list view and icon view

### File Preview
View common files without downloading:
- Images: Preview JPG, PNG, GIF formats directly
- Documents: View PDF, Word, Excel online
- Videos: Play mainstream video formats online
- Code Files: Syntax highlighting display

## 🔗 Multi-Device Access

### Access Anywhere
FileUni supports multiple access methods for different scenarios:

| Access Method | Suitable For | Characteristics |
|--------------|--------------|-----------------|
| **Web Version** | Temporary use, public computers | No installation needed, access via browser |
| **Mobile Apps** | Mobile work, photo backup | Use third-party file managers |
| **Computer Mount** | Daily work, large file transfer | Use like a local hard drive |
| **Dedicated Clients** | Advanced users, automation | Support various standard protocols |

### Supported Standard Protocols
- **WebDAV**: Native support on Windows, Mac, Linux
- **FTP**: Traditional file transfer protocol (plaintext only, no FTPS support; use SFTP for secure transfers)
- **SFTP**: Secure SSH file transfer protocol
- **S3 API**: AWS S3 compatible interface

## 🔐 Security Protection

### Multi-Layer Protection
Like a bank vault, FileUni uses multi-layer security:

1. **Account Password**: First line of defense against unauthorized access
2. **Access Control**: Admins can restrict user permissions
3. **Operation Audit**: Log all important actions for traceability
4. **Anomaly Detection**: Automatically identify suspicious logins

### Data Security
- **Local Storage**: Files stay on your device, not uploaded to third parties
- **Encrypted Transfer**: Network transmission is fully encrypted
- **Deletion Protection**: Deleted files go to recycle bin for recovery

## 👥 User Management

### Flexible Permission System

**Administrator**
- System configuration and management
- User account management
- View system logs and status

**Regular Users**
- Manage their own files
- Create share links
- Modify personal settings

### User Groups
- Group users for management
- Set storage quotas by group
- Configure permission policies uniformly

## 📤 File Sharing

### Multiple Sharing Methods

**Private Sharing**
- Set extraction password
- Limit download count
- Set expiration date
- Suitable for sensitive files

**Public Sharing**
- Direct access without password
- Generate short links
- Support QR code sharing
- Suitable for public materials

**Direct Link Sharing**
- Direct download links
- Suitable for embedding in other systems
- Support download tools

### Share Management
- View all sharing records
- Cancel sharing anytime
- Statistics on access count
- View download history

## 🗑️ Recycle Bin

### Prevent Accidental Deletion
Deleted files don't disappear immediately but go to the recycle bin:
- **Auto Retention**: Deleted files kept for 30 days
- **One-Click Recovery**: Restore to original location anytime
- **Permanent Delete**: Free up space when confirmed unnecessary

### Recycle Bin Management
- Separate recycle bin per user
- View recycle bin contents
- Bulk empty or restore

## 📊 Storage Management

### Quota Control
Admins can set storage limits for each user:
- Set total capacity limit
- Monitor usage
- Over-quota alerts

### Storage Optimization
- **Duplicate Detection**: Find duplicate files to save space
- **Large File Identification**: Quickly locate space-consuming files
- **Access Statistics**: Know which files are used most

## 🔄 Data Protection

### Disaster Recovery
Even in unexpected situations, your data is protected:
- **Operation Logs**: Record all file changes
- **Auto Repair**: Automatic recovery after system anomalies
- **Backup Reminders**: Regular reminders for admins to backup

### Maintenance Mode
When maintenance is needed:
- Notify all online users
- Restrict new file writes
- Ensure data consistency

## 💾 Ultra-Lightweight Operation

### Minimal Resource Requirements
FileUni is engineered to run on the most constrained hardware:

| Resource | Minimum | Recommended | Full Features |
|----------|---------|-------------|---------------|
| **Memory** | 32MB | 64MB | 2GB+ |
| **CPU** | Any ARM/x86 | Single-core 1GHz | Multi-core 2GHz+ |
| **Storage** | 50MB | 200MB | 1GB+ |

### Adaptive Performance Tiers

**Tier 1: Basic Mode (32-64MB RAM)**
- Core file serving via WebDAV/FTP/SFTP
- Basic web interface for file browsing
- Essential user authentication
- Ideal for: Routers, IoT devices, old phones

**Tier 2: Standard Mode (128MB-1GB RAM)**
- Full web interface with preview support
- Multiple concurrent users
- Background task processing
- Thumbnail generation
- Ideal for: Raspberry Pi, old PCs, NAS enclosures

**Tier 3: Enhanced Mode (2GB+ RAM)**
- Complete feature set enabled
- Advanced caching and indexing
- Parallel processing for large files
- High-concurrency support
- Ideal for: Dedicated servers, modern PCs

### Zero-Overhead Architecture

Unlike traditional NAS software that requires dedicated hardware:

- **No mandatory RAID setup**: Use existing disks as-is
- **No reserved partitions**: Install anywhere with free space
- **No forced services**: Enable only what you need
- **Minimal background processes**: Resources go to your actual work

### Hassle-Free Migration

Upgrade or move your installation without headaches:

- **No re-partitioning required**: Keep your existing disk layout
- **Data structure preserved**: Files stay where they are during upgrades
- **Configuration portability**: Export/import settings easily
- **Cross-device migration**: Move from router to server seamlessly

---

## 🚀 Performance Optimization

### Smart Caching
- **File List Cache**: Fast loading of frequently used directories
- **Thumbnail Cache**: Instant image previews
- **Search Index**: Quick response to full-text search

### Transfer Optimization
- **Resume Transfer**: Continue large files from break point
- **Multi-threaded Download**: Fully utilize bandwidth
- **Compressed Transfer**: Automatic compression for text files

## 📱 Mobile Adaptation

### Responsive Design
- Automatically adapts to mobile screens
- Touch operation optimized
- Mobile-exclusive features

### APP Support
- Support various third-party file managers
- Convenient as using cloud storage apps

## Next Steps

- Learn how to [Manage Files](./file-management)
- Learn [Sharing Files](./sharing) methods
- View [User Management](./user-management) guide
