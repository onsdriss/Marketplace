import React from "react";
import "./main.css"
import { Icon } from '@iconify/react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { mobile } from "../../responsive";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Navbar2 from "../../components/Navbar2";



const Mainn = () => {
  return (
    <div>
      <Navbar2/>
      <Navbar/>
        <main class="main">
            <section className="home__container container grid">
              <div className="shape shape__big"></div>
              <div className="shape shape__small"></div>
                <div className="home__data">
                    <h1 className="home__title">
                          Find the Right Battery for You
                          {/*FIND THE RIGHT BATTERY FOR YOU*/} 
                    </h1>
                    <h2 className="home__subtitle">
                          Choose The Features
                    </h2>
                    
                
                  <Link to="/steps" className="link home__button">
                    start
                  </Link>
                
                </div>
                
                  <div className="home__img">
                    <img src="https://aberg-express.com/wp-content/uploads/shutterstock_114942397.jpg"/>
                  </div>
                
                
                <div className="home__car">
                  <div className="home__car-data">
                      <div className="home__car-icon">
                         <Icon icon="ri:temp-cold-line" /> 
                      </div>
                      <h3 className="home__car-name">TEMPERATURE</h3>
                  </div>

                  <div className="home__car-data">
                      <div className="home__car-icon">
                        <Icon icon="ri:dashboard-3-line" /> 
                      </div>
                      
                      <h3 className="home__car-name">POWER</h3>
                  </div>

                  <div className="home__car-data">
                      <div className="home__car-icon">
                        <Icon icon="ri:flashlight-line" /> 
                      </div>
                      
                      <h3 className="home__car-name">VOLTAGE</h3>
                  </div>
                </div>
                
                
              
            </section>
            <About/>
            <Footer/>
        </main>
      
     
    </div>
  );
};

export default Mainn;
