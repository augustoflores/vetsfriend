const { Schema, model } = require('mongoose')

const appointmentSchema = new Schema({
  date: {
    type: date,
    required: true
  },
  vetId: {
    type: String,
    required: true
  },
  petId: {
    type: String,
    required: true
  }
})

module.exports = {
  schema: appointmentSchema,
  model: model('Appointment', appointmentSchema) 
}
