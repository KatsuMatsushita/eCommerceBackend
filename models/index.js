// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// These are association methods to be executed on the models
// Products belongsTo Category
Product.hasOne(Category, {
  foreignKey: "category_id"
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "product_id",
})
// Products belongToMany Tags (through ProductTag)
Product.hasMany(Tag, {
  through: "ProductTag",
  foreignKey: "id"
})
// Tags belongToMany Products (through ProductTag)
Tag.hasMany(Product, {
  through: "ProductTag",
  foreignKey: "id"
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
