const mongoose = require("mongoose");
//Create table into DB for category
const categorySchema = new mongoose.Schema(
  {
    value: { type: String, required: true, unique: true },
    label: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);
// Category is the name of table 
module.exports = mongoose.model("Category", categorySchema);
