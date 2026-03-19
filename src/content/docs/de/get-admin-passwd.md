---
title: Admin-Passwort zurücksetzen
description: Administrator-Zugriff durch erneutes Aufrufen des Setup-Assistenten für die aktuelle FileUni-Bereitstellung wiederherstellen.
---

# Admin-Passwort zurücksetzen

Wenn Sie das eingebaute Administrator-Passwort verlieren, ist der unterstützte Wiederherstellungspfad nicht mehr ein dediziertes CLI-Reset-Flag.

FileUni behandelt `{config-date}/install.lock` jetzt als Installations-Abschluss-Marker:

- Wenn `install.lock` existiert, startet FileUni normal.
- Wenn `install.lock` fehlt, blockieren sowohl CLI als auch GUI den normalen Start und erzwingen den Setup-Assistenten.
- Das Abschließen des Setup-Assistenten schreibt `install.lock` erneut und ermöglicht dem System, den Start fortzusetzen.

Das bedeutet, dass die Administrator-Passwort-Wiederherstellung jetzt durch erneutes Öffnen des Setup-Assistenten erfolgt.

## Wiederherstellungsschritte

1. Stoppen Sie den laufenden FileUni-Dienst oder die Desktop-Instanz.
2. Lokalisieren Sie Ihr Konfigurationsverzeichnis.
3. Löschen Sie `{config-date}/install.lock`.
4. Starten Sie FileUni erneut über CLI oder GUI.
5. FileUni tritt automatisch in den Setup-Assistenten ein.
6. Setzen Sie im Setup-Assistenten ein neues Administrator-Passwort und schließen Sie das Setup ab.

## Beispiel

Wenn Ihr Konfigurationsverzeichnis `/etc/fileuni` ist, löschen Sie diese Datei:

```bash
rm /etc/fileuni/install.lock
```

Starten Sie dann FileUni neu:

```bash
fileuni -c /etc/fileuni -A /var/lib/fileuni
```

Oder öffnen Sie die Desktop-App erneut und wählen Sie dieselben Laufzeitverzeichnisse.

## Wichtige Hinweise

- Das Löschen von `install.lock` und Neustarten ist effektiv der System-Reset-Einstieg für diese Bereitstellung.
- Dies löscht nicht Ihre vorhandene Datenbank oder App-Daten von selbst, aber es zwingt Sie zurück durch den Initialisierungs-Flow.
- Verwenden Sie dasselbe Konfigurationsverzeichnis und App-Datenverzeichnis wie die Bereitstellung, die Sie wiederherstellen.
- Wenn Sie auf ein anderes Laufzeitverzeichnis-Paar zeigen, initialisieren Sie möglicherweise versehentlich eine andere Bereitstellung.

## Fehlerbehebung

### Setup-Assistent erschien nicht

Überprüfen Sie diese Punkte:

- Sie haben die richtige Datei gelöscht: `{config-date}/install.lock`
- Sie haben dieselbe Bereitstellung neu gestartet
- Die durch `-c/--config-date` und `-A/--AppDataDir` übergebenen Laufzeitverzeichnisse sind korrekt

### Ich kenne mein Konfigurationsverzeichnis nicht

Sie können es wiederherstellen aus:

- Ihrem Service-Installationsbefehl oder Service-Manager
- Ihrer Desktop-App-Laufzeitverzeichnis-Auswahl
- Ihrem Startskript oder Shell-Verlauf

## Verwandte Themen

- [Schnellstart-Anleitung](./quickstart)
- [Als Dienst installieren](./install-service)