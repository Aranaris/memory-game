import { useState } from "react";
import React from "react";
import Card from "./Card";
import "../styles/Board.css";

function Board(props) {
    const [cardArray, setCardArray] = useState([]);
    const [selectedCards, setSelectedCards]  = useState([]);

    const addCard = (id) => {
        setCardArray(cardArray => [...cardArray, id]);
    }

    const generateCards = (numCards) => {
        setCardArray([]);
        for (let i = 0; i < numCards; i++) {
            addCard(i);
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
            let newArray = [...selectedCards, id];
            if (newArray.length === cardArray.length)  {
                props.incrementLevel();
                generateCards(cardArray.length + 1);
                setSelectedCards([]);
            } else {
                setSelectedCards(newArray);
                randomizeCards();
            }
        }
    }

    if (!props.gameEnd) {
        return (
            <div className="Board">
                <button onClick={() => {
                    generateCards(props.currentLevel + 3);
                }}>Start Game</button><br />
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
                    Game Over! That card has already been selected!
                </div>
            </div>
        )
    }

}

export default Board;