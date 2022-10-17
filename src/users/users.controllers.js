const Users = require("../models/user.model")
const { uuidGenerator, hashPassword } = require("../utils/functions")

const getAllUsers = () => Users.findAll()

const getUserById = (id) => Users.findOne({where: {id}})

const createUser = (data) => Users.create({
  id: uuidGenerator(),
  firstName: data.firstName,
  lastName: data.lastName,
  email: data.email,
  password: hashPassword(data.password),
  phone: data.phone,
  birthday: data.birthday,
  gender: data.gender,
  country: data.country
})

const updateUser = (id, data) => Users.update(data, {where: {id}})

const deleteUser = (id) => Users.destroy({where: {id}})

const getUserByEmail = (email) => Users.findOne({where: {email}})

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser, getUserByEmail }