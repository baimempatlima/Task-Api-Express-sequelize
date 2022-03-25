const path = require("path");
const fs = require("fs");
const Product = require("./model");

const store = async (req, res) => {
  const createProduct = req.body;
  const image = req.file;
  if (image) {
    const target = path.join(__dirname, "../../uploads", image.originalname);
    fs.renameSync(image.path, target);
    createProduct.image = {
      image_url: `http://localhost:3000/public/${image.originalname}`,
    };
  } else {
    createProduct.image = {
      image_url: null,
    };
  }

  try {
    await Product.sync();
    const product = await Product.create(createProduct);
    res.send(product);
  } catch (error) {
    res.send(error);
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



const view = async (req, res) => {
  const product = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (product == null) {
    res.status(404).send({
      messege: "Not Found",
    });
  } else {
    res.status(200).send(product);
  }

};


const destroy = async (req, res) => {
  const product = await Product.destroy({
    where: {
      id: req.params.id,
    },
  });
  if (product == null) {
    res.send({
      messege: "failed",
    });
  } else {
    res.send({
      messege: "data delete successfully",
      product,
    });
  }
};

const update = async (req, res) => {
  const { users_id, name, price, stock, status } = req.body;
  const image = req.file;
  const id = req.params.id;

  if (image) {
    const target = path.join(__dirname, "../../uploads", image.originalname);
    fs.renameSync(image.path, target);
    body = { users_id, name, price, stock, status, image_url: `${req.protocol}://${req.headers.host}/public/${encodeURI(image.originalname)}` };
  }

  const result = await Product.findAll({
    where: {
      id: id,
    },
  });

  if (result.length < 1) {
    res.send({
      status: 404,
      message: `data id ${id} not found`,
    });
  } else {
    try {
      const product = await Product.update(body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send({
        message: "succes updated",
        data: product,
      });
    } catch (error) {
      res.status(400).send({
        message: "failed",
        error,
      });
    }
  }
};


module.exports = {
  store,
  index,
  view,
  destroy,
  update,
};
