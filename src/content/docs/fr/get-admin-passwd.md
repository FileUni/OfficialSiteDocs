---
title: Réinitialiser le mot de passe admin
description: Recuperer l'acces administrateur en rouvrant le centre de parametres pour le deploiement FileUni actuel.
---

# Réinitialiser le mot de passe admin

Si vous perdez le mot de passe administrateur intégré, le chemin de récupération supporté n'est plus un flag de reset CLI dédié.

FileUni traite maintenant `{runtime-dir}/install.lock` comme marqueur de fin d'installation :

- Si `install.lock` existe, FileUni démarre normalement.
- Si `install.lock` est manquant, le CLI et le GUI bloquent le demarrage normal et ouvrent le centre de parametres.
- Terminer le centre de parametres ecrit a nouveau `install.lock` et permet au systeme de continuer le demarrage.

- Cela signifie que la recuperation du mot de passe administrateur se fait maintenant en rouvrant le centre de parametres.

## Étapes de récupération

1. Arrêtez le service FileUni en cours d'exécution ou l'instance de bureau.
2. Localisez votre répertoire d'exécution.
3. Supprimez `{runtime-dir}/install.lock`.
4. Démarrez FileUni à nouveau depuis le CLI ou le GUI.
5. FileUni ouvrira automatiquement le centre de parametres.
6. Dans le centre de parametres, definissez un nouveau mot de passe administrateur et terminez la configuration initiale.

## Exemple

Si votre répertoire d'exécution est `/srv/fileuni`, supprimez ce fichier :

```bash
rm /srv/fileuni/install.lock
```

Puis redémarrez FileUni :

```bash
fileuni --runtime-dir /srv/fileuni
```

Ou rouvrez l'application de bureau et sélectionnez le même répertoire d'exécution.

## Notes importantes

- Supprimer `install.lock` et redémarrer est effectivement le point d'entrée de réinitialisation système pour ce déploiement.
- Cela ne supprime pas votre base de données existante ni vos données par lui-même, mais cela vous force à repasser par le flux d'initialisation.
- Utilisez le même répertoire d'exécution que le déploiement que vous récupérez.
- Si vous pointez vers un autre répertoire d'exécution, vous risquez d'initialiser un déploiement différent par erreur.

## Dépannage

### Le centre de parametres n'est pas apparu

Vérifiez ces éléments :

- Vous avez supprimé le bon fichier : `{runtime-dir}/install.lock`
- Vous avez redémarré le même déploiement
- Le répertoire d'exécution passé via `-R/--runtime-dir` est correct

### Je ne connais pas mon répertoire d'exécution

Vous pouvez le récupérer depuis :

- Votre commande d'installation de service ou gestionnaire de service
- Votre sélection de répertoire d'exécution dans l'application de bureau
- Votre script de démarrage ou historique shell

## Sujets liés

- [Guide de démarrage rapide](./quickstart)
- [Installer comme service](./install-service)
