import React from "react";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/newsletter/Newsletter";
import Products from "../components/Products/Products";
import Slider from "../components/Slider/Slider";
import { mobile } from "../responsive";
import styled from "styled-components";
import About from "../components/About/About";
import Navbar from "../components/navbar/Navbar";
import Navbar2 from "../components/Navbar2";

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
  font-size: 50px;
`;

const Home = () => {
  return (
    <div>
      <Navbar2/>
      <Navbar/>
      <Slider />
      <Categories />
        <InfoContainer>
        <Title>New Products</Title>
        </InfoContainer>
      <Products/>
      <Newsletter/>
      <About/>
      
      <Footer/>
    </div>
  );
};

export default Home;
