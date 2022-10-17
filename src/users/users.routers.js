const router = require("express").Router()
const service = require("./users.services")
const passport = require("passport")
require("../middlewares/auth.middleware")(passport)

router.get('/', passport.authenticate('jwt', {session: false}), service.getAllUsers)

router.route('/me')
.get(passport.authenticate('jwt', {session: false}), service.getMyUser)
.patch(passport.authenticate('jwt', {session: false}), service.patchMyUser)
.delete(passport.authenticate('jwt', {session: false}), service.deleteMyUser)

router.route('/:id')
.get(service.getUserById)
.patch(service.patchUser)
.delete(service.deleteUser)


module.exports = router