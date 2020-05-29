import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "../css/Nav.css"

export default function Nav() {
    return (
        <div className="main-nav">
            <Link to="/" className={"nav-link"}><img src={require("../../images/logo.svg")} /></Link>
            <Link to="/mission" className={"nav-link"}>Mission</Link>
            <Link to="/team" className={"nav-link"}>Team</Link>
            <Link to="/contactpage" className={"nav-link"}>Contact Us</Link>
        </div>
    )
}
