// src/config/db.js
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;
    if (!mongoUrl) {
      throw new Error('No se encontró MONGO_URL en las variables de entorno');
    }

    await mongoose.connect(mongoUrl, {
      dbName: 'backend3_tp1'
    });

    console.log('✅ Conectado a MongoDB correctamente');
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error.message);
    process.exit(1);
  }
};