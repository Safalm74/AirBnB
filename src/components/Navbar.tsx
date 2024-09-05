import React from "react";
import airBnbLogoSrc from "../assets/images/airbnbLogo.svg"

export default function Navbar() {
    return (
        <nav>
            <img
                className="nav--logo"
                src={airBnbLogoSrc} />
        </nav>
    )
}