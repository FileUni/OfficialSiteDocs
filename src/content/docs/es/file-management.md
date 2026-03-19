---
title: Acceso y operaciones de archivos
description: Como acceder al servidor FileUni actual y que operaciones existen.
order: 4
---

# Acceso y operaciones de archivos

Esta pagina se enfoca en rutas de acceso y operaciones verificables en el proyecto actual.

## Web UI

El frontend incrustado se sirve desde:

```text
/
```

La Web UI es el punto de entrada principal para:

- Navegar archivos y directorios
- Subir y descargar archivos
- Busqueda y previsualizacion
- Recientes, favoritos, papelera y compartidos
- Llamar APIs del backend desde el navegador

## HTTP API

El servidor expone endpoints tipo REST bajo:

```text
/api/v1
```

Para inspeccion de API y generacion de clientes, tambien se expone:

```text
/api/v1/openapi.json
```

## Acceso por protocolo

Segun la configuracion, FileUni tambien puede exponer:

- WebDAV: montado bajo `/@dav`
- S3: en el puerto configurado
- FTP: en el puerto configurado
- SFTP: en el puerto configurado

Cuando el servidor inicia, imprime la direccion HTTP activa y si S3, FTP y SFTP estan habilitados.
