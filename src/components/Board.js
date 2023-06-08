import { useState } from "react";
import React from "react";
import Card from "./Card";
import uniqid from "uniqid";
import "../styles/Board.css";

function Board(props) {
    let numCards = props.currentLevel + 3;
    // const [numCards, setNumCards] = useState(3 + props.currentLevel);
    const [cardArray, setCardArray] = useState([]);

    const addCard = (id) => {
        setCardArray(cardArray => [...cardArray, id]);
    }

    const generateCards = () => {
        if (cardArray.length < numCards) {
            for (let i = 0; i < numCards; i++) {
                addCard(uniqid());
            }
        }
    }

    return (
        <div className="Board">
            <button onClick={generateCards}>Generate</button><br />
            {numCards} Card(s) go here.
            <div className="card-container">
                {cardArray.map((card) => {
                    return <Card key={card} value={card}></Card>
                })}
            </div>
        </div>
    )
}

export default Board;