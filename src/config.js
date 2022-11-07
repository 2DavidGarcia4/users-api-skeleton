require("dotenv").config()

const PV = process.env, config = {
  port: PV.PORT || 2468,
  nodeEnv: PV.NODE_ENV || 'development',
  jwtSecret: PV.JWT_SECRET,
  db: {
    dbHost: PV.DB_HOST || 'localhost',
    userName: PV.DB_USER || 'postgres',
    password: PV.DB_PASSWORD || 'root',
    dbName: PV.DB_NAME
  }
}

module.exports = config