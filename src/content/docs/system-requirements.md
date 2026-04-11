---
title: System Requirements
description: Recommended and minimum operating systems for each FileUni build.
order: 1
---

# System Requirements

This page summarizes the recommended operating systems and the lowest versions that may still work. FileUni ships multiple build types (desktop GUI, CLI server, containers, and mobile), and each one has its own baseline.

## Recommended Versions (best experience)

These are the versions we actively target for full functionality and predictable updates:

- Windows: Windows 10 (1806) or newer
- macOS: macOS 11.0 or newer
- Linux: mainstream distributions still receiving security updates
- FreeBSD: FreeBSD 14 or newer

## Possible Minimum Versions (best effort)

Older systems can sometimes run FileUni, but support is best-effort only. The practical minimums are tied to the Rust toolchain and the build you choose:

- Windows: Windows 10 (older builds may work but are not guaranteed)
- macOS:
 - Intel: macOS 10.12 or newer
 - Apple Silicon: macOS 11.0 or newer
- Linux (standard builds): The lowest practical baseline is defined by the Rust Tier‑1 targets:
 - `x86_64-unknown-linux-gnu`: kernel 3.2+ / glibc 2.17+
 - `aarch64-unknown-linux-gnu`: kernel 4.1+ / glibc 2.17+
- Linux (static builds): If your system is below these baselines, try the musl build.
- FreeBSD: FreeBSD 12 or newer (older releases are unlikely to work)

This document may lag behind actual development and contain discrepancies; FileUni will do its best to support older operating systems, but the primary goal is full support on mainstream modern OSes.

## Minimum Platform by Build Type

### Desktop GUI (Tauri)

| Build | Recommended | Possible minimum (best effort) |
| --- | --- | --- |
| Windows Desktop | Windows 10 (1806)+ | Windows 10 (older builds may work) |
| macOS Desktop (Intel) | macOS 11.0+ | macOS 10.12+ |
| macOS Desktop (Apple Silicon) | macOS 11.0+ | macOS 11.0+ |
| Linux Desktop (zip) | Current LTS distributions | Older LTS + static build (if available) |

### CLI / Server

| Build | Recommended | Possible minimum (best effort) |
| --- | --- | --- |
| Windows CLI (x64/x86) | Windows 10 (1806)+ | Windows 10 (older builds may work) |
| macOS CLI (Intel) | macOS 11.0+ | macOS 10.12+ |
| macOS CLI (Apple Silicon) | macOS 11.0+ | macOS 11.0+ |
| Linux CLI (standard builds) | Current LTS distributions | kernel/glibc baseline listed above |
| Linux CLI (static builds) | Any modern Linux | If below the kernel/glibc baseline, try musl |
| FreeBSD CLI | FreeBSD 14+ | FreeBSD 12+ |
| Android CLI (Termux/ADB) | Modern Android devices | Varies by device/vendor; treat as best effort |

### Containers (Docker)

| Build | Recommended | Possible minimum (best effort) |
| --- | --- | --- |
| Docker (Alpine/Debian images) | Linux hosts with current Docker Engine | Any OS version supported by your Docker runtime |

### Mobile App

| Build | Recommended | Possible minimum (best effort) |
| --- | --- | --- |
| Android App | Recent Android versions | Varies by device/vendor; older versions may be unstable |
| iOS App | Recent iOS versions | Varies by device/Signing method |

### Proxmox VE (LXC/CT Template)

| Build | Recommended | Possible minimum (best effort) |
| --- | --- | --- |
| Proxmox VE CT | PVE 8.x | PVE 7.x |

## Memory and Load Expectations

FileUni's core process can complete baseline startup with about 15MB of available RAM.

- 64MB-class devices usually provide a reasonably smooth baseline experience in lean OS environments.
- 32MB-class devices are not a general guarantee. Whether they remain usable depends on OS overhead, enabled features, and real load.
- In Alpine, OpenWrt, or tightly constrained container setups, 32MB may still be enough for a reduced baseline configuration.
- Low-memory deployments must disable heavier features and use lower concurrency. They are not a target for full functionality, heavy preview pipelines, or high-throughput workloads.

## Notes

- If you are unsure, start with the recommended versions above.
- For older Linux systems, prefer the static Linux build when available.
- If a platform works but lacks full features, upgrade to a newer OS for the best experience.
