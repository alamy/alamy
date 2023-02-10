import React from "react";
import './home.css';

export default function Home(){
    const git = () => {
        window.location = "https://github.com/alamy"
    }
    return (
        <>
         <header id="home" className="header">
            <div className="overlay"></div>
                <div className="header-content container">
                    <h1 className="header-title">
                        <span className="up">HI!</span>
                        <span className="down">I am Alamy Neto</span>
                    </h1>
                    <p className="header-subtitle">FRONTEND WEB DESIGNER</p>            

                    <button onClick={git} className="btn btn-primary">Visit My GitHUB</button>
            </div>              
        </header>
        </>
    );
}