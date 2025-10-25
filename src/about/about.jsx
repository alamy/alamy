import React, { useState, useEffect } from "react";
import man1 from '../img/perfilNTT2.jpg';
import "./about.css";
import alamy from '../img/alamy_neto.pdf';

export default function About() {
    const baixar = () => {
        window.location.href = alamy;
    };

    return (
        <>
        <section className="section pt-0" id="about">
        <div className="container text-center">
            <div className="about">
                <div className="about-img-holder">
                    <img src={man1} className="about-img" alt="Profile picture of Alamy Neto" />
                </div>
                <div className="about-caption">
                    <p className="section-subtitle">Who Am I?</p>
                    <h2 className="section-title mb-3">About Me</h2>
                    <p>I am dedicated, communicative, creative, and committed to the tasks assigned to me. Passionate about technology since childhood, my curiosity led me to learn on my own. Creative and innovative, I breathe new ideas and business challenges.</p>
                    <ul>
                        <li>Frontend specialist with experience in micro frontend architecture.</li>
                        <li>Development background in a digital agency, creating many websites for large companies in my region.</li>
                        <li>An eternal student of 'human behavior,' I create applications always thinking about the end user, with the mission of making systems intuitive.</li>
                        <li>I really want to live in Portugal and I am preparing for this mission.</li>
                        <li>Father of two beautiful girls, Luna and Leona, and married to Maria Gabriela. All my dedication is to make them proud and ensure their safety.</li>
                        <li>Aikido and Iaido practitioner, I apply the principles of Bushido in the work environment, such as commitment, fidelity, loyalty, and honor.</li>
                    </ul>
                    <p><i>Phone: +55 81 99712812</i></p>
                    <p><i>Email: alamy.nt@gmail.com</i></p>
                    <button onClick={baixar} className="btn-rounded btn btn-outline-primary mt-4">Download My CV</button>
                </div>              
            </div>
        </div>
        </section>
        </>
    );
}