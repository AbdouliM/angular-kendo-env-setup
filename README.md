# angular-kendo-env-setup

Script CLI d'installation automatisée d'un socle de **68 dépendances Angular 20 / Kendo UI testées et compatibles entre elles**.

Publié sur npm sous le nom `pack22` : https://www.npmjs.com/package/pack22

## Pourquoi ce script existe

Aligner les versions d'Angular 20, Kendo UI 19.2, RxJS et des libs associées (JWT, traduction, PWA, drag & drop…) sur un nouveau projet prend du temps et génère facilement des conflits de peer dependencies. Ce script installe en une seule commande un socle **déjà validé par des tests de compatibilité réels**, évitant à l'équipe de re-découvrir les mêmes incompatibilités de versions à chaque nouveau projet.

## Installation

```bash
npm install pack22
```

L'installation déclenche automatiquement (`postinstall`) la fusion des 68 dépendances dans le `package.json` du projet cible, puis leur installation via `npm install`.

Vous pouvez aussi lancer la CLI manuellement :

```bash
npx pack22
```

## Structure du projet

| Fichier | Rôle |
|---|---|
| `scripts/install-dependencies.js` | Point d'entrée CLI : vérifie que Node.js est installé, lit la liste de dépendances, les ajoute au `package.json` du projet cible, lance l'installation. |
| `scripts/angular20-kendo-packages.js` | Liste figée des 68 dépendances (`dependencies` / `devDependencies`) avec leurs versions exactes, validées par tests de compatibilité. |
| `package.json` | Métadonnées npm et définition de la commande `bin pack22`. |

## Technologies couvertes

- **Angular 20.1.5** (core, forms, router, animations, CDK, localize…)
- **Kendo UI 19.2.0** (grid, charts, dialog, editor, upload, treeview…)
- Authentification JWT (`@auth0/angular-jwt`)
- Traduction (`@ngx-translate`), notifications (`ngx-toastr`), stockage local (`@ngx-pwa/local-storage`, `localforage`)
- RxJS 7.8.1 (+ `rxjs-compat` pour la rétrocompatibilité)

La liste complète et versionnée se trouve dans [`scripts/angular20-kendo-packages.js`](scripts/angular20-kendo-packages.js).

## Prérequis

- Node.js 18+
- npm

## Licence

ISC