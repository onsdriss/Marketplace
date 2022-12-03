import React from 'react'
import "./footer.css"
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Logo = styled.h3`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Footer = () => {
  return (
    
    <section class="footer section" >
        <div className='shape shape__big'></div>
        <div className='shape shape__small'></div>

        <div className='footer__container container grid'>
            <div className='footer_content'>
                <a href='#' className='footer__logo'>
                    <Icon icon="ri:steering-line" /> 
                    <a className='link' href='/'>
                        <Logo>LAMA.</Logo>
                    </a>
                </a>
                <p className='footer__description'>
                    we offer the best batteries and fuel cells <br/>
                    of the most recognized brands in <br/>
                    the world.
                </p>
            </div>

            <div className='footer__content'>
                <h3 className='footer__title'>
                    Company
                </h3>
                <ul className='footer__links'>
                    <li>
                        <a href='#' className='footer__link link'>About</a>
                    </li>
                    <li>
                        <a href='/products/battery' className='footer__link link'>Batteries</a>
                    </li>
                    <li>
                        <a href='#' className='footer__link link'>History</a>
                    </li>
                    <li>
                        <a href='/products' className='footer__link link'>Shop</a>
                    </li>
                </ul>
            </div>

            <div className='footer__content'>
                <h3 className='footer__title'>
                    Information
                </h3>
                <ul className='footer__links'>
                    <li>
                        <a href='/cart' className='footer__link link'>Cart</a>
                    </li>
                    <li>
                        <a href='/wishlist' className='footer__link link'>Wishlist</a>
                    </li>
                    <li>
                        <a href='/contactus' className='footer__link link'>Contact us</a>
                    </li>
                    <li>
                        <a href='#' className='footer__link link'>Services</a>
                    </li>
                </ul>
            </div>

            <div className='footer__content'>
                <h3 className='footer__title'>
                    Follow Us
                </h3>

                <ul className='footer__social'>
                    <a href='#' target="_blank" className='footer__social-link'>
                        <Icon icon="ri:facebook-fill" /> 
                    </a>
                    <a href='#' target="_blank" className='footer__social-link'>
                        <Icon icon="ri:instagram-line" /> 
                    </a>
                    <a href='#' target="_blank" className='footer__social-link'>
                        <Icon icon="ri:twitter-line" /> 
                    </a>
                </ul>
            </div>

            
        </div>
    </section>
  )
}

export default Footer
