---
title: Funciones
description: Capacidades verificables en el codigo actual de FileUni.
order: 3
---

# Funciones

Esta pagina lista capacidades que pueden verificarse desde el repositorio actual y sus puntos de entrada.

## Nucleo compartido para CLI y GUI

El servidor CLI y la app de escritorio Tauri usan la misma libreria Rust:

- La CLI es el punto de entrada principal del servidor.
- La GUI envuelve el mismo backend con controles de servicio, edicion de configuracion y logs.
- El frontend del servidor se incrusta de forma estatica y se sirve desde `/`.

## Multiples formas de acceso

El proyecto expone varias formas de llegar a la misma plataforma:

- Web UI en `/`
- HTTP API en `/api/v1/...`
- Documento OpenAPI en `/api/v1/openapi.json`
- WebDAV montado en `/@dav` cuando esta habilitado
- Servicios S3, FTP y SFTP cuando estan habilitados en la configuracion

## Capacidades de la plataforma de archivos

El workspace contiene un hub VFS y modulos frontend para:

- Navegar directorios, subir, descargar, mover, copiar, renombrar y borrar
- Busqueda, recientes, favoritos, papelera y compartidos
- Flujos de previsualizacion de tipos comunes de archivo en la Web UI
- Operaciones de archivos comprimidos como explorar, comprimir y extraer

La disponibilidad exacta de algunas funciones depende de tu configuracion y del modo de build.

## Modelo de despliegue

El modelo de ejecucion es explicito:

- La configuracion viene de `config.toml`, no de variables de entorno
- Los directorios en ejecucion se separan en config y datos
- Campos requeridos faltantes rechazan el arranque
- La instalacion como servicio persiste los directorios elegidos

## Operaciones y mantenimiento

Acciones de mantenimiento incluidas:

- Modo de setup para configuracion inicial
- Validacion de config con `--configtest`
- Instalacion y gestion del servicio del sistema
- Recuperacion de contrasena de admin mediante el asistente de configuracion
- Exportar e importar backups desde la linea de comandos

## Siguientes pasos

- [Guia rapida](./quickstart)
- [Acceso y operaciones de archivos](./file-management)
- [Instalar como servicio](./install-service)
