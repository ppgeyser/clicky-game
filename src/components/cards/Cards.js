import React from "react";
import "./styles.css";

function Cards(props) {
    return (
        <div class="col-3 my-2">
            <img src={props.image} class="card-img-top" alt={props.driverName} onClick={() => props.handleOnClick(props.id)} />
        </div>
    )
};

export default Cards;