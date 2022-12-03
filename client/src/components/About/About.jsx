import React from 'react'
import "./about.css"


const About = () => {
  return (
    
    <section class="about__section" id='about'>
        <div class="about__container container grid">
            <div class="about__group">
                <img src='https://www.fev.com/uploads/media/FEV_Fuel_Cell_01.png' alt='' class="about__img"></img>
                {/*<div class="about__card">
                    <h3 class="about__card-title">2.500+</h3>
                    <p class="about__card-description">
                        Supercharges placed along popular routes
                    </p>
  </div>*/}
            </div>

            <div class="about__data">
                <h2 class="section__title about__title">
                    Machines with <br/> Future Technology
                </h2>

                <p class="about__description">
                Better batteries have the potential to reduce the transport sector’s carbon footprint, help power grids run more efficiently, and much more. 
                The Commission’s large-scale and long-term research initiative Battery 2030+ will gather leading researchers in Europe to achieve major advances in battery science and technology.
                </p>

                <a href='#' class="button link"> Know more </a>
            </div>
        </div>
    </section>
  )
}

export default About
