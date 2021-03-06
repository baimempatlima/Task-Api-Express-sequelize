const express = require("express");
const path = require("path");
const app = express();
// const productRouter = require("./app/product/routes");
const productRouterV2 = require("./app/product_v2/routes");
const logger = require("morgan");
const PORT = process.env.PORT || 3000;
const cors = require("cors");
require("dotenv");

// var corsOption = {
//   origin: "http://localhost:3000",
// };
const corsOption = {
  credentials: true,
  origin: process.env.URL || "*",
};
app.use(cors(corsOption));
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
// app.use("/api/v1", productRouter);
// app.use("/", productRouterV2);
app.use("/api/v2", productRouterV2);

app.use((req, res, next) => {
  res.status(404);
  res.send({
    status: "failed",
    message: "Resource: " + req.originalUrl + " Not Found",
  });
});
// app.use("/", (req, res, next) => {
//   res.status(200);
//   res.send({
//     status: "success",
//     message: "Welcome to express api sequelize",
//   });
// });

app.listen(PORT, () => console.log(`Server: http://localhost:${PORT} `));
