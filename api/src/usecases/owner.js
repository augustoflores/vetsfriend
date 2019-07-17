const { model: Owner } = require('../models/owner')
const bcrypt = require('../lib/bcrypt')
const jwt = require('jsonwebtoken')


const signUp = async (ownerData = {}) => {
  const {
  names,
  lastNames,
  email,
  phones,
  password,
  addressStreetAndNumber,
  addressCity,
  addressState,
  addressCountry,
  pets
  } = ownerData
  const hash = await bcrypt.hash(password)
  const owner = new Owner({
  names,
  lastNames,
  email,
  phones,
  password:hash,
  addressStreetAndNumber,
  addressCity,
  addressState,
  addressCountry,
  pets
  })
  const error = owner.validateSync() 
  if (error){
    if (error) throw error
  }
  owner.save(error=>{
    if(error) throw error
  })
  return owner
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
