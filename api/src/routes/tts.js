var express = require('express')


const router = express.Router()


router.get('/tts', async (req, res) => {
  try {
    const updatedAppointment = await appointment.tts()
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

module.exports = router
