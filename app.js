const express = require("express");
const path = require("path");
const app = express();
const productRouterV2 = require("./app/product_v2/routes");
const logger = require("morgan");
const port = 3000;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api/v2", productRouterV2);

app.use((req, res, next) => {
  res.status(404);
  res.send({
    status: "failed",
    message: "Resource: " + req.originalUrl + " Not Found",
  });
});

app.listen(process.env.PORT | port, () => console.log("Server: http://localhost:3000"));
