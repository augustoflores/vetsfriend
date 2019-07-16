const { server, port } = require('./src/server')
const db = require('./src/lib/db')
db.connect()
  .then(() => {
    server.listen(port, () => { console.log(`Escuchando en: ${port}`) })
  }).catch((error) => {
    console.error(error)
  })
