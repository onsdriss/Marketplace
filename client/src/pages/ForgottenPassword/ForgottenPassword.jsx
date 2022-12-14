import React from 'react'
import "./password.css"
import { useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
const Error = styled.span`
  color: red;
`;

const ForgottenPassword = () => {
  const [email, setEmail] = useState("");
  const { isFetching ,error } = useSelector((state) => state.user);
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(email);
    fetch("http://localhost:5000/api/forgot-password/", {
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