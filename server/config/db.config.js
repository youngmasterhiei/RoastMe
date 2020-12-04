module.exports = {
  jwtSecret: "a secret phrase!!",

  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "roastme",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
