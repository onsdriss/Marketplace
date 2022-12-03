import styled from "styled-components";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import { mobile } from "../../responsive";
import { useLocation } from "react-router";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Navbar2 from "../../components/Navbar2";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  text-transform: capitalize;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <>
    <Navbar2/>
      <Navbar/>
    <Container>
      
      <Title>{cat}</Title>
      <FilterContainer>
        
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
    
      <Footer />
    </Container>
    </>
  );
};

export default ProductList;
