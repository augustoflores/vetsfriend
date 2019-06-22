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
    type : Array,
    default: []
  },
  vitals: {
    type : Array,
    default: []
  },
  sintoms: {
    type : Array,
    default: []
  },
  diagnose: {
    type: String,
    required: true,
    maxlength: 50
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
