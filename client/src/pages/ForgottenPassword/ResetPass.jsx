import React from 'react'
import "./password.css"
import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
const Error = styled.span`
  color: red;
`;

const ResetPass= () => {
  const [password, setpass] = useState("");
  const { isFetching ,error } = useSelector((state) => state.user);
  const location = useLocation();
  const id2 = location.pathname.split("/")[2];

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(password);
    fetch(`http://localhost:5000/api/users/`+ id2, {
      method:"PUT",
      crossDomain: "true",
      headers:{
        "Content-Type" : "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body : JSON.stringify({
        password,
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
          <label for="user" class="label">Password</label>
          <input 
          id="user" 
          type="password"
          class="input"
          onChange={(e) => setpass(e.target.value)}
          />
        </div>
        <br/>
        <br/>
       
        <div class="group">
            <Link className='link' to="/login" >
                <input type="submit" class="button" value="Submit" onClick={handleSubmit} disabled={isFetching}/>
            </Link>
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

export default ResetPass