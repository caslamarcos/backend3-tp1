// src/mocks/pets.mock.js
import { faker } from '@faker-js/faker';

export const generateMockPet = () => {
  return {
    name: faker.person.firstName(),
    specie: faker.helpers.arrayElement(['dog', 'cat', 'bird', 'hamster']),
    adopted: faker.datatype.boolean()
  };
};

export const generateMockPets = (qty = 1, { includeMongoId = true } = {}) => {
  const pets = [];

  for (let i = 0; i < qty; i++) {
    const pet = generateMockPet();

    if (includeMongoId) {
      pet._id = faker.database.mongodbObjectId();
      pet.__v = 0;
    }

    pets.push(pet);
  }

  return pets;
};