const { model: Clinic } = require('../models/clinic')

const register = (clinicData = {}) => {
  const {
    name,
    website,
    phones,
    addressStreetAndNumber,
    addressCity,
    addressState,
    addressCountry,
    vets,
    adminId
  } = clinicData

  const clinic = new Clinic({
    name,
    website,
    phones,
    addressStreetAndNumber,
    addressCity,
    addressState,
    addressCountry,
    vets,
    adminId
  })
  const error = clinic.validateSync()
  if (error) {throw error}
  clinic.save((error) => {
    if (error) {throw error}
  })
  return clinic
}
const getAll = async () => {
  const allClinics = await Clinic.find().lean()
  return allClinics
}
const getById = async (clinicId) => {
  const clinic = await Clinic.findById(clinicId).lean()
  return clinic
}
const deleteById = (clinicId) => Clinic.findByIdAndDelete(clinicId)

const updateById = (clinicId, clinicData) => Clinic.findByIdAndUpdate(clinicId, clinicData)

module.exports = {
  register,
  getAll,
  getById,
  deleteById,
  updateById
}
