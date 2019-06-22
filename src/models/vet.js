const { Schema, model } = require('mongoose')

const vetSchema = new Schema({
  names: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true
  },
  lastNames: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true
  },
  email: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 250,
    unique: true
  },
  phones: {
    type : Array,
    default: []
  },
  password: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 200
  },
  professionalLicense: {
    type: String,
    minLength: 1,
    maxLength: 20
  },
  clinicId: {
    type: String,
    required: true,
    maxlength: 50
  },
  patients: {
    type : Array,
    default: []
  }
})

module.exports = {
  schema: vetSchema,
  model: model('Vet', vetSchema) 
}
