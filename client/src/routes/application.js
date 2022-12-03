const  Application = require("../models/Application");

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
  const newApplication = new Application(req.body);

  try {
    const savedApplication = await newApplication.save();
    res.status(200).json(savedApplication);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET ALL
router.get("/", async (req, res) => {
  try {
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
