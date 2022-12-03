import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Na.css';
import { ArrowRightOutlined } from "@material-ui/icons";

function Navbar() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

 

  return (
    <>
      <head>
        <link rel="stylesheet" href='https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.2/css/fontawesome.min.css'></link>
      </head>
       <body>
        <div className='menu-bar' >
          <ul>

          <li className='nav-item'>
          <a href='/products' >Products</a>
            <div class="sub-menu-1">
              <ul>
                <li><a href='/products/battery'>Battery</a></li>
                <li><a href='/products/fuelcell'>Fuel Cell</a></li>
                <li><a href='/products/balanceofplant'>Balance Of Plant</a></li>
              </ul>
            </div>
          </li>

          <li className='nav-item'>
          <Link to='/applications' className='nav-links' onClick={closeMobileMenu}>Applications</Link>
            <div class="sub-menu-1">
              <ul>
              <li class="hover-me"><a href='/applicationList/mobility'>Mobility</a><ArrowRightOutlined />
                <div class="sub-menu-2">
                  <ul>
                    <li><a href='/applicationType/marine'>Marine</a></li>
                    <li><a href='/applicationType/aerospace'>Aerospace</a></li>
                    <li><a href='/applicationType/automotive'>Automotive</a></li>
                    <li><a href='/applicationType/heavy_duty'>Heavy duty</a></li>
                  </ul>
                </div> 
                </li>
                <li className='nav-item'><a href='/applicationList/agriculture'>Agriculture</a></li>
                <li className='nav-item'><a href='/applicationList/stationary'>Stationary</a></li>
              </ul>
            </div>
          </li>

          <li className='nav-item'><a href='/mainn' >ROS</a></li>
          <li className='nav-item'>
          <a href='#' >News</a>
            <div class="sub-menu-1">
              <ul>
                <li><a href='/post'>Blog</a></li>
                <li><a href='#'>Product Trends</a></li>
                <li><a href='FAQ'>FAQ</a></li>
              </ul>
            </div>
          </li>
          <li className='nav-item'><a href='/contactus' >Contact</a></li>
          
          </ul>
        </div>
        </body> 
    </>
  );
}

export default Navbar;