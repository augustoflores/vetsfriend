var express = require('express')

const pet = require('../usecases/pet')

const router = express.Router()

router.post('/', (req, res) => {
  try {
    const newPetData = req.body
    const newPet = pet.register(newPetData)
    res.json({
      success: true,
      message: 'Pet created succesfully',
      payload: {
        pet: newPet
      }
    })
  } catch (error) {
    console.error('Error:', error)
    res.status(400)
    res.json({
      success: false,
      message: 'No se pudo crear',
      error: error.message
    })
  }
})

router.get('/', async (req, res) => {
  try {
    const allPets = await pet.getAll()
    res.json({
      success: true,
      message: 'all pets',
      payload: {
        pets: allPets
      }
    })
  } catch (error) {
    console.error('Error:', error)
    res.status(400)
    res.json({
      success: false,
      message: 'cannot get pets',
      error: error.mesage
    })
  }
})
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const foundPet = await pet.getById(id)
    res.status(200)
    res.json({
      success: true,
      message: 'petfound',
      payload: {
        pet: foundPet
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(404)
    res.json({
      message: 'pet not found'

    })
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const deletedPet = await pet.deleteById(id)
    res.status(200)
    res.json({
      success: true,
      message: 'pet deleted',
      payload: {
        pet: deletedPet
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(400)
    res.json({
      message: 'pet could not be deleted'

    })
  }
})
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const updatePetData = req.body
    const updatedPet = await pet.updateById(id, updatePetData)
    res.status(200)
    res.json({
      success: true,
      message: 'pet updated',
      payload: {
        pet: updatedPet
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(400)
    res.json({
      message: 'pet could not be updated'
    })
  }
})
module.exports = router
