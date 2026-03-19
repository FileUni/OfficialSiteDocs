---
title: Réinitialiser le mot de passe admin
description: Récupérer l'accès administrateur en réentrant dans l'assistant de configuration pour le déploiement FileUni actuel.
---

# Réinitialiser le mot de passe admin

Si vous perdez le mot de passe administrateur intégré, le chemin de récupération supporté n'est plus un flag de reset CLI dédié.

FileUni traite maintenant `{config-date}/install.lock` comme marqueur de fin d'installation :

- Si `install.lock` existe, FileUni démarre normalement.
- Si `install.lock` est manquant, le CLI et le GUI bloquent le démarrage normal et forcent l'assistant de configuration.
- Terminer l'assistant de configuration écrit à nouveau `install.lock` et permet au système de continuer le démarrage.

Cela signifie que la récupération du mot de passe administrateur se fait maintenant en rouvrant l'assistant de configuration.

## Étapes de récupération

1. Arrêtez le service FileUni en cours d'exécution ou l'instance de bureau.
2. Localisez votre répertoire de configuration.
3. Supprimez `{config-date}/install.lock`.
4. Démarrez FileUni à nouveau depuis le CLI ou le GUI.
5. FileUni entrera automatiquement dans l'assistant de configuration.
6. Dans l'assistant de configuration, définissez un nouveau mot de passe administrateur et terminez la configuration.

## Exemple

Si votre répertoire de configuration est `/etc/fileuni`, supprimez ce fichier :

```bash
rm /etc/fileuni/install.lock
```

Puis redémarrez FileUni :

```bash
fileuni -c /etc/fileuni -A /var/lib/fileuni
```

Ou rouvrez l'application de bureau et sélectionnez les mêmes répertoires d'exécution.

## Notes importantes

- Supprimer `install.lock` et redémarrer est effectivement le point d'entrée de réinitialisation système pour ce déploiement.
- Cela ne supprime pas votre base de données existante ou les données d'application par lui-même, mais il vous force à repasser par le flux d'initialisation.
- Utilisez le même répertoire de configuration et répertoire de données d'application que le déploiement que vous récupérez.
- Si vous pointez vers une paire de répertoires d'exécution différente, vous risquez d'initialiser un déploiement différent par erreur.

## Dépannage

### L'assistant de configuration n'est pas apparu

Vérifiez ces éléments :

- Vous avez supprimé le bon fichier : `{config-date}/install.lock`
- Vous avez redémarré le même déploiement
- Les répertoires d'exécution passés via `-c/--config-date` et `-A/--AppDataDir` sont corrects

### Je ne connais pas mon répertoire de configuration

Vous pouvez le récupérer depuis :

- Votre commande d'installation de service ou gestionnaire de service
- Votre sélection de répertoire d'exécution dans l'application de bureau
- Votre script de démarrage ou historique shell

## Sujets liés

- [Guide de démarrage rapide](./quickstart)
- [Installer comme service](./install-service)