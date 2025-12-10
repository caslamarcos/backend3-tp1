// src/dao/models/pet.model.js
import mongoose from 'mongoose';

const petCollection = 'pets';

const petSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specie: { type: String, required: true },
    adopted: { type: Boolean, default: false },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      default: null
    }
  },
  {
    timestamps: true
  }
);

const PetModel = mongoose.model(petCollection, petSchema);

export default PetModel;