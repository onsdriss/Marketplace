import "./orderList.css";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { userRequest } from "../../../requestMethods";
import { Link } from "react-router-dom";
import { Visibility } from "@material-ui/icons";
import Sidebar from "../../../components/Backend/sidebar/Sidebar";

export default function OrderList() {

  const dispatch = useDispatch();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);
  

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "totalPrice", headerName: "Total", width: 150 },
    { field: "isPaid", headerName: "Paid", width: 150 },
    { field: "isDelivered", headerName: "Delivered", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/backend/order/"+params.row._id} className="link">
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
                  Display
            </button>
            </Link>
           
          </>
        );
      },
    },
  ];

  return (
   <>

    <div className="orderList">
      <DataGrid
        rows={orders}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
 

    </> 
  );
}
