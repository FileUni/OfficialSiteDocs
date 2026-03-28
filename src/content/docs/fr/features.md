---
title: Fonctionnalités
description: Fonctionnalités vérifiées dans la base de code FileUni actuelle.
order: 3
---

# Fonctionnalités

Cette page liste les fonctionnalités qui peuvent être vérifiées à partir du dépôt actuel et des points d'entrée d'exécution.

## Noyau partagé pour CLI et GUI

Le serveur CLI et l'application de bureau Tauri utilisent la même bibliothèque de noyau Rust :

- Le CLI est le point d'entrée principal du serveur.
- Le GUI enveloppe le même backend avec des contrôles de service natifs au bureau, l'édition de configuration et la visualisation des journaux.
- Le frontend pour le serveur est intégré statiquement et servi depuis `/`.

## Multiples chemins d'accès

Le projet actuel expose plusieurs façons d'atteindre la même plateforme de fichiers :

- Interface Web à `/`
- API HTTP à `/api/v1/...`
- Document OpenAPI à `/api/v1/openapi.json`
- WebDAV monté à `/@dav` par défaut (configurable)
- Services S3, FTP et SFTP lorsqu'ils sont activés dans la configuration

## Capacités de la plateforme de fichiers

L'espace de travail contient un hub de stockage VFS dédié et des modules frontend pour :

- Navigation dans les répertoires, téléchargement, téléversement, déplacement, copie, renommage et suppression
- Recherche, historique récent, favoris, corbeille et partages
- Flux de prévisualisation de fichiers pour les types de fichiers courants dans l'interface Web
- Opérations liées aux archives telles que navigation, compression et extraction

La disponibilité exacte de certaines fonctionnalités dépend de votre configuration et du mode de build choisi.

## Modèle de déploiement

Le modèle d'exécution actuel est intentionnellement explicite :

- La configuration provient de `config.toml`, pas des variables d'environnement
- L'état d'exécution repose sur un seul répertoire qui regroupe configuration et données
- Les champs de configuration obligatoires manquants rejettent le démarrage au lieu de revenir silencieusement aux valeurs par défaut
- L'installation de service persiste les répertoires d'exécution choisis

## Opérations et maintenance

Les actions de maintenance intégrées actuelles incluent :

- Mode de configuration pour le premier démarrage
- Validation de configuration avec `config test`
- Installation, désinstallation, démarrage, arrêt, statut et rechargement du service système
- Recuperation du mot de passe admin en rouvrant le centre de parametres
- Export et import de sauvegarde depuis la ligne de commande

## Positionnement léger

FileUni est toujours positionné comme une plateforme de fichiers légère. Le site public décrit actuellement des déploiements avec seulement 32 Mo de RAM, et l'espace de travail lui-même est structuré autour de l'activation sélective des services au lieu de forcer chaque sous-système dans chaque installation.

## Prochaines étapes

- [Démarrage rapide](./quickstart)
- [Accès et opérations sur les fichiers](./file-management)
- [Installer comme service](./install-service)
