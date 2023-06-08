import React from "react";
import "../styles/Card.css";

function Card(props) {
    return (
        <div className="Card">
            <div className="card-image">
                Image PlaceHolder
            </div>
            <div className="card-info">
                {props.value}
            </div>
        </div>
    )
}

export default Card;