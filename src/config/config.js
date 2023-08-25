require('dotenv').config();


module.exports = {
  "development": {
    "username": process.env.DB_USERNAME_DEV,
    "password": process.env.DB_PASSWORD_DEV,
    "database": process.env.DB_NAME_DEV,
    "host": process.env.DB_HOST_DEV,
    "dialect": "postgres",
    "port": process.env.DB_PORT_DEV
  },
  "production": {
    "username": process.env.DB_USERNAME_PRO,
    "password": process.env.DB_PASSWORD_PRO,
    "database": process.env.DB_NAME_PRO,
    "host": process.env.DB_HOST_PRO,
    "dialect": "postgres",
    "port": process.env.DB_PORT_PRO
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
