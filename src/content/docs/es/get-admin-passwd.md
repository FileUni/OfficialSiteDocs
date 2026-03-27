---
title: Restablecer contrasena de admin
description: Recuperar acceso de administrador reabriendo el asistente de configuracion.
---

# Restablecer contrasena de admin

Si pierdes la contrasena del administrador integrado, la ruta soportada es reabrir el asistente de configuracion.

FileUni usa `{runtime-dir}/install.lock` como marcador de instalacion completa:

- Si existe `install.lock`, FileUni inicia normalmente.
- Si falta `install.lock`, CLI y GUI bloquean el arranque normal y fuerzan el asistente.

## Pasos de recuperacion

1. Deten la instancia/servicio de FileUni.
2. Localiza el directorio de ejecucion.
3. Borra `{runtime-dir}/install.lock`.
4. Inicia FileUni otra vez.
5. En el asistente, define una nueva contrasena de admin y finaliza.

## Ejemplo

Si el directorio de ejecucion es `/srv/fileuni`:

```bash
rm /srv/fileuni/install.lock
```

Luego reinicia:

```bash
fileuni --runtime-dir /srv/fileuni
```
