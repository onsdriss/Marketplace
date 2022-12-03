import React from 'react'
import "./log.css"
import { useState } from "react";
import styled from "styled-components";
import { login } from "../../redux/apiCalls";
import { register } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link  } from 'react-router-dom'
const Error = styled.span`
  color: red;
`;

const Login2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching ,error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  return (
     

<div class="login-wrap">
  <div class="login-html">
    <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Sign In</label>
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
        <div class="group">
          <label for="pass" class="label">Password</label>
          <input id="pass" 
          type="password" 
          class="input" 
          data-type="password"
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="group">
          <input id="check" type="checkbox" class="check" checked/>
          <label for="check"><span class="icon"></span> Keep me Signed in</label>
        </div>
        <div class="group">
          <input type="submit" class="button" value="Sign In" onClick={handleClick} disabled={isFetching}/>
        </div>
        {error && <Error>Something went wrong...</Error>}
        <div class="hr"></div>
        <div class="foot-lnk">
          <Link className='link' to="/forgottenpassword">
          <div className='forgot'> Forgot Password? </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

 
    
  )
}

export default Login2