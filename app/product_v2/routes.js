const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads" });
const productControllerv2 = require("./controller_v2");

router.get("/", (req, res) => {
  res.send({
    status: "Successfuly",
    message: "Welcome to Express JS Toturial",
  });
});
router.post("/product", upload.single("image"), productControllerv2.store);

router.get("/product", productControllerv2.index);

router.get("/product/:id", productControllerv2.view);

router.delete("/product/:id", upload.single("image"), productControllerv2.destroy);

router.put("/product/:id", upload.single("image"), productControllerv2.update);

module.exports = router;
