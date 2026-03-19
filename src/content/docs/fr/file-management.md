---
title: Accès et opérations sur les fichiers
description: Comment accéder au serveur FileUni actuel et quelles opérations sur les fichiers existent.
order: 4
---

# Accès et opérations sur les fichiers

Cette page se concentre sur les chemins d'accès et les opérations sur les fichiers qui peuvent être vérifiés à partir du projet actuel.

## Interface Web

Le frontend intégré est servi depuis :

```text
/
```

L'interface Web est le point d'entrée principal pour les humains :

- Parcourir les fichiers et répertoires
- Télécharger et téléverser des fichiers
- Flux de recherche et de prévisualisation
- Travailler avec les éléments récents, favoris, corbeille et partages
- Appeler les API backend depuis le frontend du navigateur

## API HTTP

Le serveur expose des points de terminaison de style REST sous :

```text
/api/v1
```

Pour l'inspection d'API et la génération de clients, le projet expose également :

```text
/api/v1/openapi.json
```

C'est la description publique la plus précise de la surface API actuellement montée.

## Accès par protocole

Selon la configuration, FileUni peut également exposer un accès basé sur protocole :

- WebDAV : monté sous `/@dav` par défaut (configurable)
- S3 : servi sur le port S3 configuré
- FTP : servi sur le port FTP configuré
- SFTP : servi sur le port SFTP configuré

Lorsque le serveur démarre avec succès, il affiche l'adresse HTTP active et indique si S3, FTP et SFTP sont activés.

## Opérations sur les fichiers vérifiées

Les modules VFS et frontend actuels incluent déjà des implémentations pour :

- Parcourir les répertoires
- Téléverser des fichiers et gestion des téléversements temporaires
- Télécharger des fichiers
- Déplacer et copier
- Renommer
- Supprimer vers la corbeille et restaurer depuis la corbeille
- Rechercher
- Favoris
- Enregistrements de partage et filtres de partage
- Parcourir les archives, compresser et extraire

## Notes opérationnelles

Certaines de ces capacités sont contrôlées par la configuration. En pratique :

- Si un protocole est désactivé dans la configuration, il ne sera pas disponible à l'exécution.
- Si une capacité frontend optionnelle est désactivée, l'entrée peut disparaître de l'interface.
- Les modes de build peuvent également affecter ce qui est inclus.

## Choix d'accès recommandés

Utilisez l'interface Web quand vous avez besoin de :

- La façon la plus simple de parcourir et gérer les fichiers
- Flux de prévisualisation
- Opérations administratives déjà exposées par le frontend

Utilisez WebDAV, S3, FTP ou SFTP quand vous avez besoin de :

- Intégration avec des outils existants
- Montage de lecteurs ou gestionnaires de fichiers tiers
- Workflows automatisés et scripts

## Prochaines étapes

- [Démarrage rapide](./quickstart)
- [Fonctionnalités](./features)
- [Installer comme service](./install-service)