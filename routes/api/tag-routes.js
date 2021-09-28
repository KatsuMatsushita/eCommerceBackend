const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: 
        [
          {model: Product, through: ProductTag},
        ]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: 
      [
        {model: Product, through: ProductTag}
      ]
    });

    // this is simple error catching to make sure that there is a valid product found by the id
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
    /* req.body should look like this:
    {
      tag_name: "cyan",
      prodIds: [1, 2, 3, 4]
    }
    code copied from product-routes.js
  */
  Tag.create(req.body)
  .then((tag) => {
    // if there's products, we need to create pairings to bulk create in the ProductTag model
    if (req.body.prodIds.length) {
      const productTagIdArr = req.body.prodIds.map((product_id) => {
        return {
          product_id: product_id,
          tag_id: tag.id,
        };
      });
      return ProductTag.bulkCreate(productTagIdArr);
    }
    // if no product tags, just respond
    res.status(200).json(product);
  })
  .then((productTagIds) => res.status(200).json(productTagIds))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  /* req.body should look like:
  { "tag_name": "new_tag_name" }
  */
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    }, 
  })
  .then( () => { return Tag.findByPk(req.params.id) })
  .then( (returnData) => {res.status(200).json(returnData)})
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
