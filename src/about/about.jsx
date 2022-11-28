import React from "react";
import man from '../img/man.png';
import "./about.css";

export default function About(){
    return (
        <>
        <section class="section pt-0" id="about">
       
        <div class="container text-center">
         
            <div class="about">
                <div class="about-img-holder">
                    <img src={man} class="about-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                </div>
                <div class="about-caption">
                    <p class="section-subtitle">Who Am I ?</p>
                    <h2 class="section-title mb-3">About Me</h2>
                    <p>
                    I am dedicated, communicative, creative and committed to the tasks that are delivered to me.
in love with technology since he was a child and aroused the curiosity to learn everything you
could alone, make me discover automatic data. Creative and innovative, I breathe
innovative ideas and always new business challenges.             
                    </p>
                    <button class="btn-rounded btn btn-outline-primary mt-4">Download CV</button>
                </div>              
            </div>
        </div>
    </section>
    
        </>
    );
}