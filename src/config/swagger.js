// src/config/swagger.js
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Backend III - TP1',
      version: '1.0.0',
      description: 'Documentación de la API'
    }
  },
  apis: ['./src/routes/*.js']
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
