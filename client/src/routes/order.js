const Order = require("../models/Order");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE ORDER

router.post("/", async (req, res) => {
  
  
    const {
        orderItems,
        user,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    }= req.body;
   
    if(orderItems && orderItems.length ==0){
        res.status(400)
        throw new Error("No order items")
        return;
    } else{
        const order = new Order({
            orderItems,
            user,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        })
        const createOrder = await order.save()
        res.status(201).json(createOrder);
    }
  });

  //GET ORDER BY ID
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
});

  //USER LOGIN ORDERS
  /*router.get("/get",async (req, res) => {
    const user = req.user._id;
      const order = await Order.find({user: response.body.user});
      res.json(order);
  });*/

 //ADMIN GET ALL ORDERS
 router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

  //ORDER IS PAID

  router.put("/:id/pay", async (req, res) => {
    const order= await Order.findById(req.params.id);

    if(order){
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email,
      };
      const updateOrder = await order.save()
        res.json(updateOrder);
    } else{
        res.status(404);
        throw new Error("Order Not Found");
    }
  });
  

  //ORDER IS delivered

  router.put("/:id/delivered", async (req, res) => {
    const order= await Order.findById(req.params.id);

    if(order){
      order.isDelivered = true;
      order.deliveredAt = Date.now();

      const updatedOrder = await order.save()
        res.json(updatedOrder);
    } else{
        res.status(404);
        throw new Error("Order Not Found");
    }
  });
  

  module.exports = router;