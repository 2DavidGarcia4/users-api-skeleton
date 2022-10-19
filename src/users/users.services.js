const controllers = require("./users.controllers")

const getAllUsers = async (req, res) => {
  try {
    const users = await controllers.getAllUsers()
    res.status(200).json(users) 

  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

const getUserById = async (req, res) => {
  try {
    const { id } = req.params, user = await controllers.getUserById(id)
    res.status(200).json(user) 

  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone, birthday, gender, country } = req.body
    const finishBody =  { firstName, lastName, email, password, phone, birthday, gender, country }
    if(!firstName || !lastName || !email || !password || !phone || !birthday) return res.status(404).json({message: 'All fields must be completed', fields: {
      firstName: 'string',
      lastName: 'string',
      email: 'example@gmail.com',
      password: 'string',
      phone: '+522346549082',
      birthday: 'YYYY/MM/DD'
    }})
    const user = await controllers.createUser(finishBody)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

const patchUser = async (req, res) => {
  try {
    const { id } = req.params, { firstName, lastName, phone, birthday, gender, country } = req.body
    const user = await controllers.updateUser(id, { firstName, lastName, phone, birthday, gender, country })
    res.status(200).json(user)
    if(user[0]){
      res.status(200).json({message: `User with ID: ${id}, edited`})
    }else{
      res.status(404).json({message: 'Invalid id'})
    }

  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params, user = await controllers.deleteUser(id)
    if(user){
      res.status(204).json(user)
    }else{
      res.status(404).json({message: 'Invalid id'})
    }

  } catch (error) {
    res.status(400).json({message: error.message})
  }
} 

const getMyUser = async (req, res) => {
  try {
    const { id } = req.user, user = await controllers.getUserById(id)
    res.status(200).json(user)

  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

const patchMyUser = async (req, res) => {
  try {
    const { id } = req.user, { firstName, lastName, phone, birthday, gender, country } = req.body
    const user = await controllers.updateUser(id, { firstName, lastName, phone, birthday, gender, country })
    res.status(200).json(user)
    if(user[0]){
      res.status(200).json({message: `User with ID: ${id}, edited`})
    }else{
      res.status(404).json({message: 'Invalid id'})
    }

  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

const deleteMyUser = async (req, res) => {
  try {
    const { id } = req.user, user = await controllers.updateUser(id, {status: 'inactive'})
    if(user){
      res.status(204).json(user)
    }else{
      res.status(404).json({message: 'Invalid id'})
    }

  } catch (error) {
    res.status(400).json({message: error.message})
  }
}


module.exports = { 
  getAllUsers, 
  getUserById, 
  registerUser, 
  patchUser, 
  deleteUser, 
  getMyUser,
  patchMyUser,
  deleteMyUser 
}