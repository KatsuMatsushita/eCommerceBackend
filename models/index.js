// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// These are association methods to be executed on the models
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  targetKey: "id"
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  sourceKey: "id"
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  unique: false
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  unique: false
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
