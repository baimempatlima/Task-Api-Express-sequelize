const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: process.env.DB_NAME || "latihan-cruds-v2",
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "root",
  port: process.env.DB_PORT || 3306,
  dialect: "postgres" || "mysql",
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
