const mongoose = require("mongoose");

//Create table into DB for Application
const applicationSchema = new mongoose.Schema(
    {
      checked: { type: Boolean, default: false, required: true },
      label: { type: String, required: true, unique: true },
    },
    {
      timestamps: true, //for date
    }
  );

// Application is name of table 
module.exports = mongoose.model("Application", applicationSchema);