import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../../requestMethods";

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await userRequest.get("products");
        setProducts(res.data);
      } catch {}
    };
    getProducts();
  }, []);
  /*useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPerc((res.data[1].totalPrice * 100) / res.data[0].totalPrice - 100);
      } catch {}
    };
    getIncome();
  }, []);*/
  let totalSale =0
  if(orders){
    {
      orders.map((order)=> order.isPaid== true? (totalSale= totalSale+order.totalPrice) : null)
    }
  }
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total Products</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{products? products.length : 0}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${totalSale.toFixed(0)}</span>
          <span className="featuredMoneyRate">
          %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Orders</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{orders? orders.length:0}</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
