import React from "react";
import "./styles.css";

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4"><img src="./assets/images/f1_logo.svg" className="pb-3" id="f1_logo" alt="f1 logo" /> Clicky Game</h1>
                <p className="lead">Click on a driver image to earn points, but don't click on any driver more than once!</p>
            </div>
        </div>
    )
};

export default Jumbotron;