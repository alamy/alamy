import React from "react";
import './home.css';
import banner from '../img/banner.jpg';

export default function Home() {
    const git = () => {
        window.location = "https://github.com/alamy";
    };

    const whatsapp = () => {
        window.location = "https://wa.me/5581999712812";
    };

    return (
        <>
            <header id="home" className="header" style={{ backgroundImage: `url(${banner})` }}>
                <div className="overlay"></div>
                <div className="header-content container">
                    <h1 className="header-title">
                        <span className="up">HI!</span>
                        <span className="down">I am Alamy Neto</span>
                    </h1>
                    <p className="header-subtitle">FRONTEND WEB DESIGNER</p>

                    <button onClick={git} className="btn btn-primary" style={{ marginRight: '10px' }}>Visit My GitHUB</button>
                    <button onClick={whatsapp} className="btn btn-secondary">Contact Me on WhatsApp</button>
                </div>
            </header>
        </>
    );
}