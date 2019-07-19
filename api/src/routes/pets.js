var express = require('express')
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
var upload = multer({ storage: storage })

const pet = require('../usecases/pet')

const router = express.Router()

router.post('/',upload.single('file'), (req, res) => {

  /*console.log(req.body)
  res.json({
    success: true,
    message: 'testing req',
  })
  return false*/
  
  try {
    const newPetData = req.body
    console.log("file:================",req.file)
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
router.get('/owner/:id', async (req, res) => {
  try {
    const { id } = req.params
    const allPets = await pet.getByOwnerId(id)
    res.json({
      success: true,
      message: 'owner pets',
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
router.get('/vet/:id', async (req, res) => {
  try {
    const { id } = req.params
    const vetPets = await pet.getByVetId(id)
    res.json({
      success: true,
      message: 'vet pets',
      payload: {
        pets: vetPets
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
