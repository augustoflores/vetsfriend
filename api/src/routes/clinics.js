var express = require('express')

const clinic = require('../usecases/clinic')

const router = express.Router()

router.post('/', (req, res) => {
  try {
    const newClinicData = req.body
    const newClinic = clinic.register(newClinicData)
    res.json({
      success: true,
      message: 'Clinic created succesfully',
      payload: {
        clinic: newClinic
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
    const allClinics = await clinic.getAll()
    res.json({
      success: true,
      message: 'all clinics',
      payload: {
        clinics: allClinics
      }
    })
  } catch (error) {
    console.error('Error:', error)
    res.status(400)
    res.json({
      success: false,
      message: 'cannot get clinics',
      error: error.mesage
    })
  }
})
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const foundClinic = await clinic.getById(id)
    res.status(200)
    res.json({
      success: true,
      message: 'clinicfound',
      payload: {
        clinic: foundClinic
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(404)
    res.json({
      message: 'clinic not found'

    })
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const deletedClinic = await clinic.deleteById(id)
    res.status(200)
    res.json({
      success: true,
      message: 'clinic deleted',
      payload: {
        clinic: deletedClinic
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(400)
    res.json({
      message: 'clinic could not be deleted'

    })
  }
})
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const updateClinicData = req.body
    const updatedClinic = await clinic.updateById(id, updateClinicData)
    res.status(200)
    res.json({
      success: true,
      message: 'clinic updated',
      payload: {
        clinic: updatedClinic
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(400)
    res.json({
      message: 'clinic could not be updated'
    })
  }
})
module.exports = router
