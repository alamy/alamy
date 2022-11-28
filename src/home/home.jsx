import React from "react";
import './home.css';

export default function Home(){
    return (
        <>
         <header id="home" class="header">
        <div class="overlay"></div>
        <div class="header-content container">
            <h1 class="header-title">
                <span class="up">HI!</span>
                <span class="down">I am Alamy testeteste</span>
            </h1>
            <p class="header-subtitle">FRONTEND WEB DESIGNER</p>            

            <button class="btn btn-primary">Visit My Works</button>
        </div>              
    </header>

    
        </>
    );
}