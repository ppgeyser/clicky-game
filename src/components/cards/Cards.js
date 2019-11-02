import React from "react";
import "./styles.css";

function Cards(props) {
    return (
        <div class="card" id={props.id}>
            <img src={props.image} class="card-img-top" alt={props.driverName} />
        </div>
    )
};

export default Cards;