---
title: Schnellstart
description: Starten des aktuellen FileUni-Projekts mit CLI oder Desktop-App.
order: 2
---

# Schnellstart

Diese Anleitung basiert auf dem aktuellen Workspace-Layout und Laufzeitmodell.

## 1. Wählen Sie einen Laufzeit-Einstiegspunkt

FileUni hat derzeit zwei Haupteinstiegspunkte:

- `fileuni` CLI: Wird verwendet, um den Server zu starten, den Setup-Modus auszuführen, Dienste zu verwalten und Backups zu exportieren oder zu importieren.
- `fileuni-gui`: Ein Tauri-Desktop-Wrapper um dieselbe Kernbibliothek, mit Dienststeuerung, Konfigurationsbearbeitung und demselben Erst-Setup-Verhalten.

Holen Sie sich das entsprechende Paket von der [Download-Seite](https://fileuni.com/de/download).

- Für die Server-Bereitstellung wählen Sie das CLI-Paket.
- Für die lokale Desktop-Nutzung wählen Sie das GUI-Paket.

## 2. Bereiten Sie Laufzeitverzeichnisse vor

Das aktuelle Projekt verwendet ein Zwei-Verzeichnis-Laufzeitmodell:

- `-c` / `--config-date`: Konfigurationsverzeichnis
- `-A` / `--AppDataDir`: Anwendungsdatenverzeichnis

Der feste Konfigurationsdateipfad ist:

```text
{config-dir}/config.toml
```

Beispiel-Laufzeitlayout:

```text
./config
./appdata
```

Verwenden Sie für die Service-Installation absolute Pfade anstelle von relativen Pfaden.

## 3. Bereiten Sie die von Ihrer Konfiguration referenzierten Dienste vor

FileUni verwendet keine Umgebungsvariablen als Konfigurationsquelle. Laufzeitwerte müssen aus `config.toml` stammen.

Im aktuellen Projekt bedeutet die Bereitstellung normalerweise die Vorbereitung der in dieser Datei referenzierten Backend-Dienste, insbesondere:

- Eine Datenbankverbindung
- Eine KV-Service-Verbindung
- Speicherorte, die von der VFS-Konfiguration benötigt werden

Wenn `config.toml` oder `install.lock` fehlt, tritt FileUni in den Setup-Assistenten ein.

Der Setup-Assistent ist verantwortlich für das Schreiben von `config.toml` und `install.lock` sowie für das Sicherstellen, dass das eingebaute Administrator-Konto existiert.

Der normale Start erstellt keine privilegierten Konten automatisch. Wenn das Admin-Konto fehlt, während `install.lock` existiert, wird der Start abgelehnt.

## 4. Führen Sie den Setup-Modus aus oder starten Sie den Server

Wenn `{config-dir}/install.lock` fehlt, erzwingen sowohl CLI als auch GUI den Setup-Assistenten vor dem normalen Start.

Um explizit in den Setup-Modus zu gelangen:

```bash
./fileuni --setup -c ./config -A ./appdata
```

Um die Konfiguration ohne Starten des vollständigen Servers zu validieren:

```bash
./fileuni --configtest -c ./config -A ./appdata
```

Um den Server normal zu starten:

```bash
./fileuni -c ./config -A ./appdata
```

## 5. Öffnen Sie die Weboberfläche

Nach einem erfolgreichen Start gibt FileUni die aktiven Adressen aus für:

- Weboberfläche: `http://<host>:<port>/`
- HTTP-API: `http://<host>:<port>`
- OpenAPI JSON: `http://<host>:<port>/api/v1/openapi.json`

Die standardmäßige lokale URL der Weboberfläche im Projekt ist:

```text
http://localhost:19000/
```

Je nach Ihrer Konfiguration können auch S3-, FTP- und SFTP-Endpunkte aktiviert sein.

## Nächste Schritte

- [Funktionen](./features)
- [Zugriff und Dateioperationen](./file-management)
- [Als Dienst installieren](./install-service)
