import React from "react";
import './style.css';

export default function Contact() {
    return (
        <>
            <br /><br /><br />
            <section className="section" id="service">
                <div className="container text-center">
                    <p className="section-subtitle">My contacts</p>
                    <h6 className="section-title mb-4">Email: alamy.nt@gmail.com</h6>
                    <h6 className="section-title mb-4">Phone: +55 81 99712812</h6>
                    <h6 className="section-title mb-4">Linkedin: www.linkedin.com/in/alamy-neto/</h6>
                    <h6 className="section-title mb-4">@instagram: @alamy_neto</h6>

                    <p>
                        “Progress will come with constant practice.
                        Do not look for secret teachings that will lead nowhere. Trust your own experiences.”
                        <i>Morihei Ueshiba</i>
                    </p>
                </div>
            </section>
        </>
    );
}