---
title: Guia rapida
description: Primer arranque local y acceso a la interfaz web.
order: 2
---

# Guia rapida

Esta guia describe un arranque local minimo del servidor FileUni y como abrir la interfaz web.

## 1. Preparar el directorio de ejecucion

FileUni ahora usa un unico directorio de ejecucion para configuracion y datos.

- `-R` / `--runtime-dir`: directorio unico para configuracion, install lock, base de datos, cache y otros archivos de ejecucion
- `--runtime-dir`: directorio de ejecucion solo para `service install`

Ejemplo:

```bash
mkdir -p ./runtime
```

## 2. Validar configuracion

Para validar la configuracion sin iniciar el servidor completo:

```bash
./fileuni --runtime-dir ./runtime config test
```

## 3. Iniciar el servidor

Si falta `{runtime-dir}/install.lock`, FileUni abrira el centro de configuracion antes del arranque normal.

Para reabrir el centro de configuracion mas tarde, elimina `{runtime-dir}/install.lock` y vuelve a iniciar FileUni:

```bash
rm -f ./runtime/install.lock
./fileuni --runtime-dir ./runtime
```

Para iniciar normalmente:

```bash
./fileuni --runtime-dir ./runtime
```

## 4. Abrir la interfaz web

Tras un arranque exitoso, FileUni imprime las direcciones activas para:

- Interfaz web: `http://<host>:<port>/`
- API HTTP: `http://<host>:<port>`
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
