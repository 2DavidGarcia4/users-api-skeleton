const router = require("express").Router()
const { application } = require("express")
const { registerUser } = require("../users/users.services") 
const { login } = require("../auth/auth.services")

router.post('/register', registerUser)

router.post('/login', login)

module.exports = router