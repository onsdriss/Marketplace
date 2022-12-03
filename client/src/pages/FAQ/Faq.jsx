import React from "react";
import Footer from "../../components/Footer";
import Accordion from "../../components/FAQ/Accordion";
import { mobile } from "../../responsive";
import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Navbar2 from "../../components/Navbar2";

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  margin-top: -10px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
  font-size: 50px;
`;

const Faq = () => {
  return (
    <>
    <Navbar2/>
    <Navbar/>
        <h1 class="font-weight-light mt-2">Frequently Asked Questions</h1>
        <InfoContainer>
        <Accordion/>
        </InfoContainer>
        <Footer/>
    </>
  );
};

export default Faq;
