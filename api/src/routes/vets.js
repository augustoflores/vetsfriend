var express = require('express')

const vet = require('../usecases/vet')

const auth = require('../middlewares/auth')

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const newVetData = req.body
    const newVet = await vet.signUp(newVetData)
    res.json({
      success: true,
      message: 'Vet created succesfully',
      payload: {
        vet: newVet
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'No se pudo crear',
      error: error.message
    })
  }
})

router.get('/',  async (req, res) => {
  console.log(req)
  try {
    const allVets = await vet.getAll()
    res.json({
      success: true,
      message: 'all vets',
      payload: {
        vets: allVets
      }
    })
  } catch (error) {
    console.error('Error:', error)
    res.status(400)
    res.json({
      success: false,
      message: 'cannot get vets',
      error: error.mesage
    })
  }
})
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const foundVet = await vet.getById(id)
    res.status(200)
    res.json({
      success: true,
      message: 'vetfound',
      payload: {
        vet: foundVet
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(404)
    res.json({
      message: 'vet not found'

    })
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const deletedVet = await vet.deleteById(id)
    res.status(200)
    res.json({
      success: true,
      message: 'vet deleted',
      payload: {
        vet: deletedVet
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(400)
    res.json({
      message: 'vet could not be deleted'
    })
  }
})
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const updateVetData = req.body
    const updatedVet = await vet.updateById(id, updateVetData)
    res.status(200)
    res.json({
      success: true,
      message: 'vet updated',
      payload: {
        vet: updatedVet
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(400)
    res.json({
      message: 'vet could not be updated'
    })
  }
})
router.post('/auth', async (req, res) => {
  try {
    const {
      password,
      email
    } = req.body
    const token = await vet.login(email, password)
    res.json({
      success: true,
      message: 'vet loged in succesful',
      payload: {
        token
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(401)
    res.json({
      success: false,
      message: 'Wrong vet credentials',
      error: error.mesage
    })
  }
})
module.exports = router
