import React from "react";
import "./styles.css";

function Banner(props) {
    return (
        <nav>
            <ul class="nav nav-fill">
                <li class="nav-item">Score: {props.score}/20</li>
                <li class="nav-item"><img src="./assets/images/f1_logo.svg" id="f1_logo" alt="F1 Logo"/> Clicky Game</li>
                <li class="nav-item">Wins: {props.wins}</li>
            </ul>
        </nav>

        
    )
};

export default Banner;