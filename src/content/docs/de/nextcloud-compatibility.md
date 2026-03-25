---
title: Nextcloud-Kompatibilität
description: Kompatibilitätsübersicht für die Nutzung von FileUni mit dem Nextcloud-Client-Ökosystem.
order: 4
---

# Nextcloud-Kompatibilität

Diese Seite beschreibt das Kompatibilitätsziel von FileUni bei der Nutzung über Nextcloud-Clients.

Neben dem Betrieb auf leistungsschwacher Hardware und besserer Skalierung auf leistungsstarker Hardware ist die Kompatibilität mit Nextcloud-Clients ein weiteres wichtiges Merkmal, das FileUni nach außen klar kommunizieren soll.

## Kompatibilitätsziel

FileUni will mit den wichtigsten Nextcloud-Client-Abläufen kompatibel bleiben, die Nutzer beim Wechsel aus einer Nextcloud-Umgebung erwarten.

Der aktuelle Fokus liegt auf:

- Dateisynchronisation und Fernzugriff über WebDAV
- Dateiverwaltungsoperationen in Desktop- und Mobil-Clients
- Favoriten, Freigaben, medienbezogenen Abläufen und typischen Metadaten-Interaktionen
- Nutzungsmustern, die bestehende Nextcloud-Client-Gewohnheiten erhalten

## Aktueller Umfang

Das aktuelle Repository enthält bereits die Bausteine für diese Richtung:

- WebDAV-Service im Storage-Stack
- Web-UI- und API-Flows für Browsing, Upload, Download, Umbenennen, Verschieben, Kopieren, Löschen, Zuletzt verwendet, Favoriten und Papierkorb
- Medienvorschau und Vorschau gängiger Dateitypen im Frontend
- Modulare Protokolldienste, die je nach Deployment-Größe aktiviert werden können

Diese Teile bilden die Grundlage für die Nextcloud-Kompatibilität. Das genaue Client-Verhalten hängt weiterhin von der Konfiguration, den aktivierten Modulen und der jeweiligen Nextcloud-Client-Version ab.

## Checkliste

| Bereich | Ziel | Status |
| --- | --- | --- |
| WebDAV-Endpunktzugriff | Kompatibel mit Nextcloud-Client-Verbindungen über WebDAV | Grundlage vorhanden |
| Dateiverwaltung | Durchsuchen, Hochladen, Herunterladen, Umbenennen, Verschieben, Kopieren, Löschen | In aktueller Plattform implementiert |
| Favoriten | Favoriten-bezogene Abläufe kompatibel halten | Richtung bereits vorhanden |
| Freigaben | Freigabe-bezogene Abläufe kompatibel halten | Kompatibilitätsziel |
| Medien | Medien-Browsing und Vorschau nutzbar halten | Richtung bereits vorhanden |
| Chat | Geplante Folgefunktion | Geplant |
| Notes | Geplante Folgefunktion | Geplant |

## Bedeutung der Statusangaben

- Grundlage vorhanden: das Repository enthält bereits die nötige Protokoll- oder Plattformschicht.
- In aktueller Plattform implementiert: die Fähigkeit existiert bereits in FileUni selbst.
- Richtung bereits vorhanden: die verwandte Fähigkeit existiert bereits und die Kompatibilitätsarbeit baut darauf auf.
- Kompatibilitätsziel: Teil der erklärten Produktausrichtung, aber keine Zusage, dass bereits jeder Randfall aller Clients vollständig abgedeckt ist.
- Geplant: zukünftiger Umfang, keine aktuelle Funktion.

## Empfehlung für externe Darstellung

- FileUni ist eine leichtgewichtige und skalierbare Dateiplattform.
- FileUni ist zugleich darauf ausgelegt, mit Nextcloud-Clients für Dateiverwaltung, Favoriten, Freigaben, Medienflüsse und WebDAV-basierten Zugriff kompatibel zu bleiben.
- Chat und Notes gehören zur späteren Roadmap und sollten nicht als bereits veröffentlichte Funktionen dargestellt werden.

## Verwandte Seiten

- [Funktionen](./features)
- [Zugriff und Dateioperationen](./file-management)
- [Schnellstart](./quickstart)
