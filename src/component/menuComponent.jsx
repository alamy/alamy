import React from "react";
import './menuComponent.css'

   
    
export default function MenuComponent() {
    let rows = ['Home', 'About', 'Skill', 'New´s', 'Contact']
    return(<>
        <div className="custom-navbar">
        <div className="container">
            <div className="logo">Alamy Neto</div>         
            <ul className="nav">
            {rows.map((row)=>(
                <li className="item" ><a href={row} class="link">{row}</a></li>
            ))}
            </ul>
        </div>          
    </div>
    </>
    )
}