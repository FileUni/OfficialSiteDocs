---
title: Requisitos del sistema
description: Sistemas operativos recomendados y minimos para cada build de FileUni.
order: 1
---

# Requisitos del sistema

Esta pagina resume los sistemas operativos recomendados y las versiones mas bajas que pueden funcionar.

## Versiones recomendadas (mejor experiencia)

- Windows: Windows 10 (1806) o mas reciente
- macOS: macOS 11.0 o mas reciente
- Linux: distribuciones principales con actualizaciones de seguridad
- FreeBSD: FreeBSD 14 o mas reciente

## Minimos posibles (mejor esfuerzo)

Sistemas mas antiguos a veces pueden ejecutar FileUni, pero el soporte es de mejor esfuerzo.

## Minimo por tipo de build

### GUI de escritorio (Tauri)

| Build | Recomendado | Minimo posible (mejor esfuerzo) |
| --- | --- | --- |
| Windows Desktop | Windows 10 (1806)+ | Windows 10 (puede variar) |
| macOS Desktop (Intel) | macOS 11.0+ | macOS 10.12+ |
| macOS Desktop (Apple Silicon) | macOS 11.0+ | macOS 11.0+ |
| Linux Desktop (AppImage) | LTS actuales | LTS antiguos + build estatica (si existe) |

### CLI / Servidor

| Build | Recomendado | Minimo posible (mejor esfuerzo) |
| --- | --- | --- |
| Windows CLI (x64/x86) | Windows 10 (1806)+ | Windows 10 (puede variar) |
| macOS CLI (Intel) | macOS 11.0+ | macOS 10.12+ |
| macOS CLI (Apple Silicon) | macOS 11.0+ | macOS 11.0+ |
| Linux CLI (builds normales) | LTS actuales | Baseline de kernel/glibc segun target |
| Linux CLI (builds estaticos) | Linux moderno | Si es menor al baseline, usar musl |
| FreeBSD CLI | FreeBSD 14+ | FreeBSD 12+ |

## Notas

- Si no estas seguro, empieza con las versiones recomendadas.
- En Linux antiguo, prefiere builds estaticos cuando esten disponibles.
