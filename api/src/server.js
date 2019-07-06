const express = require('express')
var cors = require('cors')

const vetsRouter = require('./routes/vets')
const petsRouter = require('./routes/pets')

const app = express()
const port = 8080

app.use(cors())

app.use(express.json())

app.use('/vets', vetsRouter)
app.use('/pets', petsRouter)

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world',
    succes: true
  })
})

module.exports = {
  server: app,
  port
}
