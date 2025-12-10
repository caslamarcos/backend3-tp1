// src/routes/pets.router.js
import { Router } from 'express';
import PetModel from '../dao/models/pet.model.js';

const router = Router();

/**
 * GET /api/pets
 * Lista todas las mascotas
 */
router.get('/', async (req, res) => {
  try {
    const pets = await PetModel.find().lean();
    return res.json({
      status: 'success',
      payload: pets
    });
  } catch (error) {
    console.error('Error en GET /api/pets:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Error al obtener pets',
      error: error.message
    });
  }
});

export default router;