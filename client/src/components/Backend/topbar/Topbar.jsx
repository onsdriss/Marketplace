import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import styled from "styled-components";


export default function Topbar() {

  const user = useSelector((state) => state.user.currentUser);
  const logoutHandler = () => {
    localStorage.clear();
    window.location.href = '/login';
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <Link className="link" to='/'>
          <span className="logo">Dashboard</span>
        </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
          <select className="newUserSelect" onClick={logoutHandler}>
           
              <option >Logout</option>
           
          </select>
          </div>
          <div className="topbarIconContainer">
          <label>{user.username}</label>
        
          </div>
          <img
              src={
                user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              
              className="widgetSmImg"
            />
        </div>
      </div>
    </div>
  );
}
