const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const productData = await Category.findAll({
      include: 
        [
          {model: Product},
        ]
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const productData = await Category.findByPk(req.params.id, {
      include: 
      [
        {model: Product}, 
      ]
    });

    // this is simple error catching to make sure that there is a valid category found by the id
    if (!productData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  // Category only has 2 columns, and does not need to check for additional foreign keys
  Category.create(req.body)
  .then( (returnData) => { res.status(200).json(returnData)})
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  /* example of getting the changed row as well as affected rows copied from:
   https://medium.com/@sarahdherr/sequelizes-update-method-example-included-39dfed6821d
   using returning: true doesn't seem to work
   Used additional returns so that the response has more information than just the number of affected rows */
  Category.update(req.body, {
    where: {
      id: req.params.id,
    }, 
  })
  .then( () => { return Category.findByPk(req.params.id) })
  .then( (returnData) => {res.status(200).json(returnData)})
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
