import { useEffect, useState } from "react";
import { userRequest } from "../../../requestMethods";
import { Visibility } from "@material-ui/icons";
import "./widgetLg.css";
import {format} from "timeago.js"
import {moment} from 'moment'
import { Link } from "react-router-dom";

export default function WidgetLg({ item }) {
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
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest orders</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          {/*<th className="widgetLgTh">Customer</th>*/}
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Paid</th>
          <th className="widgetLgTh">Delivered</th>
          <th className="widgetLgTh"> </th>
        </tr>
        {orders.slice(0,5).map((order) => (
          <tr className="widgetLgTr" key={order._id}>
            {/*<td className="widgetLgUser">
              <span className="widgetLgName">{order.userId}</span>
            </td>*/}
            <td className="widgetLgDate">{format(order.createdAt)}</td>
            <td className="widgetLgAmount">${order.totalPrice}</td>
            <td className="widgetLgStatus">
                        {
                            order.isPaid ? (
                              <button className="widgetLgButton approved">
                                  Paid
                              </button>
                            )
                            :
                            (
                            <button className="widgetLgButton declined">
                                NOT Paid
                            </button>
                            )
                        }
              </td>
              <td className="widgetLgStatus">
                        {
                            order.isDelivered ? (
                              <button className="widgetLgButton approved">
                                  Delivered
                              </button>
                            )
                            :
                            (
                            <button className="widgetLgButton pending">
                                NOT Delivered
                            </button>
                            )
                        }
                  </td>
              <td>
              <Link to={"/backend/order/"+order._id} className="link">
                  <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon" />
                      Display
                  </button>
              </Link>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
