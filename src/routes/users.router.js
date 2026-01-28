// src/routes/users.router.js
import { Router } from 'express';
import UserModel from '../dao/models/user.model.js';

const router = Router();

/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: Lista todos los usuarios
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 payload:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *       500:
 *         description: Error interno al obtener usuarios
 *
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 66b2a3f2c9a1b4d5e6f78901
 *         first_name:
 *           type: string
 *           example: Marcos
 *         last_name:
 *           type: string
 *           example: Corbalan
 *         email:
 *           type: string
 *           example: marcos@mail.com
 *         password:
 *           type: string
 *           example: $2b$10$hash...
 *         role:
 *           type: string
 *           example: user
 *         pets:
 *           type: array
 *           items:
 *             type: string
 *           example: []
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
