import { useSelector } from "react-redux";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { useEffect } from "react";
import { listMyOrders } from "../../redux/actions/OrderActions";
import { useDispatch } from "react-redux";
import './trackOrders.css'
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

const TrackOrders = () => {

const dispatch = useDispatch();
const orderListMy = useSelector((state)=> state.orderListMy);
const {loading,error,orders} = orderListMy;

const orderDetails = useSelector((state) => state.orderDetails);
const {order} =orderDetails;


useEffect(()=> {
    dispatch(listMyOrders());
},[dispatch])


 
  return (
    <>
     <Navbar2/>
      <Navbar/>
    <Container>
      <Wrapper>
        <Top>
          <Info>
            {order ? 
            <div class="container">
            <article class="card">
            <header class="card-header"> My Orders / Tracking </header>
            <div class="card-body">
                <h6>Order ID: {order?._id}</h6>
                <article class="card">
                    <div class="card-body row">
                        <div class="col"> <strong>Ordered At:</strong> <br/>{order?.createdAt}</div>
                        <div class="col"> <strong>Payment Method:</strong> <br/>{order?.paymentMethod}  </div>
                        <div class="col"> <strong>Total Price:</strong> <br/>$ {order?.totalPrice} </div>
                        <div class="col"> <strong>Status :</strong> <br/> {order?.isPaid ? <p class="title">Paid</p>  : <p class="title"> Not Paid</p>} </div>
                    </div>
                </article>
              
                {order?.orderItems.map((o)=>(
                   <ul class="row">
                   <li class="col-md-4">
                       <figure class="itemside mb-3">
                           <figcaption class="info align-self-center">
                               <p class="title"> <br/> Title: {o?.title} </p> <span class="text-muted">Price: ${o?.price}</span>
                               <br/> Quantity: {o?.quantity}
                           </figcaption>
                       </figure>
                   </li>
                   </ul>
                ))}
                 {order?.isPaid==true ? <p class="title">Paid</p>  : <a href={`/order/${order?._id}`} class="btn btn-warning" data-abc="true"> Pay</a>} 
                
                <br/>
                <br/>
                <a href="/products" class="btn btn-warning" data-abc="true">  Continue Shopping</a>
            </div>
        </article>
        </div>
        
        :
        <a href="/products" class="btn btn-warning" data-abc="true"> <i class="fa fa-chevron-left"></i> Start Shopping</a>
            }
        

        </Info>
      </Top>
    </Wrapper>
</Container> 
<Footer/>
    </>
  );
};

export default TrackOrders;
