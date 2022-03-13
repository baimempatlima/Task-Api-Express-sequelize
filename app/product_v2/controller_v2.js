const path = require("path");
const fs = require("fs");
const Product = require("./model");
const res = require("express/lib/response");

const store = async (req, res) => {
  const { users_id, name, price, stock, status } = req.body;
  const image = req.file;
  if (image) {
    const target = path.join(__dirname, "../../uploads", image.originalname);
    fs.renameSync(image.path, target);
    try {
      await Product.sync();
      const result = await Product.create({ users_id, name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}` });
      res.send(result);
    } catch (e) {
      res.send(e);
    }
  }
};

const index = async (req, res) => {
  try {
    const product = await Product.findAll();
    res.send(product);
  } catch (e) {
    res.send(e);
  }
};

// const index = (req, res) => {
//   Product.findOne().then((products) => res.send(products));
// };
const view = async (req, res) => {
  // let id= req.params.id;
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(product);
  } catch (e) {
    res.send(e);
  }
};
// const view = (req, res) => {
//   Product.findAll({
//     where: {
//       id: req.params.id,
//     },
//   }).then((products) => res.send(products));
// };

const destroy = async (req, res) => {
  try {
    const product = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send(product);
  } catch (e) {
    res.send(e);
  }
};
// const destroy = (req, res) => {
//   Product.destroy({
//     where: {
//       id: req.params.id,
//     },
//   }).then(() => res.send("success delete"));
// };

const update = async (req, res) => {
  try {
    const { users_id, name, price, stock, status } = req.body;
    const image = req.file;

    if (image) {
      const target = path.join(__dirname, "../../uploads", image.originalname);
      fs.renameSync(image.path, target);
      const product = await Product.update(
        {
          users_id,
          name,
          price,
          stock,
          status,
          image_url: image ? `http://localhost:3000/public/${image.originalname}` : null,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      ).then(() => res.send("success update"));
    }
  } catch (e) {
    res.send(e);
  }
};

module.exports = {
  store,
  index,
  view,
  destroy,
  update,
};
