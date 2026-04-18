---
title: Réinitialiser le mot de passe admin
description: Recuperer l'acces administrateur avec le CLI ou le lanceur de bureau pour le deploiement FileUni actuel.
---

# Réinitialiser le mot de passe admin

Si vous perdez le mot de passe administrateur integre, utilisez maintenant une action explicite de reinitialisation admin.

## Étapes de récupération

1. Arretez le service FileUni en cours d'execution ou l'instance de bureau.
2. Localisez votre repertoire d'execution.
3. Executez une commande de reinitialisation admin, ou ouvrez l'action de changement du mot de passe admin dans le lanceur GUI.
4. Saisissez le nom d'utilisateur cible et le nouveau mot de passe.
5. Si ce nom d'utilisateur existe deja, FileUni demande confirmation avant de promouvoir cet utilisateur en administrateur et de mettre a jour le mot de passe.

## Exemple

Si votre repertoire d'execution est `/srv/fileuni`, vous pouvez executer :

```bash
fileuni --runtime-dir /srv/fileuni reset-admin --user admin --password admin888
```

Si `admin` n'existe pas, la commande cree un administrateur.

Si ce nom d'utilisateur existe deja mais n'est pas administrateur, la commande peut promouvoir cet utilisateur et mettre a jour le mot de passe apres confirmation.

## Notes importantes

- Utilisez le même répertoire d'exécution que le déploiement que vous récupérez.
- Si vous pointez vers un autre répertoire d'exécution, vous risquez d'initialiser un déploiement différent par erreur.

## Dépannage

### La commande n'a pas modifie le bon deploiement

Vérifiez ces éléments :

- Le répertoire d'exécution passé via `-R/--runtime-dir` est correct
- La connexion base de donnees dans `config.toml` cible bien le deploiement attendu

### Je ne connais pas mon répertoire d'exécution

Vous pouvez le récupérer depuis :

- Votre commande d'installation de service ou gestionnaire de service
- Votre sélection de répertoire d'exécution dans l'application de bureau
- Votre script de démarrage ou historique shell

## Sujets liés

- [Guide de démarrage rapide](./quickstart)
- [Installer comme service](./install-service)
