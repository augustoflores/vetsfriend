const { model: Appointment } = require('../models/appointment')

const register = (appointmentData = {}) => {
  const {
    date,
    vetId,
    petId,
    description,
  } = appointmentData

  const appointment = new Appointment({
    date,
    vetId,
    petId,
    description,
  })
  const error = appointment.validateSync()
  if (error) {throw error}
  appointment.save((error) => {
    if (error) {throw error}
  })
  return appointment
}
const getAll = async () => {
  const allAppointments = await Appointment.find().lean()
  return allAppointments
}
const getById = async (appointmentId) => {
  const appointment = await Appointment.findById(appointmentId).lean()
  return appointment
}
const deleteById = (appointmentId) => Appointment.findByIdAndDelete(appointmentId)

const updateById = (appointmentId, appointmentData) => Appointment.findByIdAndUpdate(appointmentId, appointmentData)

module.exports = {
  register,
  getAll,
  getById,
  deleteById,
  updateById
}