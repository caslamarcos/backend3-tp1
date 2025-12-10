// src/routes/users.router.js
import { Router } from 'express';
import UserModel from '../dao/models/user.model.js';

const router = Router();

/**
 * GET /api/users
 * Lista todos los usuarios
 */
router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find().lean();
    return res.json({
      status: 'success',
      payload: users
    });
  } catch (error) {
    console.error('Error en GET /api/users:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Error al obtener usuarios',
      error: error.message
    });
  }
});

export default router;