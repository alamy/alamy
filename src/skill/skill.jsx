import React from "react";
import './skill.css';
import Responsive from '../img/responsive.svg';
import Angular from '../img/angular.svg';
import Reactsvg from '../img/React.svg';
import VueSvg from '../img/vue.svg';
import FigmanSvg from '../img/figman.svg';
import adobeSvg from '../img/adobeXD.svg';
import cssSvg from '../img/css.svg';
import leadershipSvg from '../img/leadership.svg';

export default function Skill(){
    return(
    <>
        <section className="section" id="service">
            <div className="container text-center">
                <p className="section-subtitle">What I Do ?</p>
                <h6 className="section-title mb-6">Skill</h6>
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src={Responsive} alt="" className="icon" />
                                <h6 className="title">Micro FrontEnd</h6>
                                <p className="subtitle">As a perpetual student , I 've been keeping up to date on new architectures for building web views .</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src={Reactsvg} alt="" className="icon" />
                                <h6 className="title">React Js</h6>
                                <p className="subtitle">Solid Knowledge in ReactJS, using best practices.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src={Angular} alt="" className="icon" />
                                <h6 className="title">Angular</h6>
                                <p className="subtitle">Working in large international companies with Angular from version 8 to 13</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src={VueSvg} alt="" className="icon" />
                                <h6 className="title"> Vue js</h6>
                                <p className="subtitle">Vast knowledge in Vue.js, building small projects and personal projects, winner of HackerCidadão 7.0 using this technology.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src={FigmanSvg} alt="" className="icon" />
                                <h6 className="title"> Figman</h6>
                                <p className="subtitle">Enthusiast in Figman, a platform that helps me with my ideas and proposals for clients.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src={adobeSvg} alt="" className="icon" />
                                <h6 className="title"> Adobe XD</h6>
                                <p className="subtitle">Adobe XD lover, I build personal and professional proposals with this tool. Full knowledge</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src={cssSvg} alt="" className="icon" />
                                <h6 className="title">Css3 / Sass / Less</h6>
                                <p className="subtitle">Absolute mastery of style sheets, my main skill, I am concerned with accessibility and dynamism of my applications.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src={leadershipSvg} alt="" className="icon" />
                                <h6 className="title">Leadersheep</h6>
                                <p className="subtitle">Graduated in Coach and in Behavioral Profile analysis, I have complete knowledge on how to lead a high performance team.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}