const express = require("express")
const { port } = require("./config")

//? Routes
const usersRoutes = require("./users/users.routers")
const authRouters = require("./auth/auth.routes")

const db = require("./utils/database")
const { initModels } = require("./models/initModels")

const app = express(), prefix = '/api/v1/'

app.use(express.json())
app.use(prefix+'users', usersRoutes)
app.use(prefix+'auth', authRouters)


db.authenticate()
.then(()=> console.log('DB autenticated'))
.catch(err=> console.log(err))

db.sync()
.then(()=> console.log('DB synced'))
.catch(err=> console.log(err))
initModels()

app.get(prefix, (req, res) => {
  res.status(200).send({
    message: 'ok',
    users: `http://localhost:${port}${prefix}users`
  })
})


app.listen(port, () => {
  console.log('Server is running in the port:', port)
})