const categoryModel = require("./modles/categoryModel");

const getCategories = (req, res) => {
  const name = req.body.name;
  console.log(req.body);
};

const newCategory = new categoryModel({ name });

newCategory
  .save()
  .then((doc) => {
    res.jsong(doc);
  })
  .catch((err) => {
    res.json({ err });
  });

module.exporst = getCategories;
