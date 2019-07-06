const { model: Owner } = require('../models/owner')

const { model: Owner } = require('../models/owner')
const bcrypt = require('../lib/bcrypt')
const jwt = require('jsonwebtoken')

const signUp = async (ownerData = {}) => {
  const {
    email,
    name,
    lastname,
    age,
    password,
    type,
    address,
    phone
  } = ownerData
  console.log('El password', password)

  const hash = await bcrypt.hash(password)

  const owner = new Owner({
    email,
    name,
    lastname,
    age,
    password: hash,
    type,
    address,
    phone
  })
  const error = owner.validateSync()
  if (error) throw error
  owner.save((error, owner) => {
    if (error) console.log(error)
    return owner
  })
}
const getAll = async () => {
  const allOwners = await Owner.find().lean()
  const cleanOwners = allOwners.map((owner) => {
    const { password, ...cleanOwner } = owner
    return cleanOwner
  })
  return cleanOwners
}

const getById = async (ownerId) => {
  const owner = await Owner.findById(ownerId).lean()
  const { password, ...cleanOwner } = owner
  return cleanOwner
}

const deleteById = (ownerId) => Owner.findByIdAndDelete(ownerId)

const updateById = (ownerId, ownerData) => Owner.findByIdAndUpdate(ownerId, ownerData)

const login = async (email, password) => {
  const owner = await Owner.findOne({ email }).lean()
  if (!owner) throw new Error('Invalid data')
  console.log('Compara: ', typeof (password), typeof owner.password)
  const isValidPassword = await bcrypt.compare(password, owner.password)
  if (!isValidPassword) throw new Error('Invalid data')
  return token = jwt.sign({ id: owner._id }, 'ELsecreto', { expiresIn: '1d' })
}
const verifyJwt = token => jwt.verify(token, 'ELsecreto')

module.exports = {
  signUp,
  getAll,
  getById,
  deleteById,
  updateById,
  login,
  verifyJwt
}