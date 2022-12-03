import React from 'react'
import "./log.css"
import { useState } from "react";
import styled from "styled-components";
import { login } from "../../redux/apiCalls";
import { register } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Error = styled.span`
  color: red;
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const { isFetching ,error } = useSelector((state) => state.user);
 
  const handleClick2 = (e) => {
    e.preventDefault();
    register(dispatch, { name,lastName,username,email, password });
  };

  return (
    

<div class="login-wrap">
  <div class="login-html">
    <input id="tab-2" type="radio" name="tab" class="sign-up" checked/><label for="tab-2" class="tab">Sign Up</label>
    <div class="login-form">

      {/*---------------------------------------------------------------------------------------*/}
      <div class="sign-up-htm">
      <div class="group">
          <label for="user" class="label">Name</label>
          <input 
          type="text" 
          class="input"
          onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="group">
          <label for="user" class="label">Last Name</label>
          <input 
          type="text" 
          class="input"
          onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div class="group">
          <label for="user" class="label">Username</label>
          <input 
          type="text" 
          class="input"
          onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div class="group">
          <label for="pass" class="label">Email Address</label>
          <input 
          id="pass" 
          type="text" 
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
        {/*<div class="group">
          <label for="pass" class="label">Repeat Password</label>
          <input id="pass" type="password" class="input" data-type="password"/>
          </div>*/}
        
        <div class="group">
          <input type="submit" onClick={handleClick2} class="button" value="Sign Up"/>
        </div>
        {error && <Error>Something went wrong...</Error>}
        <div class="hr"></div>
        <div class="foot-lnk">
          <Link className='link' to="/login" >
            <label for="tab-1">Already Member?</label>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

 
    
  )
}

export default Register