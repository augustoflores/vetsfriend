const { model: Appointmentsummary } = require('../models/appointmentsummary')

const register = (appointmentsummaryData = {}) => {
  const {
    vetId,
    petId,
    date,
    notes,
    vitals,
    sintoms,
    diagnose,
    prescription,
  } = appointmentsummaryData

  const appointmentsummary = new Appointmentsummary({
    vetId,
    petId,
    date,
    notes,
    vitals,
    sintoms,
    diagnose,
    prescription,
  })
  const error = appointmentsummary.validateSync()
  if (error) {throw error}
  appointmentsummary.save((error) => {
    if (error) {throw error}
  })
  return appointmentsummary
}
const getAll = async () => {
  const allAppointmentsummarys = await Appointmentsummary.find().lean()
  return allAppointmentsummarys
}
const getById = async (appointmentsummaryId) => {
  const appointmentsummary = await Appointmentsummary.findById(appointmentsummaryId).lean()
  return appointmentsummary
}
const deleteById = (appointmentsummaryId) => Appointmentsummary.findByIdAndDelete(appointmentsummaryId)

const updateById = (appointmentsummaryId, appointmentsummaryData) => Appointmentsummary.findByIdAndUpdate(appointmentsummaryId, appointmentsummaryData)

module.exports = {
  register,
  getAll,
  getById,
  deleteById,
  updateById
}
