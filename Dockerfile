# Imagen base (NO alpine)
FROM node:20

# Directorio de trabajo
WORKDIR /app

# Copiamos package.json y lock
COPY package*.json ./

# Instalamos dependencias
RUN npm ci

# Copiamos el resto del proyecto
COPY . .

# Puerto de la app
EXPOSE 8080

# Comando de arranque
CMD ["npm", "start"]