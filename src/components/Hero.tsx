import React from "react";
import photoGridSrc from "../assets/images/hero.png"

export default function Navbar() {
    return (
        <section className="hero">
            <img src={photoGridSrc} className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}