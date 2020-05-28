import React, { useContext } from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="main-nav">
            <Link to="/home" className={"nav-link"}>Home</Link>
            <Link to="/mission" className={"nav-link"}>Mission</Link>
            <Link to="/team" className={"nav-link"}>Team</Link>
            <Link to="/contactpage" className={"nav-link"}>Contact Us</Link>
        </div>
    )
}
