---
title: Zugriff und Dateioperationen
description: Wie Sie auf den aktuellen FileUni-Server zugreifen und welche Dateioperationen existieren.
order: 4
---

# Zugriff und Dateioperationen

Diese Seite konzentriert sich auf die Zugriffspfade und Dateioperationen, die aus dem aktuellen Projekt verifiziert werden können.

## Weboberfläche

Das eingebettete Frontend wird bereitgestellt von:

```text
/
```

Die Weboberfläche ist der Haupteinstiegspunkt für Menschen:

- Durchsuchen von Dateien und Verzeichnissen
- Hochladen und Herunterladen von Dateien
- Such- und Vorschau-Flows
- Arbeiten mit aktuellen Elementen, Favoriten, Papierkorb und Freigaben
- Aufrufen von Backend-APIs aus dem Browser-Frontend

## HTTP-API

Der Server stellt REST-Style-Endpunkte bereit unter:

```text
/api/v1
```

Zur API-Inspektion und Client-Generierung stellt das Projekt auch bereit:

```text
/api/v1/openapi.json
```

Dies ist die genaueste öffentliche Beschreibung der aktuell gemounteten API-Oberfläche.

## Protokollzugriff

Je nach Konfiguration kann FileUni auch protokollbasierten Zugriff bereitstellen:

- WebDAV: standardmäßig unter `/@dav` eingehängt (konfigurierbar)
- S3: bereitgestellt auf dem konfigurierten S3-Port
- FTP: bereitgestellt auf dem konfigurierten FTP-Port
- SFTP: bereitgestellt auf dem konfigurierten SFTP-Port

Wenn der Server erfolgreich startet, gibt er die aktive HTTP-Adresse aus und ob S3, FTP und SFTP aktiviert sind.

## Verifizierte Dateioperationen

Die aktuellen VFS- und Frontend-Module enthalten bereits Implementierungen für:

- Verzeichnisse durchsuchen
- Dateien hochladen und temporäre Upload-Behandlung
- Dateien herunterladen
- Verschieben und Kopieren
- Umbenennen
- In Papierkorb löschen und aus Papierkorb wiederherstellen
- Suche
- Favoriten
- Freigabe-Einträge und Freigabe-Filter
- Archiv durchsuchen, komprimieren und extrahieren

## Betriebliche Hinweise

Einige dieser Möglichkeiten sind durch die Konfiguration feature-geblockt. In der Praxis:

- Wenn ein Protokoll in der Konfiguration deaktiviert ist, ist es zur Laufzeit nicht verfügbar.
- Wenn eine optionale Frontend-Funktion ausgeschaltet ist, kann der Eintrag aus der UI verschwinden.
- Build-Modi können ebenfalls beeinflussen, was gebündelt wird.

## Empfohlene Zugriffswahl

Verwenden Sie die Weboberfläche, wenn Sie benötigen:

- Den einfachsten Weg zum Durchsuchen und Verwalten von Dateien
- Vorschau-Flows
- Administrative Operationen, die bereits vom Frontend bereitgestellt werden

Verwenden Sie WebDAV, S3, FTP oder SFTP, wenn Sie benötigen:

- Integration mit vorhandenen Tools
- Laufwerks-Mounting oder Drittanbieter-Dateimanager
- Automatisierte Workflows und Skripte

## Nächste Schritte

- [Schnellstart](./quickstart)
- [Funktionen](https://fileuni.com/de/features/)
- [Als Dienst installieren](./install-service)
