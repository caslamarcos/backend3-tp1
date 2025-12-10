// src/mocks/users.mock.js
import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

const SALT_ROUNDS = 10;
const RAW_PASSWORD = 'coder123';

// Hasheamos una sola vez y reutilizamos
const HASHED_PASSWORD = bcrypt.hashSync(RAW_PASSWORD, SALT_ROUNDS);

export const generateMockUser = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName }).toLowerCase();

  return {
    first_name: firstName,
    last_name: lastName,
    email,
    password: HASHED_PASSWORD,
    role: faker.helpers.arrayElement(['user', 'admin']),
    pets: []
  };
};

export const generateMockUsers = (qty = 1, { includeMongoId = true } = {}) => {
  const users = [];

  for (let i = 0; i < qty; i++) {
    const user = generateMockUser();

    if (includeMongoId) {
      user._id = faker.database.mongodbObjectId();
      user.__v = 0;
    }

    users.push(user);
  }

  return users;
};