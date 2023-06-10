import React from "react";
import "../styles/Card.css";

function Card(props) {
    return (
        <div className="Card" onClick={()=>{
            props.selectCard(props.value);
            }}>
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