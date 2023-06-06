import { useState } from "react";
import React from "react";
import Board from "./Board";

function Game() {
    const [playerScore, setPlayerScore] = useState(0);
    const [currentLevel, setCurrentLevel] = useState(1);

    const incrementScore = () => {
        setPlayerScore(playerScore + 1);
    }

    const incrementLevel = () => {
        setCurrentLevel(currentLevel + 1);
    }

    const resetScore = () => {
        setPlayerScore(0);
    }

    const resetLevel = () => {
        setCurrentLevel(1);
    }

    const skipToLevel = (level) => {
        setCurrentLevel(level);
    }

    const resetGame = () => {
        resetScore();
        resetLevel();
    }

    return (
        <div className="Game">
            <div id="level">Current Level: {currentLevel}</div><button onClick={incrementLevel}>+</button>
            <div id="score">Score: {playerScore}</div><button onClick={incrementScore}>+</button><br />
            <button onClick={resetGame}>Reset Game</button>
            <Board
                currentLevel={currentLevel}
            />
        </div>
    )
}

export default Game;