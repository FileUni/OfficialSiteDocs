---
title: Configuration requise
description: Systèmes d'exploitation recommandés et minimaux pour chaque build FileUni.
order: 1
---

# Configuration requise

Cette page résume les systèmes d'exploitation recommandés et les versions les plus basses qui peuvent encore fonctionner. FileUni propose plusieurs types de builds (GUI de bureau, serveur CLI, conteneurs et mobile), et chacun a sa propre configuration de base.

## Versions recommandées (meilleure expérience)

Ce sont les versions que nous ciblons activement pour une fonctionnalité complète et des mises à jour prévisibles :

- Windows : Windows 10 (1806) ou plus récent
- macOS : macOS 11.0 ou plus récent
- Linux : distributions mainstream recevant encore des mises à jour de sécurité
- FreeBSD : FreeBSD 14 ou plus récent

## Versions minimales possibles (best effort)

Les systèmes plus anciens peuvent parfois exécuter FileUni, mais le support est fourni au mieux. Les minimums pratiques sont liés à la chaîne d'outils Rust et au build choisi :

- Windows : Windows 10 (les builds plus anciens peuvent fonctionner mais ne sont pas garantis)
- macOS :
  - Intel : macOS 10.12 ou plus récent
  - Apple Silicon : macOS 11.0 ou plus récent
- Linux (builds standard) : La base pratique la plus basse est définie par les cibles Rust Tier‑1 :
  - `x86_64-unknown-linux-gnu` : noyau 3.2+ / glibc 2.17+
  - `aarch64-unknown-linux-gnu` : noyau 4.1+ / glibc 2.17+
- Linux (builds statiques) : Si votre système est en dessous de ces bases, essayez le build musl.
- FreeBSD : FreeBSD 12 ou plus récent (les releases plus anciennes ne fonctionneront probablement pas)

Ce document peut être en retard sur le développement réel et contenir des divergences ; FileUni fera de son mieux pour supporter les anciens systèmes d'exploitation, mais l'objectif principal est le support complet sur les OS modernes mainstream.

## Plateforme minimale par type de build

### GUI de bureau (Tauri)

| Build | Recommandé | Minimum possible (best effort) |
| --- | --- | --- |
| Windows Desktop | Windows 10 (1806)+ | Windows 10 (les builds plus anciens peuvent fonctionner) |
| macOS Desktop (Intel) | macOS 11.0+ | macOS 10.12+ |
| macOS Desktop (Apple Silicon) | macOS 11.0+ | macOS 11.0+ |
| Linux Desktop (AppImage) | Distributions LTS actuelles | Anciennes LTS + build statique (si disponible) |

### CLI / Serveur

| Build | Recommandé | Minimum possible (best effort) |
| --- | --- | --- |
| Windows CLI (x64/x86) | Windows 10 (1806)+ | Windows 10 (les builds plus anciens peuvent fonctionner) |
| macOS CLI (Intel) | macOS 11.0+ | macOS 10.12+ |
| macOS CLI (Apple Silicon) | macOS 11.0+ | macOS 11.0+ |
| Linux CLI (builds standard) | Distributions LTS actuelles | Base noyau/glibc listée ci-dessus |
| Linux CLI (builds statiques) | Tout Linux moderne | Si en dessous de la base noyau/glibc, essayez musl |
| FreeBSD CLI | FreeBSD 14+ | FreeBSD 12+ |
| Android CLI (Termux/ADB) | Appareils Android modernes | Varie selon l'appareil/fabricant ; à traiter comme best effort |

### Conteneurs (Docker)

| Build | Recommandé | Minimum possible (best effort) |
| --- | --- | --- |
| Docker (images Alpine/Debian) | Hôtes Linux avec Docker Engine actuel | Toute version d'OS supportée par votre runtime Docker |

### Application mobile

| Build | Recommandé | Minimum possible (best effort) |
| --- | --- | --- |
| Android App | Versions Android récentes | Varie selon l'appareil/fabricant ; les anciennes versions peuvent être instables |
| iOS App | Versions iOS récentes | Varie selon l'appareil/méthode de signature |

### Proxmox VE (Template LXC/CT)

| Build | Recommandé | Minimum possible (best effort) |
| --- | --- | --- |
| Proxmox VE CT | PVE 8.x | PVE 7.x |

## Notes

- Si vous n'êtes pas sûr, commencez avec les versions recommandées ci-dessus.
- Pour les systèmes Linux plus anciens, préférez le build Linux statique lorsqu'il est disponible.
- Si une plateforme fonctionne mais n'a pas toutes les fonctionnalités, passez à un OS plus récent pour la meilleure expérience.