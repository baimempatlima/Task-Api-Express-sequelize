const Sequelize = require("sequelize");
// require("dotenv").config();
// const isProduction = process.env.NODE_ENV === "production";
// const connectionString = `postgresql://${process.env.DB_USERNAME}:${process.env.DB_USERNAME}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
// const sequelize = new Sequelize({
//   connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
//   ssl: {
//     dialect: "postgres",
//     rejectUnauthorized: false,
//   },
// });
const sequelize = new Sequelize({
  database: process.env.DB_NAME || "latihan-cruds-v2",
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "root",
  port: process.env.DB_PORT || 5432,
  dialect: "postgres",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
