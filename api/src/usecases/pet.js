const { model: Pet } = require('../models/pet')

const register = (petData = {}) => {
  const {
    name,
    ageInMonths,
    size,
    species,
    breed,
    owner,
    description,
    photo,
    isAdopted,
    userId,
    adopterUserId
  } = petData

  const pet = new Pet({
    name,
    ageInMonths,
    size,
    species,
    breed,
    owner,
    description,
    photo,
    isAdopted,
    userId,
    adopterUserId
  })
  const error = pet.validateSync()
  if (error) throw error
  pet.save((error, pet) => {
    if (error) console.log(error)
    return pet
  })
}
const getAll = async () => {
  const allPets = await Pet.find().lean()
  const cleanPets = allPets.map((pet) => {
    const {
      password,
      ...cleanPet
    } = pet
    return cleanPet
  })
  return cleanPets
}
const getById = async (petId) => {
  const pet = await Pet.findById(petId).lean()
  const {
    password,
    ...cleanPet
  } = pet
  return cleanPet
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
