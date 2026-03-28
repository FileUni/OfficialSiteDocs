---
title: Instalar como servicio
description: Instalar y administrar FileUni como servicio del sistema.
---

# Instalar FileUni como servicio

FileUni incluye gestion de servicios para Windows, macOS y Linux. La CLI es la entrada autoritativa y la GUI envuelve los mismos controles.

## Comandos de servicio

Usa el subcomando `service`:

```bash
fileuni service <ACCION> [OPCIONES]
```

### Acciones soportadas

| Accion | Descripcion |
|--------|-------------|
| `install` | Instalar como servicio |
| `uninstall` | Desinstalar |
| `start` | Iniciar |
| `stop` | Detener |
| `status` | Estado |
| `restart` | Reiniciar el servicio con stop + start |

## Instalacion rapida

Al instalar como servicio, especifica un unico directorio de ejecucion con una ruta absoluta.

```bash
sudo ./fileuni service install --runtime-dir /srv/fileuni
```

En Windows (como Administrador):

```bash
.\fileuni.exe service install --runtime-dir C:\FileUni\runtime
```

## Solucion de problemas

- Permisos: normalmente requiere Root/Administrador.
- Rutas: `service install` requiere un `--runtime-dir` valido.
- Logs: revisa `journalctl` (Linux) o Event Viewer (Windows).
