import React from "react";
import "./styles.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{props.jumbotronMessage}</h1>
                <p className="lead">Click on a driver image to earn points, but don't click on any driver more than once!</p>
            </div>
        </div>
    )
};

export default Jumbotron;