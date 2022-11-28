import React from "react";
import './skill.css';
import PencilCase from '../img/pencil-case.svg';
import Responsive from '../img/responsive.svg';
import Toolbox from '../img/toolbox.svg';
import Analytics from '../img/analytics.svg';

export default function Skill(){
    return(
    <>
        <section class="section" id="service">
            <div class="container text-center">
                <p class="section-subtitle">What I Do ?</p>
                <h6 class="section-title mb-6">Skill</h6>
                <div class="row">
                    <div class="col-md-6 col-lg-3">
                        <div class="service-card">
                            <div class="body">
                                <img src={Toolbox} alt="" class="icon" />
                                <h6 class="title">Micro FrontEnd</h6>
                                <p class="subtitle">As a perpetual student , I 've been keeping up to date on new architectures for building web views .</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="service-card">
                            <div class="body">
                                <img src={Responsive} alt="" class="icon" />
                                <h6 class="title">React Js / Angular / Vue js</h6>
                                <p class="subtitle">Technical knowledge in the main technologies used in the market for the frontend, I have an adaptability facility</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="service-card">
                            <div class="body">
                                <img src={PencilCase} alt="" class="icon" />
                                <h6 class="title">Css3 / Sass / Less</h6>
                                <p class="subtitle">In-depth knowledge of major style processors as well as in-depth knowledge of CSS3 stylesheets</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="service-card">
                            <div class="body">
                                <img src={Analytics} alt="" class="icon" />
                                <h6 class="title">Leadersheep</h6>
                                <p class="subtitle">I have been preparing and studying about having good leadership and how to form a high performance team, I have several techniques to apply with the team that is assigned</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}