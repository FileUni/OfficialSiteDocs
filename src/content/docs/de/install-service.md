---
title: Als Dienst installieren
description: FileUni als Betriebssystem-Dienst installieren und verwalten.
---

# FileUni als Dienst installieren

FileUni enthält eingebaute Dienstverwaltung für Windows, macOS und Linux. Das CLI ist der autoritative Einstiegspunkt für diese Operationen, und die GUI umschließt dieselben Dienststeuerelemente.

## Dienstbefehle

Sie können den `service`-Unterbefehl verwenden, um den FileUni-Dienst zu verwalten:

```bash
fileuni service <ACTION> [OPTIONS]
```

### Unterstützte Aktionen

| Aktion | Beschreibung |
|--------|-------------|
| `install` | FileUni als Systemdienst installieren |
| `uninstall` | Den Dienst vom System entfernen |
| `start` | Den Dienst starten |
| `stop` | Den Dienst stoppen |
| `status` | Dienststatus überprüfen |
| `reload` | Dienstkonfiguration neu laden |

## Schnellinstallation

Um FileUni als Dienst zu installieren, müssen Sie beide Laufzeitverzeichnisse explizit angeben. Der Installationsschritt speichert diese Pfade in der Dienstdefinition.

```bash
# Beispiel für Linux/macOS
# Verwenden Sie -c für das Konfigurationsverzeichnis und -A für das App-Datenverzeichnis
sudo ./fileuni -c /etc/fileuni -A /var/lib/fileuni service install

# Beispiel für Windows (Als Administrator ausführen)
.\fileuni.exe -c C:\FileUni\config -A C:\FileUni\data service install
```

> Wichtig: Verwenden Sie immer absolute Pfade für `-c` und `-A` bei der Installation als Dienst. Dies stellt sicher, dass der Dienst seine Daten beim Systemneustart korrekt findet.

## Erweiterte Dienstoptionen

FileUnis `service install` unterstützt zusätzliche Flags für feinkörnige Kontrolle:

- `--service-label <LABEL>`: Den internen Dienstnamen ändern (Standard: `io.fileuni.server`).
- `--service-user <USER>`: Angeben, welcher OS-Benutzer den Prozess ausführen soll (Nur System-Ebene).
- `--service-level <system|user>`: Wählen zwischen einem globalen Systemdienst oder einem Benutzerdienst.
- `--service-autostart <true|false>`: Automatischen Start beim Booten aktivieren oder deaktivieren.
- `--service-workdir <DIR>`: Ein benutzerdefiniertes Arbeitsverzeichnis setzen.

### Beispiel: Benutzerdefiniertes Dienst-Label

```bash
sudo ./fileuni -c /etc/fileuni -A /data service install --service-label custom.fileuni.node
```

## Fehlerbehebung

- Berechtigungen: Die Installation von System-Diensten erfordert typischerweise Root- (Linux/macOS) oder Administrator- (Windows) Rechte.
- Pfade: `service install` erfordert gültige `-c/--config-date` und `-A/--AppDataDir` Pfade.
- Protokolle: Wenn der Dienst nicht startet, überprüfen Sie Systemprotokolle wie `journalctl` unter Linux oder die Ereignisanzeige unter Windows.