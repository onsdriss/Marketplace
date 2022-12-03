import styled from "styled-components";
import ProdAppliType from "../../components/Applications/ProdAppliType";
import Footer from "../../components/Footer/Footer";
import { mobile } from "../../responsive";
import { useLocation } from "react-router";
import Navbar from "../../components/navbar/Navbar";
import Navbar2 from "../../components/Navbar2";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;


const ApplicationType = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  return (
    <>
   <Navbar2/>
    <Navbar/>
    <Container>
      <Title>{cat}</Title>
      <ProdAppliType app={cat}/>
      <Footer />
    </Container>
    </>
  );
};

export default ApplicationType;
