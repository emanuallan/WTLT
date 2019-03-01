import React from "react";
import logo from "../assets/logo.jpg";

export default function Footer() {
    return (
        <div>
            <div className="footer-style">

                <img
                    src={logo}
                    style={{ marginTop: "0.5%", width: "3%", borderRadius: "20px" }}
                    alt="banner with purple pundit logo"
                />
                <p style={{ color: "white", marginTop: "0px" }}>
                    PurplePundit.co     ᛫     Developed by Allan Serna & Jahziel Villasana     ᛫     Powered by NewsApi.org
                </p>
            </div>
        </div>
    )
}