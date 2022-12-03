const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  const qApplication = req.query.applica;
  const qApplicationType = req.query.applicaType;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else if (qApplication) {
      products = await Product.find({
        application: {
          $in: [qApplication],
        },
      });
    }
    else if (qApplicationType) {
      products = await Product.find({
        type_application: {
          $in: [qApplicationType],
        },
      });
    }else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE_review

router.post("/:id/review", async (req, res) => {
  //const user = await UserInfo.findById(req.user._id);
  const {name,rating , comment} =req.body;
  const product = await Product.findById(req.params.id);

 /* if(product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user?.toString() == req.user?._id.toString()
    );
  if(alreadyReviewed) {
    res.status(400);
    throw new Error("Product already Reviewed");
  }*/
  const review ={
    rating: Number(rating),
    comment,
    name,
  };
product.reviews.push(review)
product.numReviews = product.reviews.length;
product.rating=
  product.reviews.reduce((acc, item) => item.rating + acc, 0)/
  product.reviews.length;
  await product.save()
  res.status(201).json({message:"Reviewed Added"})
  }

);

module.exports = router;
