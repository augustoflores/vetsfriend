const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  type: {
    type: String,
    default: 'owner',
    enum: [
      'owner',
      'vet'
    ]
  },
  firstName: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true
  },
  lastName: {
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
    type: String,
    required: true,
    minLength: 8,
    maxLength: 13
  },
  zipCode: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 200
  },
  password: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 200
  },
  addressStreetAndNumber: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 20
  },
  addressCity: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 20
  },
  addressState: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 20
  },
  addressCountry: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 20,
    default: 'Mexico'
  },
  lat: {
    type: Number,
    maxLength: 20
  },
  long: {
    type: Number,
    maxLength: 20
  },
  professionalLicense: {
    type: String,
    minLength: 1,
    maxLength: 20
  }
})

module.exports = {
  schema: userSchema,
  model: model('users', userSchema)
}
