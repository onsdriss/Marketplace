import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "../Products/Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProdAppli = ({ filters,app}) => {

  const [product, setProduct] = useState([]);


  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(app?
          `http://localhost:5000/api/products?applicaType=${app}` :
          null);
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [app]);

  
  
  return (
    <Container>
      {app ?  product.map((item) => <Product item={item} key={item.id}/>)
      :  null }

      
    </Container>
  );
};

export default ProdAppli;
