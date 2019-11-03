import React from "react";
import "./styles.css";

function Banner(props) {
    return (
        <nav>
            <ul className="navbar fixed-top nav nav-fill">
                <li className="nav-item">Score: {props.score}/20</li>
                <li className="nav-item">{props.bannerMessage}</li>
                <li className="nav-item">Wins: {props.wins}</li>
            </ul>
        </nav>

        
    )
};

export default Banner;