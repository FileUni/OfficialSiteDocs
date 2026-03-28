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
| `restart` | Dienst per Stop + Start neu starten |

## Schnellinstallation

Um FileUni als Dienst zu installieren, sollten Sie ein einzelnes Laufzeitverzeichnis angeben. Der Installationsschritt speichert diesen Pfad in der Dienstdefinition.

```bash
# Beispiel für Linux/macOS
# Verwenden Sie --runtime-dir für das gemeinsame Laufzeitverzeichnis
sudo ./fileuni service install --runtime-dir /srv/fileuni

# Beispiel für Windows (Als Administrator ausführen)
.\fileuni.exe service install --runtime-dir C:\FileUni\runtime
```

> Wichtig: Verwenden Sie bei der Installation als Dienst immer einen absoluten Pfad für `--runtime-dir`. So kann der Dienst seine Daten nach einem Neustart korrekt wiederfinden.

## Erweiterte Dienstoptionen

FileUnis `service install` unterstützt zusätzliche Flags für feinkörnige Kontrolle:

- `--service-label <LABEL>`: Den internen Dienstnamen ändern (Standard: `io.fileuni.server`).
- `--service-user <USER>`: Angeben, welcher OS-Benutzer den Prozess ausführen soll (Nur System-Ebene).
- `--service-level <system|user>`: Wählen zwischen einem globalen Systemdienst oder einem Benutzerdienst.
- `--service-autostart <true|false>`: Automatischen Start beim Booten aktivieren oder deaktivieren.
- `--runtime-dir <DIR>`: Laufzeitverzeichnis nur fur `service install`.

### Beispiel: Benutzerdefiniertes Dienst-Label

```bash
sudo ./fileuni service install --runtime-dir /srv/fileuni --service-label custom.fileuni.node
```

## Fehlerbehebung

- Berechtigungen: Die Installation von System-Diensten erfordert typischerweise Root- (Linux/macOS) oder Administrator- (Windows) Rechte.
- Pfade: `service install` erfordert einen gultigen `--runtime-dir` Pfad.
- Protokolle: Wenn der Dienst nicht startet, überprüfen Sie Systemprotokolle wie `journalctl` unter Linux oder die Ereignisanzeige unter Windows.
