const { Schema, model } = require('mongoose')

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  species: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    pattern: /^[a-zA-Z]{2,50}$/
  },
  dateOfBirth: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 1000
  },
  description: {
    type: String,
    required: false,
    maxlength: 300
  },
  photo: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 300
  },
  vaccines: {
    type : [String]
  },
  previousConditions: {
    type : [String]
  },
  ownerId: {
    type: String,
    required: true,
    maxlength: 50
  },
  clinics: {
    type : Array,
    default: []
  },
  vets: {
    type : [String]
  }
})

module.exports = {
  schema: petSchema,
  model: model('Pet', petSchema)
}