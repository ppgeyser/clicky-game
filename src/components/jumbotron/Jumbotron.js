import React from "react";
import "./styles.css";

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Formula 1 Clicky Game</h1>
                <p className="lead">Click on a driver image to earn points, but don't click on any driver more than once!</p>
            </div>
        </div>
    )
};

export default Jumbotron;