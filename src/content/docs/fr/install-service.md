---
title: Installer comme service
description: Installer et gérer FileUni comme un service du système d'exploitation.
---

# Installer FileUni comme service

FileUni inclut une gestion de service intégrée pour Windows, macOS et Linux. Le CLI est le point d'entrée faisant autorité pour ces opérations, et le GUI enveloppe les mêmes contrôles de service.

## Commandes de service

Vous pouvez utiliser la sous-commande `service` pour gérer le service FileUni :

```bash
fileuni service <ACTION> [OPTIONS]
```

### Actions supportées

| Action | Description |
|--------|-------------|
| `install` | Installer FileUni comme service système |
| `uninstall` | Supprimer le service du système |
| `start` | Démarrer le service |
| `stop` | Arrêter le service |
| `status` | Vérifier le statut du service |
| `reload` | Recharger la configuration du service |

## Installation rapide

Pour installer FileUni comme service, vous devez indiquer un seul répertoire d'exécution. L'étape d'installation enregistre ce chemin dans la définition du service.

```bash
# Exemple pour Linux/macOS
# Utilisez --runtime-dir pour le répertoire d'exécution unique
sudo ./fileuni --runtime-dir /srv/fileuni service install

# Exemple pour Windows (Exécuter en tant qu'administrateur)
.\fileuni.exe --runtime-dir C:\FileUni\runtime service install
```

> Important : Utilisez toujours un chemin absolu pour `--runtime-dir` lors de l'installation comme service. Cela garantit que le service pourra retrouver correctement ses données après un redémarrage du système.

## Options de service avancées

Le `service install` de FileUni supporte des flags supplémentaires pour un contrôle fin :

- `--service-label <LABEL>` : Changer le nom interne du service (Par défaut : `io.fileuni.server`).
- `--service-user <USER>` : Spécifier quel utilisateur de l'OS doit exécuter le processus (Niveau système uniquement).
- `--service-level <system|user>` : Choisir entre un service système global ou un service par utilisateur.
- `--service-autostart <true|false>` : Activer ou désactiver le démarrage automatique au boot.
- `--service-workdir <DIR>` : Alias de `--runtime-dir`, uniquement pour `service install`.

### Exemple : Label de service personnalisé

```bash
sudo ./fileuni --runtime-dir /srv/fileuni service install --service-label custom.fileuni.node
```

## Dépannage

- Permissions : L'installation de services système nécessite typiquement les privilèges Root (Linux/macOS) ou Administrator (Windows).
- Chemins : `service install` nécessite un chemin `--runtime-dir` valide.
- Journaux : Si le service échoue à démarrer, vérifiez les journaux système comme `journalctl` sur Linux ou l'Observateur d'événements sur Windows.
