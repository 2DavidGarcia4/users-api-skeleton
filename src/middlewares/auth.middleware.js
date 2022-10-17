const { Strategy } = require("passport-jwt")
const { ExtractJwt } = require("passport-jwt")
const { jwtSecret } = require("../config")
const { getUserById } = require("../users/users.controllers")


module.exports = (passport) => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: jwtSecret
  }

  passport.use(
    new Strategy(options, async (decoded, done) => {
      try {
        const response = await getUserById(decoded.id)
        if(!response) return done(null, false)
        console.log('decodes JWT', decoded)
        return done(null, decoded)

      } catch (error) {
        return done(error, false)
      }
    })
  )
}