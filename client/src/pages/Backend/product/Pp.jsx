import React from 'react'
import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../../components/Backend/chart/Chart";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../../requestMethods";
import { updateProduct } from "../../../redux_2/apiCalls";
import { useDispatch } from "react-redux";

const Pp = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[3];
  const [pStats, setPStats] = useState([]);

  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime();
    //const storage = getStorage(app);
    //const storageRef = ref(storage, fileName);
     
    const product = { ...inputs, categories: cat };
    const id = product._id;
    updateProduct(id,product, dispatch);

  }
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
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a,b)=>{
            return a._id - b._id
        })
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);
  

  
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">{product.Sales}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input name="title" type="text" onChange={handleChange} placeholder={product.title} />
            <label>Product Description</label>
            <input name="desc" type="text" onChange={handleChange} placeholder={product.desc} />
            <label>Price</label>
            <input name="price" type="text" onChange={handleChange} placeholder={product.price} />
            <label>Max Power</label>
            <input name="max_power" type="text" onChange={handleChange} placeholder={product.max_power} />
            <label>Dimensions</label>
            <input name="dimensions" type="text" onChange={handleChange} placeholder={product.dimensions} />
            <label>Weight</label>
            <input name="weight" type="text" onChange={handleChange} placeholder={product.weight} />
            <label>Country</label>
            <input name="country" type="text" onChange={handleChange} placeholder={product.country} />
            <label>Company</label>
            <input name="company" type="text" onChange={handleChange} placeholder={product.company} />
            <label>Application</label>
            <input name="application" type="text" onChange={handleChange} placeholder={product.application} />
            

            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.img} alt="" className="productUploadImg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} style={{ display: "none" }} />
            </div>
            <button onClick={handleClick} className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Pp