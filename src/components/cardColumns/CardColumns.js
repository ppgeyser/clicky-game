import React from "react";
import "./styles.css"

function CardColumns(props) {
    return (
        <div className="container">
            <div className="row">
                {props.children}
            </div>
        </div>
    )
}

export default CardColumns;