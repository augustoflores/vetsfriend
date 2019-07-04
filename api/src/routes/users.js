var express = require('express')

const user = require('../usecases/user')

const auth = require('../middlewares/auth')

const router = express.Router()

router.post('/', (req, res) => {
  try {
    const newUserData = req.body
    const newUser = user.signUp(newUserData)
    res.json({
      succes: true,
      message: 'User created succesfully',
      payload: {
        user: newUser
      }
    })
  } catch (error) {
    console.error('Error:', error)
    res.status(400)
    res.json({
      succes: false,
      message: 'No se pudo crear',
      error: error.message
    })
  }
})

router.get('/', auth, async (req, res) => {
  console.log(req)
  try {
    const allUsers = await user.getAll()
    res.json({
      success: true,
      message: 'all users',
      payload: {
        users: allUsers
      }
    })
  } catch (error) {
    console.error('Error:', error)
    res.status(400)
    res.json({
      success: false,
      message: 'cannot get users',
      error: error.mesage
    })
  }
})
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const foundUser = await user.getById(id)
    res.status(200)
    res.json({
      succes: true,
      message: 'userfound',
      payload: {
        user: foundUser
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(404)
    res.json({
      message: 'user not found'

    })
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const deletedUser = await user.deleteById(id)
    res.status(200)
    res.json({
      succes: true,
      message: 'user deleted',
      payload: {
        user: deletedUser
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(400)
    res.json({
      message: 'user could not be deleted'

    })
  }
})
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const updateUserData = req.body
    const updatedUser = await user.updateById(id, updateUserData)
    res.status(200)
    res.json({
      succes: true,
      message: 'user updated',
      payload: {
        user: updatedUser
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(400)
    res.json({
      message: 'user could not be updated'
    })
  }
})
router.post('/auth', async (req, res) => {
  try {
    const {
      password,
      email
    } = req.body
    const token = await user.login(email, password)
    res.json({
      succes: true,
      message: 'user loged in succesful',
      payload: {
        token
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(401)
    res.json({
      succes: false,
      message: 'Wrong user credentials',
      error: error.mesage
    })
  }
})
module.exports = router
