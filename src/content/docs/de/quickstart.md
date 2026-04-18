---
title: Schnellstart
description: Starten des aktuellen FileUni-Projekts mit CLI oder Desktop-App.
order: 2
---

# Schnellstart

Diese Anleitung basiert auf dem aktuellen Workspace-Layout und Laufzeitmodell.

## 1. Wählen Sie einen Laufzeit-Einstiegspunkt

FileUni hat derzeit zwei Haupteinstiegspunkte:

- `fileuni` CLI: Wird verwendet, um den Server zu starten, Dienste zu verwalten, Backups zu exportieren oder zu importieren und Administratorzugriff wiederherzustellen.
- `fileuni-gui`: Ein Tauri-Desktop-Wrapper um dieselbe Kernbibliothek mit Dienststeuerung, Konfigurationsbearbeitung und Administrator-Passwort-Wiederherstellung.

Holen Sie sich das entsprechende Paket von der [Download-Seite](https://fileuni.com/de/download).

- Für die Server-Bereitstellung wählen Sie das CLI-Paket.
- Für die lokale Desktop-Nutzung wählen Sie das GUI-Paket.

## 2. Bereiten Sie das Laufzeitverzeichnis vor

Das aktuelle Projekt verwendet jetzt ein einzelnes Laufzeitverzeichnis:

- `-R` / `--runtime-dir`: gemeinsames Laufzeitverzeichnis für Konfiguration, Datenbank, Cache und andere Laufzeitdateien
- `--runtime-dir`: Laufzeitverzeichnis nur für `service install`

Der feste Konfigurationsdateipfad ist:

```text
{runtime-dir}/config.toml
```

Beispiel-Laufzeitlayout:

```text
./runtime
```

Verwenden Sie für die Service-Installation absolute Pfade anstelle von relativen Pfaden.

## 3. Bereiten Sie die von Ihrer Konfiguration referenzierten Dienste vor

FileUni verwendet keine Umgebungsvariablen als Konfigurationsquelle. Laufzeitwerte müssen aus `config.toml` stammen.

Im aktuellen Projekt bedeutet die Bereitstellung normalerweise die Vorbereitung der in dieser Datei referenzierten Backend-Dienste, insbesondere:

- Eine Datenbankverbindung
- Eine KV-Service-Verbindung
- Speicherorte, die von der VFS-Konfiguration benötigt werden

Wenn `{runtime-dir}/config.toml` fehlt, erstellt FileUni beim ersten Start automatisch eine Beispielkonfiguration und initialisiert das Laufzeitverzeichnis.

Wenn die Datenbank noch keine `yh_users`-Tabelle enthält, erstellt der Start außerdem das Standard-Administratorkonto `admin/admin888`.

Wenn die Datenbank bereits eine Benutzertabelle enthält, bleiben bestehende Benutzer unverändert und der Administratorzugriff wird nicht automatisch zurückgesetzt.

## 4. Starten Sie FileUni

Erster Start:

```bash
./fileuni --runtime-dir ./runtime
```

Administratorzugriff später wiederherstellen:

```bash
./fileuni --runtime-dir ./runtime reset-admin --user admin --password admin888
```

Um die Konfiguration ohne Starten des vollständigen Servers zu validieren:

```bash
./fileuni --runtime-dir ./runtime config test
```

Um den Server normal zu starten:

```bash
./fileuni --runtime-dir ./runtime
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

- [Funktionen](https://fileuni.com/de/features/)
- [Zugriff und Dateioperationen](./file-management)
- [Als Dienst installieren](./install-service)
