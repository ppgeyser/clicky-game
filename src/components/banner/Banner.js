import React from "react";
import "./styles.css";

function Banner(props) {
    return (
        <nav>
            <ul class="nav nav-fill">
                <li class="nav-item">Score: {props.score}</li>
                <li class="nav-item">Clicky Game</li>
                <li class="nav-item">Wins: {props.wins}</li>
            </ul>
        </nav>

        
    )
};

export default Banner;