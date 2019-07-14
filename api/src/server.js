const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

const vetsRouter = require('./routes/vets')
const petsRouter = require('./routes/pets')
const ownersRouter = require('./routes/owners')
const clinicsRouter = require('./routes/clinics')
const appointmentsRouter = require('./routes/appointments')
const appointmentsummarysRouter = require('./routes/appointmentsummarys')


const app = express()
const port = 8080

app.use(cors())

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}));

app.use('/vets', vetsRouter)
app.use('/pets', petsRouter)
app.use('/owners', ownersRouter)
app.use('/clinics', clinicsRouter)
app.use('/appointments', appointmentsRouter)
app.use('/appointmentsummarys', appointmentsummarysRouter)

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
