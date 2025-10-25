import React from "react";
import man from '../img/perfilNTT.png';
import "./about.css";
import alamy from '../img/CV_Alamy_Neto_en.pdf'

export default function About(){
    const baixar = () => {
        window.location.href = alamy
    }
    return (
        <>
        <section className="section pt-0" id="about">
       
        <div className="container text-center">
         
            <div className="about">
                <div className="about-img-holder">
                    <img src={man} className="about-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                </div>
                <div className="about-caption">
                    <p className="section-subtitle">Who Am I ?</p>
                    <h2 className="section-title mb-3">About Me</h2>
                    <p>
                    I am dedicated, communicative, creative and committed to the tasks given to me.
                    Passionate about technology since childhood and aroused the curiosity to learn everything
                    could alone make me discover automatic data. Creative and innovative, I breathe
                    innovative ideas and always new business challenges.</p>
                    <p>I'm a frontend specialist with experience in building micro frontend architecture.</p>
                    <p>I had a development base in a digital agency building many websites for large companies in my region.
                    An eternal student of "human behavior" I create my applications always thinking about the end user, my mission is to make the user use the created systems without having to consult a FAQ.</p>
                    <p>I really want to live in Portugal and I'm preparing for this mission.</p>
                    <p>Father of two girls Lindas Luna and Leona and married to a virtuous woman, Maria Gabriela, and all my dedication is to make them proud of me and to guarantee their safety.</p>
                    <p>
                    I am a practitioner of Aikido and Iaido, an eternal student of Bushido I practice the principles in my work environment, such as commitment, fidelity, loyalty, Honor.
                    </p>

                    <p><i>+55 81 99971-2812 whatsapp</i></p>
                    <p><i>alamy.nt@outlook.com</i></p>
                    <p><i>alamy.nt@gmail.com</i></p>
               
                    <button onClick={baixar} className="btn-rounded btn btn-outline-primary mt-4">Download my CV</button>
                </div>              
            </div>
        </div>
    </section>
    
        </>
    );
}