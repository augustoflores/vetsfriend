const vet = require('../usecases/vet')

const auth = (req, res, next) => {
  try {
    const {
      authorization
    } = req.headers

    if (!authorization) {
      res.status(401)
      res.json({
        succes: false,
        message: 'Token required'
      })
    }
    const jwtDecoded = vet.verifyJwt(authorization)
    console.log('jwtDecoded: ', jwtDecoded)
    next()
  } catch (error) {
    res.status(401)
    res.json({
      message: 'mal'
    })
  }
}
module.exports = auth
