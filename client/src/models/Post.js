const mongoose = require("mongoose");
//Create table into DB for Articles
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);
// Article is the name of table 
module.exports = mongoose.model("Post", PostSchema);