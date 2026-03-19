---
title: Documentacion de FileUni
description: Documentacion practica para el proyecto FileUni actual.
order: 0
---

# Documentacion de FileUni

Este sitio sigue el proyecto FileUni actual, no planes hipoteticos.

FileUni es una plataforma de archivos basada en Rust con:

- Un nucleo compartido para el servidor CLI y la app de escritorio Tauri
- Una Web UI servida desde `/`
- Un documento OpenAPI expuesto en `/api/v1/openapi.json`
- Protocolos opcionales como WebDAV, S3, FTP y SFTP
- Directorios de ejecucion separados: configuracion y datos de la app

## Enlaces rapidos

- [Requisitos del sistema](./system-requirements)
- [Guia rapida](./quickstart)
- [Descargar FileUni](https://fileuni.com/es/download)
- [Funciones](./features)
- [Acceso y operaciones de archivos](./file-management)
- [Instalar como servicio](./install-service)
- [Restablecer contrasena de admin](./get-admin-passwd)

## Alcance de la documentacion

Estos docs se enfocan en lo que ya se puede verificar en este repositorio:

- Despliegue local y primer arranque
- Modelo de directorios en ejecucion e instalacion como servicio
- Web UI, API y accesos por protocolo
- Tareas de mantenimiento de administrador
