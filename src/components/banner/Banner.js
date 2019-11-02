import React from "react";
import "./styles.css";

function Banner(props) {
    return (
        <nav>
            <ul className="navbar fixed-top nav nav-fill">
                <li className="nav-item">Score: {props.score}/20</li>
                <li className="nav-item"><img src="./assets/images/f1_logo.svg" id="f1_logo" alt="F1 Logo"/> Clicky Game</li>
                <li className="nav-item">Wins: {props.wins}</li>
            </ul>
        </nav>

        
    )
};

export default Banner;