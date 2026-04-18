---
title: Démarrage rapide
description: Démarrer le projet FileUni actuel avec le CLI ou l'application de bureau.
order: 2
---

# Démarrage rapide

Ce guide est basé sur la structure actuelle de l'espace de travail et le modèle d'exécution.

## 1. Choisir un point d'entrée d'exécution

FileUni a actuellement deux points d'entrée principaux :

- `fileuni` CLI : utilise pour demarrer le serveur, gerer les services, exporter ou importer des sauvegardes et recuperer l'acces administrateur.
- `fileuni-gui` : un wrapper de bureau Tauri autour de la meme bibliotheque de noyau, avec controle de service, edition de configuration et recuperation du mot de passe administrateur.

Obtenez le paquet approprié sur la [page de téléchargement](https://fileuni.com/fr/download).

- Pour le déploiement serveur, choisissez le paquet CLI.
- Pour l'utilisation locale sur ordinateur, choisissez le paquet GUI.

## 2. Préparer le répertoire d'exécution

Le projet actuel utilise maintenant un seul répertoire d'exécution :

- `-R` / `--runtime-dir` : repertoire d'execution unique pour la configuration, la base de donnees, le cache et les autres fichiers d'execution
- `--runtime-dir` : répertoire d'exécution uniquement pour `service install`

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

Si `{runtime-dir}/config.toml` est manquant, FileUni cree automatiquement une configuration d'exemple au premier demarrage et initialise le repertoire d'execution.

Si la base de donnees ne contient pas encore `yh_users`, le demarrage cree aussi le compte administrateur par defaut `admin/admin888`.

Si la base de donnees contient deja une table utilisateurs, le demarrage laisse les utilisateurs existants inchanges et ne reinitialise pas automatiquement l'acces administrateur.

## 4. Démarrer FileUni

Premier demarrage :

```bash
./fileuni --runtime-dir ./runtime
```

Pour recuperer l'acces administrateur plus tard :

```bash
./fileuni --runtime-dir ./runtime reset-admin --user admin --password admin888
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

- [Fonctionnalités](https://fileuni.com/fr/features/)
- [Accès et opérations sur les fichiers](./file-management)
- [Installer comme service](./install-service)
