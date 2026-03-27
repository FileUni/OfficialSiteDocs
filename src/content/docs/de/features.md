---
title: Funktionen
description: Verifizierte Funktionen in der aktuellen FileUni-Codebasis.
order: 3
---

# Funktionen

Diese Seite listet Funktionen auf, die aus dem aktuellen Repository und den Laufzeit-Einstiegspunkten verifiziert werden können.

## Gemeinsamer Kern für CLI und GUI

Der CLI-Server und die Tauri-Desktop-App verwenden dieselbe Rust-Kernbibliothek:

- Das CLI ist der Haupteinstiegspunkt des Servers.
- Die GUI umschließt dasselbe Backend mit Desktop-nativen Dienststeuerelementen, Konfigurationsbearbeitung und Protokollanzeige.
- Das Frontend für den Server ist statisch eingebettet und wird von `/` bereitgestellt.

## Mehrere Zugriffspfade

Das aktuelle Projekt bietet mehrere Möglichkeiten, auf dieselbe Dateiplattform zuzugreifen:

- Weboberfläche unter `/`
- HTTP-API unter `/api/v1/...`
- OpenAPI-Dokument unter `/api/v1/openapi.json`
- WebDAV, standardmäßig unter `/@dav` eingehängt (konfigurierbar)
- S3-, FTP- und SFTP-Dienste, wenn in der Konfiguration aktiviert

## Dateiplattform-Funktionen

Der Workspace enthält einen dedizierten VFS-Speicher-Hub und Frontend-Module für:

- Verzeichnis-Browsing, Hochladen, Herunterladen, Verschieben, Kopieren, Umbenennen und Löschen
- Suche, Verlauf, Favoriten, Papierkorb und Freigaben
- Dateivorschau-Flows für gängige Dateitypen in der Weboberfläche
- Archiv-bezogene Operationen wie Browsing, Komprimierung und Extraktion

Die genaue Verfügbarkeit einiger Funktionen hängt von Ihrer Konfiguration und dem gewählten Build-Modus ab.

## Bereitstellungsmodell

Das aktuelle Laufzeitmodell ist absichtlich explizit:

- Die Konfiguration stammt aus `config.toml`, nicht aus Umgebungsvariablen
- Laufzeitverzeichnisse sind in Konfigurations- und App-Datenpfade unterteilt
- Fehlende erforderliche Konfigurationsfelder führen zu einer Ablehnung des Starts, anstatt stillschweigend auf Standardwerte zurückzufallen
- Die Service-Installation speichert die gewählten Laufzeitverzeichnisse

## Betrieb und Wartung

Aktuelle eingebaute Wartungsaktionen umfassen:

- Setup-Assistent für die Erstkonfiguration
- Konfigurationsvalidierung mit `--configtest`
- System-Service Installation, Deinstallation, Start, Stopp, Status und Neuladen
- Admin-Passwort-Wiederherstellung durch erneutes Öffnen des Setup-Assistenten
- Backup-Export und -Import über die Kommandozeile

## Leichtgewichtige Positionierung

FileUni ist weiterhin als leichtgewichtige Dateiplattform positioniert. Die öffentliche Site beschreibt derzeit Bereitstellungen mit nur 32 MB RAM, und der Workspace selbst ist so strukturiert, dass Dienste selektiv aktiviert werden, anstatt jedes Subsystem in jeder Installation zu erzwingen.

## Nächste Schritte

- [Schnellstart](./quickstart)
- [Zugriff und Dateioperationen](./file-management)
- [Als Dienst installieren](./install-service)
