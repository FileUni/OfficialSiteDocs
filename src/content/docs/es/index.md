---
title: Documentacion de FileUni
description: Documentacion practica para el proyecto FileUni actual.
order: 0
---

# Documentacion de FileUni

Este sitio sigue el proyecto FileUni actual, no planes hipoteticos.

FileUni es una plataforma de archivos basada en Rust con:

- Un nucleo compartido para el servidor CLI y la app de escritorio Tauri
- Una interfaz web servida desde `/`
- Un documento OpenAPI expuesto en `/api/v1/openapi.json`
- Protocolos opcionales como WebDAV, S3, FTP y SFTP
- Un unico directorio de ejecucion que guarda configuracion y datos

## Enlaces rapidos

- [Requisitos del sistema](./system-requirements)
- [Guia rapida](./quickstart)
- [Descargar FileUni](https://fileuni.com/es/download)
- [Funciones](https://fileuni.com/es/features/)
- [Compatibilidad con Nextcloud](./nextcloud-compatibility)
- [Acceso y operaciones de archivos](./file-management)
- [Instalar como servicio](./install-service)
- [Restablecer contrasena de admin](./get-admin-passwd)

## Alcance de la documentacion

Estos docs se enfocan en lo que ya se puede verificar en este repositorio:

- Despliegue local y primer arranque
- Modelo de directorios en ejecucion e instalacion como servicio
- Interfaz web, API y accesos por protocolo
- Posicionamiento de compatibilidad con clientes Nextcloud y su alcance actual
- Tareas de mantenimiento de administrador
