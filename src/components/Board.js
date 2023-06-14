import { useState } from "react";
import React from "react";
import Card from "./Card";
import "../styles/Board.css";

function Board(props) {
    let numCards = props.currentLevel + 3;
    // const [numCards, setNumCards] = useState(3 + props.currentLevel);
    const [cardArray, setCardArray] = useState([]);
    const [selectedCards, setSelectedCards]  = useState([]);

    const addCard = (id) => {
        setCardArray(cardArray => [...cardArray, id]);
    }

    const generateCards = () => {
        if (cardArray.length < numCards) {
            for (let i = 0; i < numCards; i++) {
                addCard(i);
            }
        }
    }

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    const randomizeCards = () => {
        let newArray = [];
        while (cardArray.length > 0) {
            newArray.push(cardArray.splice(getRandomInt(cardArray.length),1)[0]);
        }
        setCardArray(newArray);
    }

    const selectCard = (id) => {
        if (props.gameEnd) {
            console.log("Game has Ended!")
        } else if (selectedCards.includes(id)) {
            console.log("Game Over!")
            props.toggleGameEnd();
        } else {
            props.incrementScore();
            setSelectedCards(selectedCards => [...selectedCards, id]);
            randomizeCards();
            // if (selectedCards.length === cardArray.length) {
            //     props.incrementLevel();
            //     setSelectedCards([]);
            // }
        }
    }

    if (!props.gameEnd) {
        return (
            <div className="Board">
                <button onClick={generateCards}>Generate</button><br />
                {numCards} Card(s) go here.
                <div className="card-container">
                    {cardArray.map((cardValue) => {
                        return <Card key={cardValue} value={cardValue} selectCard={selectCard}></Card>
                    })}
                </div>
            </div>
        )}
    else {
        return (
            <div className="Board">
                <button onClick={props.resetGame}>Reset Game</button>
                <div className="game-over-message">
                    Game Over! That has already been selected!
                </div>
            </div>
        )
    }

}

export default Board;