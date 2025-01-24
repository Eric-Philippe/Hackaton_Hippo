# Étape 1 : Utiliser l'image officielle Node.js pour construire l'application Angular
FROM node:18 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Installer Angular CLI globalement
RUN npm install -g @angular/cli

# Copier tous les fichiers source dans le conteneur
COPY . .

# Construire l'application Angular pour la production
RUN npm run build --prod

# Étape 2 : Créer l'image de production en utilisant Caddy
FROM caddy:alpine

# Copier les fichiers de build depuis l'étape précédente dans le répertoire par défaut de Caddy
COPY --from=build /app/dist/frontend/browser/ /usr/share/caddy

# Copier un fichier Caddyfile personnalisé
COPY Caddyfile /etc/caddy/Caddyfile

# Exposer le port 80 pour HTTP (ou 443 si HTTPS est utilisé)
EXPOSE ${FRONT_PORT}

# La commande de démarrage est déjà incluse dans l'image officielle de Caddy
