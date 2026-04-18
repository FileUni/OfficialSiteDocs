---
title: Restablecer contrasena de admin
description: Recuperar acceso de administrador con CLI o con el lanzador de escritorio.
---

# Restablecer contrasena de admin

Si pierdes la contrasena del administrador integrado, usa una accion explicita de reseteo de administrador.

## Pasos de recuperacion

1. Deten la instancia o el servicio de FileUni.
2. Localiza el directorio de ejecucion.
3. Ejecuta un reseteo de administrador con CLI, o usa la accion de cambiar la contrasena de admin en el lanzador GUI.
4. Introduce el nombre de usuario de destino y la nueva contrasena.
5. Si el usuario ya existe, FileUni pedira confirmacion antes de promocionarlo a administrador y actualizar la contrasena.

## Solucion de problemas

### El comando no cambio el despliegue correcto

- Verifica que `-R/--runtime-dir` apunta al despliegue correcto.
- Verifica que la conexion de base de datos en `config.toml` es la del despliegue correcto.

## Ejemplo

Si el directorio de ejecucion es `/srv/fileuni`:

```bash
fileuni --runtime-dir /srv/fileuni reset-admin --user admin --password admin888
```
