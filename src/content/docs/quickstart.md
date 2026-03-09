---
title: Quick Start
description: Set up your private file server in just a few minutes
order: 2
---

# Quick Start Guide

This guide will help you set up your FileUni file server in just a few minutes.

## 1. Get FileUni

Visit the [Download Page](https://fileuni.com/download) and select the version suitable for your device.

### Recommendation
- **Windows**: Use the **Desktop Version** for the best setup experience.
- **Linux / macOS / FreeBSD**: You can use the **One-line Install** command:
  ```bash
  curl -fsSL https://docs.fileuni.com/install.sh | sh
  ```
- **Docker**: For container enthusiasts:
  ```bash
  docker run -d --name fileuni -p 19000:19000 fileuni/fileuni:alpine
  ```

## 2. First-Time Setup

On the first launch, FileUni will enter a setup wizard (or you can force it with `--setup` flag):

1.  **Choose Storage**: Select the directory where your files will be stored.
2.  **Create Admin**: Set up your administrator username and password (min 8 characters).
3.  **Running Mode**: Select a performance tier based on your hardware (32MB RAM+).

## 3. Access Your Server

After setup, open your browser and navigate to:
```
http://localhost:19000/ui
```
Replace `localhost` with your server's IP if accessing from another device.

## Next Steps

- Learn how to [Install as a Service](./install-service) for background execution.
- Explore core [Features](./features).

