import { Link } from "react-router-dom";
import React from "react";
import './menuComponent.css';

   
    
export default function MenuComponent() {
    return(<>
        <div className="custom-navbar">
        <div className="container">
            <div className="logo">Alamy Neto</div>         
            <ul className="nav">
                <Link to="/"><li className="item" ><p className="link">Home</p></li></Link>
                <Link to="/abolt"> <li className="item" ><p className="link">About</p></li></Link>
                <Link to="/skill">  <li className="item" ><p className="link">Skill</p></li></Link>
                <Link to="/contact"> <li className="item" ><p className="link">Contact</p></li></Link>
            </ul>
        </div>          
    </div>
    </>
    )
}