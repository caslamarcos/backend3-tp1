// src/server.js
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import mocksRouter from './routes/mocks.router.js';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/mocks', mocksRouter);
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);

app.get('/healthcheck', (req, res) => {
  res.json({ status: 'ok', environment: process.env.NODE_ENV || 'dev' });
});

// Iniciar servidor luego de conectar a la BD
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
  });
};

startServer();