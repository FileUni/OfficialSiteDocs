---
title: Admin-Passwort zurücksetzen
description: Administrator-Zugriff durch erneutes Öffnen der Einstellungszentrale für die aktuelle FileUni-Bereitstellung wiederherstellen.
---

# Admin-Passwort zurücksetzen

Wenn Sie das eingebaute Administrator-Passwort verlieren, ist der unterstützte Wiederherstellungspfad nicht mehr ein dediziertes CLI-Reset-Flag.

FileUni behandelt `{runtime-dir}/install.lock` jetzt als Installations-Abschluss-Marker:

- Wenn `install.lock` existiert, startet FileUni normal.
- Wenn `install.lock` fehlt, blockieren sowohl CLI als auch GUI den normalen Start und öffnen die Einstellungszentrale.
- Das Abschließen der Einstellungszentrale schreibt `install.lock` erneut und ermöglicht dem System, den Start fortzusetzen.

Das bedeutet, dass die Administrator-Passwort-Wiederherstellung jetzt durch erneutes Öffnen der Einstellungszentrale erfolgt.

## Wiederherstellungsschritte

1. Stoppen Sie den laufenden FileUni-Dienst oder die Desktop-Instanz.
2. Lokalisieren Sie Ihr Laufzeitverzeichnis.
3. Löschen Sie `{runtime-dir}/install.lock`.
4. Starten Sie FileUni erneut über CLI oder GUI.
5. FileUni öffnet automatisch die Einstellungszentrale.
6. Setzen Sie in der Einstellungszentrale ein neues Administrator-Passwort und schließen Sie die Ersteinrichtung ab.

## Beispiel

Wenn Ihr Laufzeitverzeichnis `/srv/fileuni` ist, löschen Sie diese Datei:

```bash
rm /srv/fileuni/install.lock
```

Starten Sie dann FileUni neu:

```bash
fileuni --runtime-dir /srv/fileuni
```

Oder öffnen Sie die Desktop-App erneut und wählen Sie dasselbe Laufzeitverzeichnis.

## Wichtige Hinweise

- Das Löschen von `install.lock` und Neustarten ist effektiv der System-Reset-Einstieg für diese Bereitstellung.
- Dies löscht nicht Ihre vorhandene Datenbank oder App-Daten von selbst, aber es zwingt Sie zurück durch den Initialisierungs-Flow.
- Verwenden Sie dasselbe Laufzeitverzeichnis wie die Bereitstellung, die Sie wiederherstellen.
- Wenn Sie auf ein anderes Laufzeitverzeichnis zeigen, initialisieren Sie möglicherweise versehentlich eine andere Bereitstellung.

## Fehlerbehebung

### Einstellungszentrale erschien nicht

Überprüfen Sie diese Punkte:

- Sie haben die richtige Datei gelöscht: `{runtime-dir}/install.lock`
- Sie haben dieselbe Bereitstellung neu gestartet
- Das durch `-R/--runtime-dir` übergebene Laufzeitverzeichnis ist korrekt

### Ich kenne mein Laufzeitverzeichnis nicht

Sie können es wiederherstellen aus:

- Ihrem Service-Installationsbefehl oder Service-Manager
- Ihrer Desktop-App-Laufzeitverzeichnis-Auswahl
- Ihrem Startskript oder Shell-Verlauf

## Verwandte Themen

- [Schnellstart-Anleitung](./quickstart)
- [Als Dienst installieren](./install-service)
