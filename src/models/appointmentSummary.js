const { Schema, model } = require('mongoose')

const appointmentSummarySchema = new Schema({
  vetId: {
    type: String,
    required: true
  },
  petId: {
    type: String,
    required: true
  },
  date: {
    type: date,
    required: true
  },
  notes: {
    type: String,
    maxlength: 1000
  },
  vitals: {
    type: String,
    maxlength: 1000
  },
  sintoms: {
    type: String,
    maxlength: 1000
  },
  diagnose: {
    type: String,
    maxlength: 1000
  },
  prescription: {
    type: String,
    required: true,
    maxlength: 50
  },
})

module.exports = {
  schema: appointmentSummarySchema,
  model: model('Appointmentsummary', appointmentSummarySchema) 
}
