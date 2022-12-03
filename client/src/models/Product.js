const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    name: { type: String},
    rating: { type: Number},
    comment: { type: String},
  },
  {
    timestamps: true,
  }
)



//Create table into DB for Products
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    max_power: { type: Number, required: true },
    dimensions: { type: String, required: true },
    img: { type: String, required: true },
    weight: { type: Number },
    country: { type: String, required: true },
    company: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String },
    categories: { type: Array },
    inStock: { type: String, default: "In Stock" },

    application: { type: String },
    type_application: { type: String },
    brand:{ type: String },
    numReviews: { type: Number},
    rating: { type: Number},
    reviews: [reviewSchema],
  },
  { timestamps: true }
);
// Product is name of table 
module.exports = mongoose.model("Product", ProductSchema);
