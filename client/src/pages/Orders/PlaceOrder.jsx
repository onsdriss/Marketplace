import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ORDER_CREATE_RESET } from "../../redux/constants/orderConstants";
import { useDispatch } from "react-redux";
import {createOrder} from "../../redux/actions/OrderActions"
import './pro.css';
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/navbar/Navbar";
import Navbar2 from "../../components/Navbar2";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const PlaceOrder = () => {

const orderCreate =useSelector((state) => state.orderCreate);
const dispatch = useDispatch();
const {order, success, error} =orderCreate 
const history = useHistory();
const quantity = useSelector(state=>state.cart.quantity)
const cart2 = useSelector((state) => state.cart2);
const cart = useSelector((state) => state.cart);
const user = useSelector((state) => state.user.currentUser);
//calculate Price 
/*
const addDecimals = (num)=> {
  return (Math.round(num *100) / 100).toFixed(2);
};
cart2.itemPrice =addDecimals(
  cart2.cartItems.reduce((acc,item)=> acc + item.price * item.quantity,0)
);
cart2.shippingAddress = addDecimals(cart2.itemPrice > 100 ?0:100);
cart2.taxPrice = addDecimals(Number((0.15 * cart2.itemPrice).toFixed(2)));
cart2.totalPrice = (
  Number(cart2.itemPrice) +
  Number(cart2.shippingAddress)+
  Number(cart2.taxPrice)
).toFixed(2);
*/

useEffect(()=>{
if(success){ 
  history.push(`/order/${order._id}`)
  dispatch({type:ORDER_CREATE_RESET})
}
},[history,dispatch,success,order]);

const placeOrderHandler =() => {
  dispatch(
    createOrder({
      orderItems: cart.products,
      user: user._id,
      shippingAddress: cart2.shippingAddress,
      paymentMethod: cart2.paymentMethod,
      itemPrice: cart2.itemPrice,
      shippingPrice: cart2.shippingPrice,
      taxPrice: cart2.taxPrice,
      totalPrice: cart.total,
    })
  );

};

 
  return (
    <>
    <Navbar2/>
      <Navbar/>
    <Container>
     
      <Wrapper>
       
        
        <Top>
        <Link to="/products">
          <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag ({quantity})</TopText>
          </TopTexts>  
        </Top>
      
        <div class="alert  infoo" role="alert">  
           <div class="rowA">
             <div class="columnB">
                <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                  <div className="row">
                    <div className="col-md-4 center">
                      <div className="infoo order-box">
                        <i class="fas fa-user"></i>
                        </div>
                      </div>
                    <div className="col-md-0 center">
                      <h5>
                        <strong>Customer</strong>
                      </h5>
                      <p>{user?.username}</p>
                      <p>{user?.email}</p>
                    </div>
                    </div>
                  </div>
            </div>
       
        {/* 2*/}
        <div class="columnB">
         
        <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
          <div className="row">
            <div className="col-md-4 center">
              <div className="infoo order-box">
                <i className="fas fa-truck-moving"></i>
              </div>
            </div>
            <div className="col-md-0 center">
              <h5>
                <strong> Order info</strong>
              </h5>
              <p>Shipping address:{cart2.shippingAddress.city}{" "}{cart2.shippingAddress.postalCode}{" "}{cart2.shippingAddress.address}</p>
              <p>Pay method: {cart2.paymentMethod}</p>
            </div>
          </div>
          
        </div>
        </div>
        
        {/* 3*/}
        <div class="columnB">
        
        <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
          <div className="row">
            <div className="col-md-4 center">
              <div className="infoo order-box">
                <i className="fas fa-map-marker-alt"></i>
              </div>
            </div>
            <div className="col-md-0 center">
              <h5>
                <strong> Deliver to</strong>
              </h5>
              <p>Address: {cart2.shippingAddress.country}</p>
            
            </div>
            </div>
          </div>
          </div>
          </div>
          </div>
        


          <br/>
          <br/> 
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
    
                    <ProductSize>
                      <b>weight:</b> {product.weight} Kg
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
           
            <Button type='submit' onClick={placeOrderHandler} >CHECKOUT NOW</Button>
          </Summary>
        </Bottom>

      </Wrapper>
     
    </Container>
     <Footer/>
     </>
  );
};

export default PlaceOrder;
