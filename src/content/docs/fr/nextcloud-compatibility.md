---
title: Compatibilité Nextcloud
description: Liste de compatibilité pour utiliser FileUni avec l'écosystème des clients Nextcloud.
order: 4
---

# Compatibilité Nextcloud

Cette page explique la cible de compatibilité de FileUni lorsqu'il est utilisé depuis des clients Nextcloud.

En plus de pouvoir fonctionner sur du matériel modeste et de mieux monter en charge sur du matériel puissant, la compatibilité avec les clients Nextcloud est une autre caractéristique importante que FileUni doit afficher dans sa communication publique.

## Objectif de compatibilité

FileUni vise à rester compatible avec les principaux parcours des clients Nextcloud que les utilisateurs attendent lorsqu'ils migrent depuis un environnement Nextcloud.

La cible actuelle se concentre sur :

- La synchronisation de fichiers et l'accès distant via WebDAV
- Les opérations de gestion de fichiers utilisées par les clients desktop et mobile
- Les favoris, les partages, les flux liés aux médias et les interactions de métadonnées courantes
- Des comportements qui conservent les habitudes existantes des utilisateurs de clients Nextcloud

## Portée actuelle

Le dépôt actuel expose déjà les bases nécessaires pour cette direction :

- Support du service WebDAV dans la pile de stockage
- Flux Web UI et API pour parcourir, téléverser, télécharger, renommer, déplacer, copier, supprimer, voir les récents, les favoris et la corbeille
- Prévisualisation des médias et des types de fichiers courants dans le frontend
- Services de protocole modulaires activables selon la taille du déploiement

Ces éléments constituent la base du travail de compatibilité Nextcloud. Le comportement exact côté client dépend toujours de la configuration, des modules activés et de la version précise du client Nextcloud.

## Liste

| Domaine | Cible | Statut |
| --- | --- | --- |
| Accès à l'endpoint WebDAV | Compatible avec les flux de connexion WebDAV des clients Nextcloud | Base disponible |
| Gestion de fichiers | Parcourir, téléverser, télécharger, renommer, déplacer, copier, supprimer | Implémenté dans la plateforme actuelle |
| Favoris | Garder les flux liés aux favoris compatibles | Direction déjà implémentée |
| Partages | Garder les flux liés au partage compatibles | Cible de compatibilité |
| Médias | Garder utilisables les flux de navigation et de prévisualisation des médias | Direction déjà implémentée |
| Chat | Capacité prévue ensuite | Planifié |
| Notes | Capacité prévue ensuite | Planifié |

## Signification des statuts

- Base disponible : le dépôt contient déjà la couche protocolaire ou plateforme nécessaire.
- Implémenté dans la plateforme actuelle : la capacité existe déjà dans FileUni lui-même.
- Direction déjà implémentée : la capacité connexe existe déjà et le travail de compatibilité s'appuie dessus.
- Cible de compatibilité : cela fait partie de la direction produit annoncée, sans signifier que tous les cas limites des clients sont déjà couverts.
- Planifié : périmètre futur, pas fonctionnalité actuelle.

## Recommandation pour la communication externe

- FileUni est une plateforme de fichiers légère et évolutive.
- FileUni est aussi conçu pour rester compatible avec les clients Nextcloud pour la gestion de fichiers, les favoris, les partages, les flux médias et l'accès basé sur WebDAV.
- Chat et Notes font partie de la feuille de route suivante et ne doivent pas être présentés comme déjà livrés.

## Pages liées

- [Fonctionnalités](./features)
- [Accès et opérations sur les fichiers](./file-management)
- [Démarrage rapide](./quickstart)
