const { Schema, model } = require('mongoose')

const clinicSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100
  },
  website: {
    type: String,
    required: false,
    minlength: 2,
    maxlength: 100
  },
  phones: {
    type : [String]
  },
  email: {
    type: String,
    minLength: 1,
    maxLength: 40
  },
  addressStreetAndNumber: {
    type: String,
    minLength: 1,
    maxLength: 20
  },
  addressCity: {
    type: String,
    minLength: 1,
    maxLength: 20
  },
  addressState: {
    type: String,
    minLength: 1,
    maxLength: 20
  },
  addressCountry: {
    type: String,
    minLength: 1,
    maxLength: 20,
    default: 'Mexico'
  },
  vets: {
    type: [String]
  },
  adminId: {
    type: String,
    required: true,
    maxlength: 50
  }
})

module.exports = {
  schema: clinicSchema,
  model: model('Clinic', clinicSchema)
}