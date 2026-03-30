---
title: Systemanforderungen
description: Empfohlene und minimale Betriebssysteme für jeden FileUni-Build.
order: 1
---

# Systemanforderungen

Diese Seite fasst die empfohlenen Betriebssysteme und die niedrigsten Versionen zusammen, die möglicherweise noch funktionieren. FileUni liefert mehrere Build-Typen (Desktop-GUI, CLI-Server, Container und Mobil), und jeder hat seine eigene Baseline.

## Empfohlene Versionen (beste Erfahrung)

Dies sind die Versionen, die wir aktiv für volle Funktionalität und vorhersagbare Updates anstreben:

- Windows: Windows 10 (1806) oder neuer
- macOS: macOS 11.0 oder neuer
- Linux: Mainstream-Distributionen, die noch Sicherheitsupdates erhalten
- FreeBSD: FreeBSD 14 oder neuer

## Mögliche Minimalversionen (Best Effort)

Ältere Systeme können FileUni manchmal ausführen, aber der Support ist nur best effort. Die praktischen Minima sind an die Rust-Toolchain und den gewählten Build gebunden:

- Windows: Windows 10 (ältere Builds können funktionieren, sind aber nicht garantiert)
- macOS:
  - Intel: macOS 10.12 oder neuer
  - Apple Silicon: macOS 11.0 oder neuer
- Linux (Standard-Builds): Die niedrigste praktische Baseline wird durch die Rust Tier‑1-Ziele definiert:
  - `x86_64-unknown-linux-gnu`: Kernel 3.2+ / glibc 2.17+
  - `aarch64-unknown-linux-gnu`: Kernel 4.1+ / glibc 2.17+
- Linux (statische Builds): Wenn Ihr System unter diesen Baselines liegt, versuchen Sie den musl-Build.
- FreeBSD: FreeBSD 12 oder neuer (ältere Releases werden wahrscheinlich nicht funktionieren)

Dieses Dokument kann hinter der tatsächlichen Entwicklung zurückbleiben und Unstimmigkeiten enthalten; FileUni wird sein Bestes tun, um ältere Betriebssysteme zu unterstützen, aber das Hauptziel ist volle Unterstützung auf modernen Mainstream-Betriebssystemen.

## Minimale Plattform nach Build-Typ

### Desktop-GUI (Tauri)

| Build | Empfohlen | Mögliches Minimum (best effort) |
| --- | --- | --- |
| Windows Desktop | Windows 10 (1806)+ | Windows 10 (ältere Builds können funktionieren) |
| macOS Desktop (Intel) | macOS 11.0+ | macOS 10.12+ |
| macOS Desktop (Apple Silicon) | macOS 11.0+ | macOS 11.0+ |
| Linux Desktop (AppImage) | Aktuelle LTS-Distributionen | Ältere LTS + statischer Build (falls verfügbar) |

### CLI / Server

| Build | Empfohlen | Mögliches Minimum (best effort) |
| --- | --- | --- |
| Windows CLI (x64/x86) | Windows 10 (1806)+ | Windows 10 (ältere Builds können funktionieren) |
| macOS CLI (Intel) | macOS 11.0+ | macOS 10.12+ |
| macOS CLI (Apple Silicon) | macOS 11.0+ | macOS 11.0+ |
| Linux CLI (Standard-Builds) | Aktuelle LTS-Distributionen | Kernel/glibc-Baseline oben genannt |
| Linux CLI (statische Builds) | Jedes moderne Linux | Wenn unter der Kernel/glibc-Baseline, versuchen Sie musl |
| FreeBSD CLI | FreeBSD 14+ | FreeBSD 12+ |
| Android CLI (Termux/ADB) | Moderne Android-Geräte | Variiert je nach Gerät/Hersteller; als best effort behandeln |

### Container (Docker)

| Build | Empfohlen | Mögliches Minimum (best effort) |
| --- | --- | --- |
| Docker (Alpine/Debian-Images) | Linux-Hosts mit aktuellem Docker Engine | Jede vom Docker-Runtime unterstützte OS-Version |

### Mobile App

| Build | Empfohlen | Mögliches Minimum (best effort) |
| --- | --- | --- |
| Android App | Aktuelle Android-Versionen | Variiert je nach Gerät/Hersteller; ältere Versionen können instabil sein |
| iOS App | Aktuelle iOS-Versionen | Variiert je nach Gerät/Signierungsmethode |

### Proxmox VE (LXC/CT-Template)

| Build | Empfohlen | Mögliches Minimum (best effort) |
| --- | --- | --- |
| Proxmox VE CT | PVE 8.x | PVE 7.x |

## Speicher- und Lastprofil

Der Kernprozess von FileUni kann den Basisstart mit etwa 15MB verfugbarem RAM abschliessen.

- Gerate der 64MB-Klasse bieten in schlanken Systemumgebungen meist eine recht flussige Basiserfahrung.
- Gerate der 32MB-Klasse sind kein allgemein garantierter Einsatzbereich. Nutzbarkeit und Stabilitat hangen von System-Overhead, aktivierten Funktionen und realer Last ab.
- Unter Alpine, OpenWrt oder streng begrenzten Container-Umgebungen konnen 32MB fur eine reduzierte Basiskonfiguration trotzdem ausreichen.
- Low-Memory-Deployments mussen schwerere Funktionen abschalten und die Parallelitat deutlich senken. Sie sind kein Ziel fur vollen Funktionsumfang, schwere Vorschaupfade oder hohen Durchsatz.

## Hinweise

- Wenn Sie unsicher sind, beginnen Sie mit den empfohlenen Versionen oben.
- Für ältere Linux-Systeme bevorzugen Sie den statischen Linux-Build, falls verfügbar.
- Wenn eine Plattform funktioniert, aber nicht alle Funktionen bietet, upgraden Sie auf ein neueres OS für das beste Erlebnis.
