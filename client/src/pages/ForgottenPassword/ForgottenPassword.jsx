import React from 'react'
import "./password.css"
import { useState } from "react";
import styled from "styled-components";
import { login } from "../../redux/apiCalls";
import { register } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link  } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
const Error = styled.span`
  color: red;
`;

const ForgottenPassword = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const { isFetching ,error } = useSelector((state) => state.user);
  const history = useHistory()
  

  const handleClick = (e) => {
    e.preventDefault();
    //login(dispatch, { email });
    history.push("/passwordreset")
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    const {email} =this.state;
    console.log(email);
    fetch("http://localhost:5000/forgot-password", {
      method:"POST",
      crossDomain: "true",
      headers:{
        "Content-Type" : "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body : JSON.stringify({
        email,
      }),

    })
    .then((res)=> res.json())
    .then((data)=> {
      console.log(data, "userRegister");
      alert(data.status);
    });
  }

  return (
     

<div class="login-wrap">
  <div class="login-html">
    <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Password Reset</label>
    <div class="login-form">
      <div class="sign-in-htm">
        <div class="group">
          <label for="user" class="label">Email</label>
          <input 
          id="user" 
          type="email"
          class="input"
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br/>
        <br/>
       
        <div class="group">
          <input type="submit" class="button" value="Submit" onClick={handleSubmit} disabled={isFetching}/>
        </div>
        {error && <Error>Something went wrong...</Error>}
        <br/>
        <br/>
        <div class="hr"></div>
        
      </div>
    </div>
  </div>
</div>

 
    
  )
}

export default ForgottenPassword