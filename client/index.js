const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const categoryRoute = require("./routes/category");
const applicationRoute = require("./routes/application");
const postRoute = require("./routes/post");
const brandRoute = require("./routes/brand");
//const cartRoute = require("./routes/cart");
//const orderRoute = require("./routes/order");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const passRoute = require("./routes/forgotPass");
const cors = require("cors");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/posts", postRoute);
//app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/brand", brandRoute);
app.use("/api/category", categoryRoute);
app.use("/api/application", applicationRoute);
app.use("/api/forgot-password", passRoute);
app.get("/api/config/paypal", (req,res)=>{
  res.send(process.env.PAYPAL_CLIENT_ID);
})

app.listen(5000, () => {
  console.log("Backend server is running!");
});


