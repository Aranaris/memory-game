import { useState } from "react";
import React from "react";

function Board(props) {
    const [numCards, setNumCards] = useState(3 + props.currentLevel);
    const [cardArray, setCardArray] = useState([]);

    const updateNumCards = () => {
        setNumCards(3 + props.currentLevel);
    }

    const addCard = (id) => {
        setCardArray(cardArray => [...cardArray, id]);
    }

    const generateCards = () => {
        for (let i = 0; i < numCards; i++) {
            addCard(i);
        }
    }

    return (
        <div className="Board">
            <button onClick={generateCards}>Generate</button><br />
            <div className="card-container">
                {numCards} Card(s) go here.
                {cardArray.map((card) => {
                    return <div key={card}>{card}</div>
                })}
            </div>
        </div>
    )
}

export default Board;