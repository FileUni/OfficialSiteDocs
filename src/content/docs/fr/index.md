---
title: Documentation FileUni
description: Documentation pratique pour le projet FileUni actuel.
order: 0
---

# Documentation FileUni

Ce site suit le projet FileUni actuel au lieu de décrire des plans de produit hypothétiques.

FileUni est une plateforme de fichiers basée sur Rust avec :

- Un noyau partagé utilisé à la fois par le serveur CLI et l'application de bureau Tauri
- Une interface Web servie depuis `/`
- Un document OpenAPI exposé à `/api/v1/openapi.json`
- Des protocoles d'accès optionnels tels que WebDAV, S3, FTP et SFTP
- Des répertoires d'exécution séparés en un répertoire de configuration et un répertoire de données d'application

## Liens rapides

- [Configuration requise](./system-requirements)
- [Démarrage rapide](./quickstart)
- [Télécharger FileUni](https://fileuni.com/fr/download)
- [Fonctionnalités](./features)
- [Compatibilité Nextcloud](./nextcloud-compatibility)
- [Accès et opérations sur les fichiers](./file-management)
- [Installer comme service](./install-service)
- [Réinitialiser le mot de passe admin](./get-admin-passwd)

## Portée actuelle de la documentation

La documentation se concentre actuellement sur ce qui peut déjà être vérifié dans ce dépôt :

- Déploiement local et premier démarrage
- Structure des répertoires d'exécution et exigences d'installation de service
- Interface Web, API et accès basé sur protocole
- Positionnement de compatibilité avec les clients Nextcloud et portée actuelle
- Tâches de maintenance administratives

Les sujets qui ne correspondent pas à l'état actuel du projet ont été supprimés pour l'instant.
