
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";
import {deliverOrder, getOrderDetails} from "../../../redux/actions/OrderActions"
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Loader from "../../../components/Backend/Loader";

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

export default function OrderD() {
    const location = useLocation();
    const orderId = location.pathname.split("/")[3];
    //const orders = useSelector((state) => state.order.orders);
    const dispatch = useDispatch();
    
    const orderDetails = useSelector((state) => state.orderDetails);
    const {loading,error,order} =orderDetails;

    const orderDelivered = useSelector((state) => state.orderDelivered);
    const {loading:loadingDelivered,success:successDelivered} =orderDelivered;
  
  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch,orderId,successDelivered]);

  const deliverHandler = () =>{
    dispatch(deliverOrder(order))
  }

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "title", headerName: "Products", width: 200 },
    { field: "price", headerName: "Unit Price", width: 150 },
    { field: "quantity", headerName: "Quantity", width: 150 },
    
  ];

  return (
   <>
   <div className="home">
        <div className="featured">
            <div className="featuredItem2">
                <span className="featuredTitle">ORDER DETAILS</span>
                <p>Order Id: {order?._id}</p>
                <p>{
                   order?.isPaid ? (
                     <span className="badge rounded-pill alert-success">
                            Paid
                     </span>
                        )
                        :
                        (
                        <span className="widgetLgButton declined">
                             NOT Paid
                        </span>   
                        )
                }</p>
                {
                   order?.isDelivered ? (
                     <span className="badge rounded-pill alert-success">
                            Delivered
                     </span>
                        )
                        :
                        (
                        <span className="widgetLgButton declined">
                             NOT Delivered
                        </span>   
                        )
                }
                <p>Created At : {order?.createdAt}</p>
                <span className="">
                <p>TOTAL PRICE : ${order?.totalPrice}</p>
                </span>
                
                {
                    order?.isDelivered ? (
                        <Button type='submit' >
                            DELIVERED
                        </Button>
                    ):
                    (
                        <>
                        {loadingDelivered && <Loader/>}
                        <Button onClick={deliverHandler} type='submit' >
                            MARK AS DELIVERED
                        </Button>
                        </>
                    )
                }
                

            </div>

      <div className="featuredItem">
        
            <i class="fas fa-user"></i>
            <strong>Customer</strong>
            <p>ID: {order?.user}</p>
        {/* 2*/}

            <i className="fas fa-truck-moving"></i>
            <strong> Deliver to</strong>
              {order?.shippingAddress.map((o)=>(
                <>
                <p>Shipping address: {o?.city}{", "}{o?.postalCode}{", "}{o?.address}</p>
                <p>Pay method: {order?.paymentMethod}</p>
                </>
              ))}

      </div>
    </div> 
 
    <br/>
    
    
      <DataGrid
        rows={order?.orderItems}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        checkboxSelection
      />
</div>

        
   
    </> 
  );
}
