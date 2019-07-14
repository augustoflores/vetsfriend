const { model: Vet } = require('../models/vet')
const bcrypt = require('../lib/bcrypt')
const jwt = require('jsonwebtoken')


const signUp = async (vetData = {}) => {
  const {
    name,
    lastName,
    email,
    phones,
    password,
    professionalLicense,
    clinicId,
    patients
  } = vetData
  const hash = await bcrypt.hash(password)
  const vet = new Vet({
    name,
    lastName,
    email,
    phones,
    password:hash,
    professionalLicense,
    clinicId,
    patients,
  })
  const error = vet.validateSync() 
  if (error){
    if (error) throw error
  }
  vet.save(error=>{
    if(error) throw error

  })    
  return vet
}
const getAll = async () => {
  const allVets = await Vet.find().lean()
  const cleanVets = allVets.map((vet) => {
    const { password, ...cleanVet } = vet
    return cleanVet
  })
  return cleanVets
}

const getById = async (vetId) => {
  const vet = await Vet.findById(vetId).lean()
  const { password, ...cleanVet } = vet
  return cleanVet
}

const deleteById = (vetId) => Vet.findByIdAndDelete(vetId)

const updateById = (vetId, vetData) => Vet.findByIdAndUpdate(vetId, vetData)

const login = async (email, password) => {
  const vet = await Vet.findOne({ email }).lean()
  if (!vet) throw new Error('Invalid data')
  console.log('Compara: ', typeof (password), typeof vet.password)
  const isValidPassword = await bcrypt.compare(password, vet.password)
  if (!isValidPassword) throw new Error('Invalid data')
  return token = jwt.sign({ id: vet._id }, 'ELsecreto', { expiresIn: '1d' })
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
