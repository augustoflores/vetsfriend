var express = require('express')

const appointment = require('../usecases/appointment')

const router = express.Router()

router.post('/', (req, res) => {
  try {
    const newAppointmentData = req.body
    const newAppointment = appointment.register(newAppointmentData)
    res.json({
      success: true,
      message: 'Appointment created succesfully',
      payload: {
        appointment: newAppointment
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
    const allAppointments = await appointment.getAll()
    res.json({
      success: true,
      message: 'all appointments',
      payload: {
        appointments: allAppointments
      }
    })
  } catch (error) {
    console.error('Error:', error)
    res.status(400)
    res.json({
      success: false,
      message: 'cannot get appointments',
      error: error.mesage
    })
  }
})
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const foundAppointment = await appointment.getById(id)
    res.status(200)
    res.json({
      success: true,
      message: 'appointmentfound',
      payload: {
        appointment: foundAppointment
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(404)
    res.json({
      message: 'appointment not found'

    })
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const deletedAppointment = await appointment.deleteById(id)
    res.status(200)
    res.json({
      success: true,
      message: 'appointment deleted',
      payload: {
        appointment: deletedAppointment
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(400)
    res.json({
      message: 'appointment could not be deleted'

    })
  }
})
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const updateAppointmentData = req.body
    const updatedAppointment = await appointment.updateById(id, updateAppointmentData)
    res.status(200)
    res.json({
      success: true,
      message: 'appointment updated',
      payload: {
        appointment: updatedAppointment
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(400)
    res.json({
      message: 'appointment could not be updated'
    })
  }
})
module.exports = router
