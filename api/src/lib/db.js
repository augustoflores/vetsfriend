const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://mongotest:afloresD6@cluster0-l9vkh.mongodb.net/pets?retryWrites=true&w=majority'
const connect = () => new Promise((resolve, reject) => {
  mongoose.connect(connectionString, { useNewUrlParser: true }, (error) => {
    if (error) return reject(error)
    resolve()
  })
})

module.exports = {
  connect
}
