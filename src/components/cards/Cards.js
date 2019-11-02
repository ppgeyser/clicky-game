import React from "react";
import "./styles.css";

function Cards(props) {
    return (
        <div class="col-3 my-2" id={props.id}>
            <img src={props.image} class="card-img-top" alt={props.driverName} />
        </div>
    )
};

export default Cards;