var express = require('express')

const appointmentsummary = require('../usecases/appointmentsummary')

const router = express.Router()

router.post('/', (req, res) => {
  try {
    const newAppointmentsummaryData = req.body
    const newAppointmentsummary = appointmentsummary.register(newAppointmentsummaryData)
    res.json({
      success: true,
      message: 'Appointmentsummary created succesfully',
      payload: {
        appointmentsummary: newAppointmentsummary
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
    const allAppointmentsummarys = await appointmentsummary.getAll()
    res.json({
      success: true,
      message: 'all appointmentsummarys',
      payload: {
        appointmentsummarys: allAppointmentsummarys
      }
    })
  } catch (error) {
    console.error('Error:', error)
    res.status(400)
    res.json({
      success: false,
      message: 'cannot get appointmentsummarys',
      error: error.mesage
    })
  }
})
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const foundAppointmentsummary = await appointmentsummary.getById(id)
    res.status(200)
    res.json({
      success: true,
      message: 'appointmentsummary found',
      payload: {
        appointmentsummary: foundAppointmentsummary
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(404)
    res.json({
      message: 'appointmentsummary not found'

    })
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const deletedAppointmentsummary = await appointmentsummary.deleteById(id)
    res.status(200)
    res.json({
      success: true,
      message: 'appointmentsummary deleted',
      payload: {
        appointmentsummary: deletedAppointmentsummary
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(400)
    res.json({
      message: 'appointmentsummary could not be deleted'

    })
  }
})
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const updateAppointmentsummaryData = req.body
    const updatedAppointmentsummary = await appointmentsummary.updateById(id, updateAppointmentsummaryData)
    res.status(200)
    res.json({
      success: true,
      message: 'appointmentsummary updated',
      payload: {
        appointmentsummary: updatedAppointmentsummary
      }
    })
  } catch (error) {
    console.error('Error', error)
    res.status(400)
    res.json({
      message: 'appointmentsummary could not be updated'
    })
  }
})
module.exports = router
