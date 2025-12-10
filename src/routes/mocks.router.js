// src/routes/mocks.router.js
import { Router } from 'express';
import { generateMockUsers } from '../mocks/users.mock.js';
import { generateMockPets } from '../mocks/pets.mock.js';
import UserModel from '../dao/models/user.model.js';
import PetModel from '../dao/models/pet.model.js';

const router = Router();

/**
 * GET /api/mocks/mockingpets
 * Endpoint migrado desde el desafío anterior.
 * Devuelve mascotas mock (no se guardan en BD).
 */
router.get('/mockingpets', (req, res) => {
  const qty = parseInt(req.query.qty) || 50;
  const pets = generateMockPets(qty, { includeMongoId: true });

  return res.json({
    status: 'success',
    payload: pets
  });
});

/**
 * GET /api/mocks/mockingusers
 * Genera 50 usuarios mock (o cantidad por query ?qty=N)
 * con formato similar a Mongo (incluye _id).
 */
router.get('/mockingusers', (req, res) => {
  const qty = parseInt(req.query.qty) || 50;

  const users = generateMockUsers(qty, {
    includeMongoId: true
  });

  return res.json({
    status: 'success',
    payload: users
  });
});

/**
 * POST /api/mocks/generateData
 * Body: { "users": number, "pets": number }
 * Genera e inserta en la BD la cantidad indicada.
 */
router.post('/generateData', async (req, res) => {
  try {
    let { users = 0, pets = 0 } = req.body;

    users = Number(users) || 0;
    pets = Number(pets) || 0;

    const result = {
      usersInserted: 0,
      petsInserted: 0
    };

    // Generarr e insertar usuarios
    if (users > 0) {
      const mockUsers = generateMockUsers(users, {
        includeMongoId: false
      });

      const createdUsers = await UserModel.insertMany(mockUsers);
      result.usersInserted = createdUsers.length;
    }

    // Generarr e insertar pets
    if (pets > 0) {
      const mockPets = generateMockPets(pets, {
        includeMongoId: false
      });

      const createdPets = await PetModel.insertMany(mockPets);
      result.petsInserted = createdPets.length;
    }

    return res.status(201).json({
      status: 'success',
      message: 'Datos generados e insertados correctamente',
      payload: result
    });
  } catch (error) {
    console.error('Error en /api/mocks/generateData:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Error al generar e insertar datos',
      error: error.message
    });
  }
});

export default router;