const bcrypt = require('bcrypt')
const hash = (password) => new Promise((resolve, reject) => {
  bcrypt.hash(password, 10, (error, hash) => {
    if (error) return reject(error)
    resolve(hash)
  })
})
const compare = (password, hash) => new Promise((resolve, reject) => {
  bcrypt.compare(password, hash, (error, same) => {
    if (error) return reject(error)
    resolve(same)
  })
})

module.exports = {
  hash,
  compare
}
