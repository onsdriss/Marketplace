import React ,{useState} from 'react'
import {Link } from "react-router-dom"
import {useDispatch,useSelector} from 'react-redux'
import { savePaymentMethod } from '../../redux/actions/CartActions'
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

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
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


const Wrap = styled.div`
  width:100%;
  margin:auto;
  max-width:900px;
  min-height:400px;
  margin-top: 30px;
  position:relative;
box-shadow:0 12px 15px 0 rgba(145, 143, 143, 0.24),0 17px 50px 0 rgba(94, 89, 89, 0.19);
`;

const Button = styled.button`
  width: 30%;
  border: none;
  padding: 15px 20px;
  background-color: #1888ff;
  color: white;
  cursor: pointer;
`;

const PaymentScreen = ({history}) => {
    window.scrollTo(0,0);
    const [paymentMethod, setpaymentMethod]=useState("Paypal");
    
    const dispatch = useDispatch()
    const submitHandler =(e) =>{
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        history.push("/placeorder")
    }
  return (
    <>
    <Navbar2/>
      <Navbar/>
    <Container>
    <Wrapper>
      
    <Wrap>
  <div class="login-html">
    <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">SELECT PAYMENT METHOD</label>
    <div class="login-form">
      <div class="sign-in-htm">
        <div class="group">
          <label for="user" class="label">Paypal or Credit Card</label>
          <input 
          class="input"
          value={paymentMethod}
          type="radio" 
          required
          onChange={(e)=> setpaymentMethod(e.target.value)}
          />
        </div>
        <div class="group">
          <input type="submit" class="button" onClick={submitHandler} value="Continue" />
        </div>
        <br/>
          
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
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

export default PaymentScreen