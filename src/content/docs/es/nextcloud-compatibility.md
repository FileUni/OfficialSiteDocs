---
title: Compatibilidad con Nextcloud
description: Lista de compatibilidad de FileUni con el ecosistema de clientes de Nextcloud.
order: 4
---

# Compatibilidad con Nextcloud

Esta página explica el objetivo de compatibilidad de FileUni cuando se usa desde clientes de Nextcloud.

Además de poder ejecutarse en hardware modesto y escalar mejor en hardware potente, la compatibilidad con clientes de Nextcloud es otra característica importante que FileUni quiere comunicar públicamente.

## Objetivo de compatibilidad

FileUni busca mantener compatibles los flujos principales de los clientes de Nextcloud que los usuarios esperan al migrar desde un entorno basado en Nextcloud.

El objetivo actual se centra en:

- Sincronización de archivos y acceso remoto por WebDAV
- Operaciones de gestión de archivos usadas por clientes de escritorio y móviles
- Favoritos, comparticiones, flujos relacionados con medios e interacciones comunes de metadatos
- Mantener los hábitos existentes de uso del cliente Nextcloud sin rediseñar el lado cliente

## Alcance actual

El repositorio actual ya expone las bases necesarias para esta dirección:

- Soporte del servicio WebDAV en la pila de almacenamiento
- Flujos de Web UI y API para explorar, subir, descargar, renombrar, mover, copiar, borrar, ver recientes, favoritos y papelera
- Vista previa de medios y de tipos de archivo comunes en el frontend
- Servicios de protocolo modulares que pueden activarse según el tamaño del despliegue

Estas piezas son la base del trabajo de compatibilidad con Nextcloud. El comportamiento exacto del cliente sigue dependiendo de la configuración, de los módulos habilitados y de la versión concreta del cliente Nextcloud.

## Lista

| Área | Objetivo | Estado |
| --- | --- | --- |
| Acceso por endpoint WebDAV | Compatible con los flujos de conexión WebDAV del cliente Nextcloud | Base disponible |
| Gestión de archivos | Explorar, subir, descargar, renombrar, mover, copiar, borrar | Implementado en la plataforma actual |
| Favoritos | Mantener compatibles los flujos relacionados con favoritos | Dirección implementada |
| Comparticiones | Mantener compatibles los flujos relacionados con compartir | Objetivo de compatibilidad |
| Medios | Mantener utilizables los flujos de exploración y vista previa de medios | Dirección implementada |
| Chat | Capacidad prevista a futuro | Planeado |
| Notes | Capacidad prevista a futuro | Planeado |

## Significado de los estados

- Base disponible: el repositorio ya contiene la capa de protocolo o de plataforma necesaria.
- Implementado en la plataforma actual: la capacidad ya existe en FileUni y forma parte de la base de compatibilidad.
- Dirección implementada: la capacidad relacionada ya existe y el trabajo de compatibilidad se apoya en ella.
- Objetivo de compatibilidad: forma parte de la dirección declarada del producto y no debe interpretarse como una promesa de que todos los casos límite del cliente estén completos.
- Planeado: alcance futuro, no funcionalidad actual.

## Cómo presentarlo externamente

- FileUni es una plataforma de archivos ligera y escalable.
- FileUni también está diseñada para seguir siendo compatible con clientes de Nextcloud en gestión de archivos, favoritos, comparticiones, flujos de medios y acceso basado en WebDAV.
- Chat y Notes forman parte del plan posterior y no deben presentarse como funciones ya lanzadas.

## Páginas relacionadas

- [Funciones](./features)
- [Acceso y operaciones de archivos](./file-management)
- [Guía rápida](./quickstart)
