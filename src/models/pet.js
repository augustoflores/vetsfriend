const { Schema, model } = require('mongoose')

const petSchema = new Schema({

})

module.exports = {
  schema: petSchema,
  model: model('pets', petSchema)
}