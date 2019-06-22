const { Schema, model } = require('mongoose')

const ownerSchema = new Schema({
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
    type: Array,
    default: []
  },
  password: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 200
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
  pets: {
    type: Array,
    default: []
  }
})

module.exports = {
  schema: ownerSchema,
  model: model('Owner', ownerSchema)
}
