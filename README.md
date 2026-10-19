# Garderie - Les Petits Explorateurs

## Présentation
Application web réalisée avec Next.js dans le cadre du TP de développement Full Stack. Elle présente une garderie pour enfants, ses services et ses activités.

## Technologies utilisées
- Next.js et React
- TypeScript
- Bootstrap 5
- Node.js et Express
- Git et GitHub

## Fonctionnalités
- Page d'accueil responsive
- Navigation entre les sections
- Présentation des services de la garderie
- API REST pour les informations de la garderie, les services et les activités
- Récupération des données du backend dans le frontend

## Installation

### 1. Cloner le projet
```bash
git clone https://github.com/amalmuk/garderie-app.git
cd garderie-app
```

### 2. Installer les dépendances
```bash
npm install
npm install express cors
npm install -D tsx @types/express @types/cors
```

### 3. Lancer le backend
Dans un premier terminal :
```bash
npm run backend
```

Le backend utilise le port 4000.

### 4. Lancer le frontend
Dans un deuxième terminal :
```bash
npm run dev
```

Ouvrir ensuite http://localhost:3000.

## Endpoints API
- `GET /api/garderie` : informations de la garderie
- `GET /api/services` : liste des services
- `GET /api/activites` : liste des activités

Les endpoints sont disponibles sur `http://localhost:4000`.

## Auteur
Projet réalisé dans le cadre du TP Full Stack.
