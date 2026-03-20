---
title: FileUni Dokumentation
description: Praktische Dokumentation für das aktuelle FileUni-Projekt.
order: 0
---

# FileUni Dokumentation

Diese Seite verfolgt das aktuelle FileUni-Projekt anstatt hypothetische Produktpläne zu beschreiben.

FileUni ist eine Rust-basierte Dateiplattform mit:

- Einem gemeinsamen Kern, der sowohl vom CLI-Server als auch von der Tauri-Desktop-App verwendet wird
- Einer Weboberfläche, die von `/` bereitgestellt wird
- Einem OpenAPI-Dokument, das unter `/api/v1/openapi.json` verfügbar ist
- Optionalen Zugriffsprotokollen wie WebDAV, S3, FTP und SFTP
- Laufzeitverzeichnissen, die in ein Konfigurationsverzeichnis und ein App-Datenverzeichnis unterteilt sind

## Schnellzugriff

- [Systemanforderungen](./system-requirements)
- [Schnellstart](./quickstart)
- [FileUni herunterladen](https://fileuni.com/de/download)
- [Funktionen](./features)
- [Zugriff und Dateioperationen](./file-management)
- [Als Dienst installieren](./install-service)
- [Admin-Passwort zurücksetzen](./get-admin-passwd)

## Aktueller Dokumentationsumfang

Die Dokumentation konzentriert sich derzeit auf das, was in diesem Repository bereits überprüft werden kann:

- Lokale Bereitstellung und erster Start
- Laufzeitverzeichnis-Layout und Service-Installationsanforderungen
- Weboberfläche, API und protokollbasierter Zugriff
- Administrations- und Wartungsaufgaben

Themen, die nicht mit dem aktuellen Projektstatus übereinstimmen, wurden vorerst entfernt.
