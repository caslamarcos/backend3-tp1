# Backend III – Entrega Final (Docker)
Proyecto Backend III containerizado con Docker, conexión a MongoDB y documentación Swagger.

## Imagen Docker
Repositorio público en Docker Hub:
https://hub.docker.com/r/caslamarcos/backend3-tp1

## Descargar imagen
docker pull caslamarcos/backend3-tp1:latest

## Ejecutar contenedor
Requiere MongoDB ejecutándose en la máquina host en el puerto 27017.
En Windows se recomienda usar el puerto 8081 para evitar conflictos.

docker run --name backend3tp1 ^
-p 8081:8080 ^
-e MONGO_URL=mongodb://host.docker.internal:27017 ^
-e DB_NAME=backend3_tp1 ^
caslamarcos/backend3-tp1:latest

El servidor corre internamente en el puerto 8080 y se expone en el puerto 8081 del host.

## Endpoints disponibles
Healthcheck
http://localhost:8081/healthcheck

Usuarios
http://localhost:8081/api/users

Mascotas
http://localhost:8081/api/pets

Mocks
http://localhost:8081/api/mocks

Documentación Swagger
http://localhost:8081/api/docs

## Detener contenedor 
docker stop backend3tp1

## Eliminar contenedor 
docker rm backend3tp1

## Tecnologias utiilizadas
Node.js
Express
MongoDB
Docker
Swagger (OpenAPI 3.0)
Faker.js

## Estado del proyecto
API funcionando correctamente
MongoDB conectado
Contenedor Docker operativo
Documentación Swagger accesible


