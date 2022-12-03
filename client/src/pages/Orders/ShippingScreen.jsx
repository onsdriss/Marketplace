import React ,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { saveShippingAddress } from '../../redux/actions/CartActions'
import styled from "styled-components";
import { mobile } from "../../responsive";
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/navbar/Navbar";
import Navbar2 from "../../components/Navbar2";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;


const Wrap = styled.div`
  width:100%;
  margin:auto;
  max-width:900px;
  min-height:670px;
  position:relative;
  box-shadow:0 12px 15px 0 rgba(145, 143, 143, 0.24),0 17px 50px 0 rgba(94, 89, 89, 0.19);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  color: #acaaaa;
`;

const Button = styled.button`
  width: 30%;
  border: none;
  padding: 15px 20px;
  background-color: #1888ff;
  color: white;
  cursor: pointer;
`;

const ShippingScreen = ({history}) => {
    window.scrollTo(0,0);

    const cart2 = useSelector((state) => state.cart2);
    const {shippingAddress}=cart2

    const [address, setAddress]=useState(shippingAddress.address)
    const [city, setCity]=useState(shippingAddress.city)
    const [postalCode, setpostalCode]=useState(shippingAddress.postalCode)
    const [country, setcountry]=useState(shippingAddress.country)
    
    const dispatch = useDispatch()
    const submitHandler =(e) =>{
        e.preventDefault();
        dispatch(saveShippingAddress({address,city,postalCode,country}))
        history.push("/payment")
    }
  return (
    <>
     <Navbar2/>
      <Navbar/>
    <Container>
    <Wrapper>
      

<Wrap>
  <div class="login-html">
    <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">DELIVERY ADDRESS</label>
    <div class="login-form">
      <div class="sign-in-htm">
        <div class="group">
          <label for="user" class="label">Address</label>
          <input 
          class="input"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div class="group">
          <label for="pass" class="label">City</label>
          <input
          class="input" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div class="group">
          <label for="pass" class="label">Postal Code</label>
          <input
          class="input" 
          value={postalCode}
          onChange={(e) => setpostalCode(e.target.value)}
          />
        </div>
        <div class="group">
          <label for="pass" class="label">City</label>
          <input
          class="input" 
          value={country}
          onChange={(e) => setcountry(e.target.value)}
          />
        </div>
        <div class="group">
          <input type="submit" class="button" value="Continue" onClick={submitHandler} />
        </div>
        <br/>
          
          <Agreement>
            Choose your Region or Country to place an <b> order </b>
          </Agreement>
      </div>
    </div>
  </div>
</Wrap>
        </Wrapper>
       </Container>
       <Footer/>
    </>
  )
}

export default ShippingScreen