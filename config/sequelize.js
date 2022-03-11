const { Sequelize } = require("sequelize");
// require("dotenv").config();

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: "postgres",
// });

// const sequelize = new Sequelize("latihan-cruds-v2", "postgres", "root", {
//   host: "localhost",
//   port: "5432",
//   dialect: "postgres",
// });

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  dialect: "postgres",
});
// (
// const sequelizeConfig = process.env.DATABASE_URL
//   ? {
//       connectionString: process.env.DATABASE_URL,
//       ssl: {
//         rejectUnauthorized: false,
//       },
//     }
//   : {
//       database: "latihan-cruds-v2",
//       host: "localhost",
//       username: "postgres",
//       password: "root",
//       dialect: "postgres",
//     };
// const sequelize = new Sequelize(sequelizeConfig);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;

// const sequelize = new Sequelize({
//   database: "latihan-cruds-v1",
//   host: "localhost",
//   username: "postgres",
//   password: "root",
//   port: "5432",
//   dialect: "postgres",
// });

// database: "d4pvd1o5hb03rj",
// host: "ec2-3-225-79-57.compute-1.amazonaws.com",
// username: "yddmbjdostxuyy",
// password: "3df6e598424afebc86b548ac8d8f7bca5c6a55a8fd988674ae0099f72b39b29c",
// port: "5432",
// dialect: "postgres",

// database: "d711mo9skr755g",
// host: "ec2-54-83-21-198.compute-1.amazonaws.com",
// username: "nyvphvxmjadrck",
// password: "8ea98f708059d21ce57adb8c48fd6a8c43c38679bea223578d820d513cb35105",
// port: "5432",
// dialect: "postgres",

// const sequelize = new Sequelize({
//   database: "d4pvd1o5hb03rj",
//   host: "ec2-3-225-79-57.compute-1.amazonaws.com",
//   username: "yddmbjdostxuyy",
//   password: "3df6e598424afebc86b548ac8d8f7bca5c6a55a8fd988674ae0099f72b39b29c",
//   port: "5432",
//   dialect: "postgres",
// });

// postgres://yddmbjdostxuyy:3df6e598424afebc86b548ac8d8f7bca5c6a55a8fd988674ae0099f72b39b29c@ec2-3-225-79-57.compute-1.amazonaws.com:5432/d4pvd1o5hb03rj
// const sequelize = new Sequelize({
//   database: "latihan-cruds-v2",
//   host: "localhost",
//   username: "root",
//   password: "root",
//   dialect: "mysql",
// });
