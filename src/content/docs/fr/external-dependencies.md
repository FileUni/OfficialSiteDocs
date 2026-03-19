---
title: Dépendances externes
description: Exécutables et services externes optionnels utilisés par FileUni, quand les installer et à quelles clés de configuration ils correspondent.
order: 8
---

# Dépendances externes

FileUni utilise un petit ensemble d'exécutables externes pour les fonctionnalités de prévisualisation/vignette/compression, ainsi que des services KV et SQL optionnels pour les déploiements en production. Cette page explique pourquoi ces dépendances existent, quand vous en avez besoin, comment les installer et quels éléments de configuration doivent être mis à jour par la suite.

## 1. Exécutables externes

Ces outils activent les fonctionnalités de prévisualisation, vignette et compression. Si vous n'avez pas besoin d'une fonctionnalité, vous pouvez sauter l'outil correspondant, mais assurez-vous que les éléments de configuration associés sont ajustés en conséquence.

- 7-Zip (`7z` / `7z-full`)
  - Objectif : Formats de haute compression et compression/décompression multi-thread.
  - Nécessaire quand : Vous souhaitez le support du format 7z ou une compression accélérée au-delà du ZIP/TAR natif.
- libvips
  - Objectif : Rendu rapide de vignettes d'images/PDF.
  - Nécessaire quand : Vous activez les vignettes d'images ou PDF (moteur préféré).
- ImageMagick
  - Objectif : Rendu de vignettes de secours et génération de vignettes de texte.
  - Nécessaire quand : Vous activez les vignettes de texte ou souhaitez un fallback pour les vignettes PDF/images.
- FFmpeg
  - Objectif : Vignettes vidéo (extraction de frames) et métadonnées vidéo.
  - Nécessaire quand : Vous activez les vignettes vidéo.
- LibreOffice (`soffice`)
  - Objectif : Vignettes de documents Office (conversion en PDF, puis vignettisation).
  - Nécessaire quand : Vous activez les vignettes de documents Office.
- Chaîne d'outils LaTeX (`latexmk` + `xelatex`)
  - Objectif : Prévisualisation LaTeX et vignettes LaTeX (compilation en PDF).
  - Nécessaire quand : Vous activez la prévisualisation LaTeX ou les vignettes LaTeX.

## 2. Services externes optionnels (KV et SQL)

Ces services sont optionnels et sélectionnés par configuration. Ils ne sont pas inclus dans l'image Docker et doivent être déployés séparément si nécessaire.

- KeyDB / Redis / Valkey
  - Objectif : Cache KV distribué et coordination.
  - Nécessaire quand : Vous choisissez un type de cache backend KV pour la production ou les déploiements multi-instances.
- PostgreSQL (pgsql)
  - Objectif : Base de données SQL primaire pour la production.
  - Nécessaire quand : Vous choisissez `postgres`/`pgsql` comme type de base de données.
- SQLite
  - Objectif : Base de données SQL intégrée pour nœuds uniques ou environnements à faibles ressources.
  - Nécessaire quand : Vous choisissez `sqlite` comme type de base de données.

## 3. Politique de packaging Docker

L'image Docker par défaut inclut uniquement les exécutables légers requis pour prévisualisation/vignette/compression. Elle n'inclut pas LibreOffice (trop volumineux) ni aucun service KV/SQL (KeyDB/Redis/Valkey/PostgreSQL), car ils sont optionnels et doivent être exploités comme services externes.

## 4. Éléments de configuration à mettre à jour après installation

Exécutables externes :
- `thumbnail.tools.vips_path`
- `thumbnail.tools.imagemagick_path`
- `thumbnail.tools.ffmpeg_path`
- `thumbnail.tools.libreoffice_path`
- `latex_preview.latexmk_path`
- `file_compress.exe_7zip_path`

Commutateurs de fonctionnalités et limites (couramment utilisés avec les outils ci-dessus) :
- `latex_preview.enable_latexmk`
- `thumbnail.enabled`
- `thumbnail.<image|video|pdf|office|text>.enabled`

Services KV optionnels :
- `fast_kv_storage_hub.kv_type`
- `fast_kv_storage_hub.redis_url`

Services SQL optionnels :
- `database.db_type`
- `database.postgres_config.database_dsn`
- `database.sqlite_config.database_dsn`

## 5. Référence des commandes d'installation manuelle

Debian / Ubuntu (exécutables externes) :

```bash
sudo apt-get update
sudo apt-get install -y \
  ffmpeg \
  imagemagick \
  libvips-tools \
  p7zip-full \
  latexmk \
  texlive-xetex
```

LibreOffice (uniquement si les vignettes Office sont activées) :

```bash
sudo apt-get install -y libreoffice
```

Services optionnels via Docker (recommandé pour une configuration rapide) :

```bash
# Redis
docker run -d --name redis -p 6379:6379 redis:7

# Valkey
docker run -d --name valkey -p 6379:6379 valkey/valkey:7

# KeyDB
docker run -d --name keydb -p 6379:6379 eqalpha/keydb:alpine

# PostgreSQL
docker run -d --name postgres -p 5432:5432 \
  -e POSTGRES_PASSWORD=admin888 \
  -e POSTGRES_DB=fileuni \
  postgres:16
```

Après installation, assurez-vous que les chemins des exécutables et les URL de service dans `config.toml` correspondent à votre environnement.