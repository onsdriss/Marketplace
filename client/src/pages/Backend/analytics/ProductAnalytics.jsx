import "./home.css";
import ProductStatistics from "../../../components/Backend/statistics/ProductStatistics";
import SalesStatistics from "../../../components/Backend/statistics/SalesStatistics";
import Sidebar from "../../../components/Backend/sidebar/Sidebar";

export default function ProductAnalytics() {

  return (
    <>
    <div className="homeList">
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">PRODUCTS STATISTICS</span>
                    <ProductStatistics/>
                <span className="featuredTitle">SALES STATISTICS</span>
                    <SalesStatistics/>
            </div>
        </div>
    </div>
    </>
  );
}
