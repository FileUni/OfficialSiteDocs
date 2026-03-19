---
title: Guia rapida
description: Primer arranque local y acceso a la Web UI.
order: 2
---

# Guia rapida

Esta guia describe un arranque local minimo del servidor FileUni y como abrir la Web UI.

## 1. Preparar directorios

FileUni usa dos directorios en tiempo de ejecucion:

- Directorio de configuracion (flag `-c`)
- Directorio de datos de la app (flag `-A`)

Ejemplo:

```bash
mkdir -p ./config ./appdata
```

## 2. Validar configuracion

Para validar la configuracion sin iniciar el servidor completo:

```bash
./fileuni --configtest -c ./config -A ./appdata
```

## 3. Iniciar el servidor

```bash
./fileuni -c ./config -A ./appdata
```

## 4. Abrir la Web UI

Tras un arranque exitoso, FileUni imprime las direcciones activas para:

- Web UI: `http://<host>:<port>/`
- HTTP API: `http://<host>:<port>`
- OpenAPI JSON: `http://<host>:<port>/api/v1/openapi.json`

La URL local por defecto usada por el proyecto es:

```text
http://localhost:19000/
```

Segun tu configuracion, tambien pueden habilitarse endpoints S3, FTP y SFTP.

## Siguientes pasos

- [Funciones](./features)
- [Acceso y operaciones de archivos](./file-management)
- [Instalar como servicio](./install-service)
