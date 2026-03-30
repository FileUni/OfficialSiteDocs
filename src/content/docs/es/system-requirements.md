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

## Memoria y carga

El proceso central de FileUni puede completar el arranque basico con unos 15MB de RAM disponible.

- Los dispositivos de la clase 64MB suelen ofrecer una experiencia basica bastante fluida en sistemas ligeros.
- Los dispositivos de la clase 32MB no forman parte de un escenario garantizado. La estabilidad depende del consumo del sistema, las funciones activadas y la carga real.
- En Alpine, OpenWrt o contenedores muy ajustados, 32MB aun puede bastar para una configuracion basica reducida.
- Los despliegues de baja memoria deben desactivar funciones pesadas y reducir la concurrencia. No son una referencia para funcionalidad completa, vistas previas pesadas o cargas de alto rendimiento.

## Notas

- Si no estas seguro, empieza con las versiones recomendadas.
- En Linux antiguo, prefiere builds estaticos cuando esten disponibles.
