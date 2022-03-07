const { Sequelize } = require("sequelize");

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

// const sequelize = new Sequelize({
//   database: "latihan-cruds-v1",
//   host: "localhost",
//   username: "postgres",
//   password: "root",
//   port: "5432",
//   dialect: "postgres",
// });
const sequelize = new Sequelize({
  database: "d4pvd1o5hb03rj",
  host: "ec2-3-225-79-57.compute-1.amazonaws.com",
  username: "yddmbjdostxuyy",
  password: "3df6e598424afebc86b548ac8d8f7bca5c6a55a8fd988674ae0099f72b39b29c",
  port: "5432",
  dialect: "postgres",
});

// postgres://yddmbjdostxuyy:3df6e598424afebc86b548ac8d8f7bca5c6a55a8fd988674ae0099f72b39b29c@ec2-3-225-79-57.compute-1.amazonaws.com:5432/d4pvd1o5hb03rj
// const sequelize = new Sequelize({
//   database: "latihan-cruds-v2",
//   host: "localhost",
//   username: "root",
//   password: "root",
//   dialect: "mysql",
// });

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
