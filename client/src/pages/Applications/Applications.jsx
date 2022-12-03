import React from 'react'
import Applications from "../../components/Applications/Applications";
import Footer from "../../components/Footer/Footer";
import { mobile } from "../../responsive";
import styled from "styled-components";
import { ListGroup } from 'react-bootstrap'
import Navbar from "../../components/navbar/Navbar";
import Navbar2 from "../../components/Navbar2";

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 100;
  margin: 16px;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Applicationss = () => {
  return (
    <>
    <Navbar2/>
    <Navbar/>
    <Container>
      
      <br/>
        
          <Top>
    
    <Title> APPLICATIONS </Title>
          </Top>
          <Bottom>
            <Info>
                <InfoContainer>
                <Desc>
                    Lama generator sets can help you solve all your power needs. Lama can help protect your business from the serious consequences of losing power, as almost all businesses are dependent on electrical power. Lama, a global power leader, can provide reliable emergency standby and prime power systems for homes and businesses that can minimise downtime.
                    Lama Power Generation certified dealers can help provide a Lama power system that can protect you and your business from 17 to 550kVA. Fully trained and certified Lama dealers work with Lama to provide a total power solutions for business. Our dealers work closely with you to provide a complete service from initial advice at the quotation and proposal stage, through to installation, commissioning and lifetime generator service and maintenance support.
                </Desc>
                </InfoContainer>
                <Applications />
            </Info>  
          </Bottom>
          <Footer/>
          </Container>
  
  </>
  )
}

export default Applicationss