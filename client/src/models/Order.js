const mongoose = require("mongoose");
//Create table into DB for Orders
const OrderSchema = new mongoose.Schema(
  {
    user: {type:mongoose.Schema.Types.ObjectId, ref: "user",required: true,},
    orderItems:[
      {
        title:  {type:String},
        quantity:  {type:Number},
        price: {type:Number},
        product:{
          type: mongoose.Schema.Types.ObjectId,         
          ref: "Product",
        },
      },
    ],
    shippingAddress:[
      {
      //type: mongoose.Schema.Types.ObjectId,
      address:  {type:String},
      city: {type:String},
      postalCode: {type:String},
      country: {type:String},
  
    },],
    paymentMethod:{
      type:String,
      required: true,
      default: "Paypal",
    },
    paymentResult:{
      id: {type:String},
      status: {type:String},
      update_time: {type:String},
      email_address: {type:String},
    },
    taxPrice:{
      type:Number,
      required: true,
      default:0.0,
    },
    shippingPrice:{
      type:Number,
      required:true,
      default:0.0,
    },
    totalPrice: {type:Number,required: true,default:0.0,},
    isPaid: { type: Boolean, required: true, default:false, },
    paidAt:{type:Date,},
    isDelivered:{ type: Boolean, required: true ,default:false,},
    deliveredAt:{type:Date,},
   
  },
  { timestamps: true }
);
// Order is the name of table 
module.exports = mongoose.model("Order", OrderSchema);
