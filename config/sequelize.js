const Sequelize = require("sequelize");
require("dotenv");
// const isProduction = process.env.NODE_ENV === "production";
// const connectionString = `postgresql://${process.env.DB_USERNAME}:${process.env.DB_USERNAME}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
// const sequelize = new Sequelize({
//   connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
//   ssl: {
//     dialect: "postgres",
//     rejectUnauthorized: false,
//   },
// });
// const sequelize = new Sequelize({
//   database: process.env.DB_NAME || "latihan-cruds-v2",
//   host: process.env.DB_HOST || "localhost",
//   username: process.env.DB_USERNAME || "postgres",
//   password: process.env.DB_PASSWORD || "root",
//   port: process.env.DB_PORT || 5432,
//   dialect: "postgres",
// });

const env = process.env.NODE_ENV || "development";
let sequelize;

switch (env) {
  case "development":
    sequelize = new Sequelize({
      database: "latihan-cruds-v2",
      host: "localhost",
      username: "postgres",
      password: "root",
      port: 5432,
      dialect: "postgres",
    });
    break;
  case "production":
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    sequelize = new Sequelize({
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      dialect: "postgres",
    });
    break;
}

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
