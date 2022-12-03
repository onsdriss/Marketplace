import Chart from "../../../components/Backend/chart/Chart";
import FeaturedInfo from "../../../components/Backend/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../../components/Backend/widgetSm/WidgetSm";
import WidgetLg from "../../../components/Backend/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../../requestMethods";
import Topbar from "../../../components/Backend/topbar/Topbar";
import Sidebar from "../../../components/Backend/sidebar/Sidebar"
import { useSelector } from "react-redux";



export default function Home() {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  return (
    <>
    <div className="homeList">
    
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
   
    </>
    
  );
}
