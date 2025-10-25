import React from "react";
import './skill.css';
import Responsive from '../img/responsive.svg';
import Angular from '../img/angular.svg';
import Reactsvg from '../img/React.svg';
import VueSvg from '../img/vue.svg';
import FigmanSvg from '../img/figman.svg';
import cssSvg from '../img/css.svg';
import leadershipSvg from '../img/leadership.svg';

const skills = [
    {
        icon: Responsive,
        title: "Micro FrontEnd",
        subtitle: "As a perpetual student, I've been keeping up to date on new architectures for building web views."
    },
    {
        icon: Reactsvg,
        title: "React Js",
        subtitle: "Solid Knowledge in ReactJS, using best practices."
    },
    {
        icon: Angular,
        title: "Angular",
        subtitle: "Working in large international companies with Angular from version 8 to 13"
    },
    {
        icon: VueSvg,
        title: "Vue js",
        subtitle: "Vast knowledge in Vue.js, building small projects and personal projects, winner of HackerCidadão 7.0 using this technology."
    },
    {
        icon: FigmanSvg,
        title: "Figma",
        subtitle: "Enthusiast in Figma, a platform that helps me with my ideas and proposals for clients."
    },
    {
        icon: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
        title: ".NET",
        subtitle: "Experience in backend development using .NET technologies."
    },
    {
        icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        title: "PostgreSQL",
        subtitle: "Proficient in relational database management with PostgreSQL."
    },
    {
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
        title: "MongoDB",
        subtitle: "Experience in NoSQL database management using MongoDB."
    },
    {
        icon: cssSvg,
        title: "Css3 / Sass / Less",
        subtitle: "Absolute mastery of style sheets, my main skill, I am concerned with accessibility and dynamism of my applications."
    },
    {
        icon: leadershipSvg,
        title: "Leadership",
        subtitle: "Graduated in Coach and in Behavioral Profile analysis, I have complete knowledge on how to lead a high performance team."
    },
    {
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9GlozyrEsA25S68xqsWEgejZkSQPi2L7SBw&s",
        title: "Swagger",
        subtitle: "Experience in API documentation and testing using Swagger."
    }
];

export default function Skill() {
    return (
        <>
            <section className="section" id="service">
                <div className="container text-center">
                    <p className="section-subtitle">What I Do ?</p>
                    <h6 className="section-title mb-6">Skill</h6>
                    <div className="row">
                        {skills.map((skill, index) => (
                            <div className="col-md-6 col-lg-3" key={index}>
                                <div className="service-card">
                                    <div className="body">
                                        <img src={skill.icon} alt="" className="icon" />
                                        <h6 className="title">{skill.title}</h6>
                                        <p className="subtitle">{skill.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}