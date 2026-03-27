---
title: Démarrage rapide
description: Démarrer le projet FileUni actuel avec le CLI ou l'application de bureau.
order: 2
---

# Démarrage rapide

Ce guide est basé sur la structure actuelle de l'espace de travail et le modèle d'exécution.

## 1. Choisir un point d'entrée d'exécution

FileUni a actuellement deux points d'entrée principaux :

- `fileuni` CLI : utilisé pour démarrer le serveur, exécuter le mode de configuration, gérer les services et exporter ou importer des sauvegardes.
- `fileuni-gui` : un wrapper de bureau Tauri autour de la même bibliothèque de noyau, avec contrôle de service, édition de configuration et le même comportement de configuration au premier démarrage.

Obtenez le paquet approprié sur la [page de téléchargement](https://fileuni.com/fr/download).

- Pour le déploiement serveur, choisissez le paquet CLI.
- Pour l'utilisation locale sur ordinateur, choisissez le paquet GUI.

## 2. Préparer les répertoires d'exécution

Le projet actuel utilise un modèle d'exécution à deux répertoires :

- `-c` / `--config-date` : répertoire de configuration
- `-A` / `--AppDataDir` : répertoire de données d'application

Le chemin du fichier de configuration fixe est :

```text
{config-dir}/config.toml
```

Exemple de structure de répertoires d'exécution :

```text
./config
./appdata
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

Si `{config-dir}/install.lock` est manquant, le CLI et le GUI ouvriront l'assistant de configuration avant le démarrage normal.

Si vous voulez rouvrir l'assistant plus tard, supprimez `{config-dir}/install.lock`, puis démarrez FileUni normalement :

```bash
rm -f ./config/install.lock
./fileuni -c ./config -A ./appdata
```

Pour valider la configuration sans démarrer le serveur complet :

```bash
./fileuni --configtest -c ./config -A ./appdata
```

Pour démarrer le serveur normalement :

```bash
./fileuni -c ./config -A ./appdata
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
