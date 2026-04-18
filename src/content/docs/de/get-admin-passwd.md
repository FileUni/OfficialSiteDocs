---
title: Admin-Passwort zurücksetzen
description: Administrator-Zugriff mit CLI oder Desktop-Launcher für die aktuelle FileUni-Bereitstellung wiederherstellen.
---

# Admin-Passwort zurücksetzen

Wenn Sie das eingebaute Administrator-Passwort verlieren, verwenden Sie jetzt eine explizite Admin-Reset-Aktion.

## Wiederherstellungsschritte

1. Stoppen Sie den laufenden FileUni-Dienst oder die Desktop-Instanz.
2. Lokalisieren Sie Ihr Laufzeitverzeichnis.
3. Führen Sie einen Admin-Reset per CLI aus oder verwenden Sie die Aktion zum Ändern des Admin-Passworts im GUI-Launcher.
4. Geben Sie den Zielbenutzernamen und das neue Passwort ein.
5. Falls der Benutzername bereits existiert, fordert FileUni eine Bestätigung an, bevor der Benutzer zum Administrator hochgestuft und das Passwort aktualisiert wird.

## Beispiel

Wenn Ihr Laufzeitverzeichnis `/srv/fileuni` ist, können Sie Folgendes ausführen:

```bash
fileuni --runtime-dir /srv/fileuni reset-admin --user admin --password admin888
```

Wenn `admin` nicht existiert, erstellt der Befehl einen Administrator.

Wenn der Benutzername bereits existiert, aber kein Administrator ist, kann der Befehl diesen Benutzer nach Bestätigung hochstufen und das Passwort aktualisieren.

## Wichtige Hinweise

- Verwenden Sie dasselbe Laufzeitverzeichnis wie die Bereitstellung, die Sie wiederherstellen.
- Wenn Sie auf ein anderes Laufzeitverzeichnis zeigen, initialisieren Sie möglicherweise versehentlich eine andere Bereitstellung.

## Fehlerbehebung

### Der Befehl hat nicht die richtige Bereitstellung geändert

Überprüfen Sie diese Punkte:

- Das durch `-R/--runtime-dir` übergebene Laufzeitverzeichnis ist korrekt
- Die Datenbankverbindung in `config.toml` zeigt auf die erwartete Bereitstellung

### Ich kenne mein Laufzeitverzeichnis nicht

Sie können es wiederherstellen aus:

- Ihrem Service-Installationsbefehl oder Service-Manager
- Ihrer Desktop-App-Laufzeitverzeichnis-Auswahl
- Ihrem Startskript oder Shell-Verlauf

## Verwandte Themen

- [Schnellstart-Anleitung](./quickstart)
- [Als Dienst installieren](./install-service)
