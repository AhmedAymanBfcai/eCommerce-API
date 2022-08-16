const categoryModel = require("./modles/categoryModel");
const slugify = require("slugify");

const getCategories = (req, res) => {
  res.send();
};

exports.createCategory = (req, res) => {
  const name = req.body.name;

  CategoryModel.create({ name, slug: slugify(name) }).then((category) => {
    res
      .status(201)
      .json({ data: category })
      .catch((err) => {
        res.status(400).send(err);
      });
  });
};

module.exporst = getCategories;
