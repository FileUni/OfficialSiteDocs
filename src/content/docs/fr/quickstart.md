---
title: Démarrage rapide
description: Démarrer le projet FileUni actuel avec le CLI ou l'application de bureau.
order: 2
---

# Démarrage rapide

Ce guide est basé sur la structure actuelle de l'espace de travail et le modèle d'exécution.

## 1. Choisir un point d'entrée d'exécution

FileUni a actuellement deux points d'entrée principaux :

- `fileuni` CLI : utilisé pour démarrer le serveur, ouvrir l'assistant de configuration si nécessaire, gérer les services et exporter ou importer des sauvegardes.
- `fileuni-gui` : un wrapper de bureau Tauri autour de la même bibliothèque de noyau, avec contrôle de service, édition de configuration et le même comportement de configuration au premier démarrage.

Obtenez le paquet approprié sur la [page de téléchargement](https://fileuni.com/fr/download).

- Pour le déploiement serveur, choisissez le paquet CLI.
- Pour l'utilisation locale sur ordinateur, choisissez le paquet GUI.

## 2. Préparer le répertoire d'exécution

Le projet actuel utilise maintenant un seul répertoire d'exécution :

- `-R` / `--runtime-dir` : répertoire d'exécution unique pour la configuration, le verrou d'installation, la base de données, le cache et les autres fichiers d'exécution
- `--service-workdir` : répertoire d'exécution uniquement pour `service install`

Le chemin du fichier de configuration fixe est :

```text
{runtime-dir}/config.toml
```

Exemple de structure de répertoires d'exécution :

```text
./runtime
```

Pour l'installation de service, utilisez des chemins absolus au lieu de chemins relatifs.

## 3. Préparer les services référencés par votre configuration

FileUni n'utilise pas les variables d'environnement comme source de configuration. Les valeurs d'exécution doivent provenir de `config.toml`.

Dans le projet actuel, le déploiement signifie généralement préparer les services backend référencés par ce fichier, en particulier :

- Une connexion à la base de données
- Une connexion au service KV
- Les emplacements de stockage requis par la configuration VFS

Si `config.toml` ou `install.lock` est manquant, FileUni entrera dans l'assistant de configuration.

L'assistant de configuration est responsable de l'écriture de `config.toml` et `install.lock`, ainsi que de s'assurer que le compte administrateur intégré existe.

Le démarrage normal ne crée pas automatiquement de comptes privilégiés. Si le compte admin est manquant alors que `install.lock` existe, le démarrage sera rejeté.

## 4. Démarrer FileUni

Si `{runtime-dir}/install.lock` est manquant, le CLI et le GUI ouvriront l'assistant de configuration avant le démarrage normal.

Si vous voulez rouvrir l'assistant plus tard, supprimez `{runtime-dir}/install.lock`, puis démarrez FileUni normalement :

```bash
rm -f ./runtime/install.lock
./fileuni --runtime-dir ./runtime
```

Pour valider la configuration sans démarrer le serveur complet :

```bash
./fileuni --runtime-dir ./runtime config test
```

Pour démarrer le serveur normalement :

```bash
./fileuni --runtime-dir ./runtime
```

## 5. Ouvrir l'interface Web

Après un démarrage réussi, FileUni affiche les adresses actives pour :

- Interface Web : `http://<host>:<port>/`
- API HTTP : `http://<host>:<port>`
- OpenAPI JSON : `http://<host>:<port>/api/v1/openapi.json`

L'URL locale de l'interface Web utilisée par défaut par le projet est :

```text
http://localhost:19000/
```

Selon votre configuration, les points de terminaison S3, FTP et SFTP peuvent également être activés.

## Prochaines étapes

- [Fonctionnalités](./features)
- [Accès et opérations sur les fichiers](./file-management)
- [Installer comme service](./install-service)
