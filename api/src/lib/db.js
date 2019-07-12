const mongoose = require('mongoose')
//const connectionString = 'mongodb+srv://vets-friend-kdmuser:cR8ALI6SOyEpQquO@cluster0-jxjco.mongodb.net/test?retryWrites=true&w=majority'
const connectionString = 'mongodb://localhost:27017/vetsfriend'

const connect = () => new Promise((resolve, reject) => {
  mongoose.connect(connectionString, { useNewUrlParser: true }, (error) => {
    if (error) return reject(error)
    resolve()
  })
})

module.exports = {
  connect
}

