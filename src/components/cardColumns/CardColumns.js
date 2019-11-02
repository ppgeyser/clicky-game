import React from "react";

function CardColumns(props) {
    return (
        <div className="card-columns">
            {props.children}
        </div>
    )
}

export default CardColumns;