const  Brand = require("../models/Brand");

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
  const newBrand = new Brand(req.body);

  try {
    const savedBrand = await newBrand.save();
    res.status(200).json(savedBrand);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET ALL
router.get("/", async (req, res) => {
  try {
    const brands = await Brand.find();
    res.status(200).json(brands);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
