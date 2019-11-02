import React from "react";
import "./styles.css";

function Cards(props) {
    return (
        <div className="col-3 my-3">
            <img src={props.image} className="card-img-top" alt={props.driverName} onClick={() => props.handleOnClick(props.id)} />
        </div>
    )
};

export default Cards;