import React from "react";
import logo from "../assets/logo.jpg";

export default function Footer() {
    return (
        <div>
            <div className="footer-style">

                <img
                    src={logo}
                    style={{ marginTop: "1.3%", width: "3%", borderRadius: "20px" }}
                    alt="banner with purple pundit logo"
                />
                <p style={{ color: "white", marginTop: "1px" }}>
                    PurplePundit.co V1.0.0     ᛫     Developed by Allan Serna & Jahziel Villasana     ᛫     Powered by NewsApi.org
                </p>
            </div>
        </div>
    )
}