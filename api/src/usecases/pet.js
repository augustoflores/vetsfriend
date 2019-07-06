const { model: Pet } = require('../models/pet')

const register = (petData = {}) => {
  const {
    name,
    specie,
    breed,
    dateOfBirth,
    description,
    photo,
    vaccines,
    previousConditions,
    ownerId,
    clinics,
    vets,
  } = petData

  const pet = new Pet({
    name,
    specie,
    breed,
    dateOfBirth,
    description,
    photo,
    vaccines,
    previousConditions,
    ownerId,
    clinics,
    vets,
  })
  const error = pet.validateSync()
  if (error) {throw error}
  pet.save((error) => {
    if (error) {throw error}
  })
  return pet
}
const getAll = async () => {
  const allPets = await Pet.find().lean()
  return allPets
}
const getById = async (petId) => {
  const pet = await Pet.findById(petId).lean()
  return pet
}
const deleteById = (petId) => Pet.findByIdAndDelete(petId)

const updateById = (petId, petData) => Pet.findByIdAndUpdate(petId, petData)

module.exports = {
  register,
  getAll,
  getById,
  deleteById,
  updateById
}
