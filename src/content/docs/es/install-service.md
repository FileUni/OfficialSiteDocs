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
| `reload` | Recargar configuracion |

## Instalacion rapida

Al instalar como servicio, especifica directorio de configuracion y de datos con rutas absolutas.

```bash
sudo ./fileuni -c /etc/fileuni -A /var/lib/fileuni service install
```

En Windows (como Administrador):

```bash
.\fileuni.exe -c C:\FileUni\config -A C:\FileUni\data service install
```

## Solucion de problemas

- Permisos: normalmente requiere Root/Administrador.
- Rutas: `-c` y `-A` deben ser validas.
- Logs: revisa `journalctl` (Linux) o Event Viewer (Windows).
