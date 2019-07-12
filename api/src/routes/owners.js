var express = require('express')

const owner = require('../usecases/owner')

const auth = require('../middlewares/auth')

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const newOwnerData = req.body
    const newOwner = await owner.signUp(newOwnerData)
    res.json({
      success: true,
      message: 'Owner created succesfully',
      payload: {
        owner: newOwner
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
    const allOwners = await owner.getAll()
    res.json({
      success: true,
      message: 'all owners',
      payload: {
        owners: allOwners
      }
    })
  } catch (error) {
    console.error('Error:', error)
    res.status(400)
    res.json({
      success: false,
      message: 'cannot get owners',
      error: error.mesage
    })
  }
})
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const foundOwner = await owner.getById(id)
    res.status(200)
    res.json({
      success: true,
      message: 'ownerfound',
      payload: {
        owner: foundOwner
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(404)
    res.json({
      message: 'owner not found'

    })
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const deletedOwner = await owner.deleteById(id)
    res.status(200)
    res.json({
      success: true,
      message: 'owner deleted',
      payload: {
        owner: deletedOwner
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(400)
    res.json({
      message: 'owner could not be deleted'

    })
  }
})
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const updateOwnerData = req.body
    const updatedOwner = await owner.updateById(id, updateOwnerData)
    res.status(200)
    res.json({
      success: true,
      message: 'owner updated',
      payload: {
        owner: updatedOwner
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(400)
    res.json({
      message: 'owner could not be updated'
    })
  }
})
router.post('/auth', async (req, res) => {
  try {
    const {
      password,
      email
    } = req.body
    const token = await owner.login(email, password)
    res.json({
      success: true,
      message: 'owner loged in succesful',
      payload: {
        token
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(401)
    res.json({
      success: false,
      message: 'Wrong owner credentials',
      error: error.mesage
    })
  }
})
module.exports = router
