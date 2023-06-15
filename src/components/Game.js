import { useState } from "react";
import React from "react";
import Board from "./Board";

function Game() {
    const [playerScore, setPlayerScore] = useState(0);
    const [currentLevel, setCurrentLevel] = useState(1);

    const [bestScore, setBestScore] = useState(0);

    const [gameEnd, setGameEnd] = useState(false);

    const toggleGameEnd = () => {
        setGameEnd(!gameEnd);
    }

    const incrementScore = () => {
        setPlayerScore(playerScore + 1);
    }

    const incrementLevel = () => {
        setCurrentLevel(currentLevel + 1);
    }

    const resetScore = () => {
        if (playerScore > bestScore) {
            setBestScore(playerScore);
        }
        setPlayerScore(0);
    }

    const resetLevel = () => {
        setCurrentLevel(1);
    }


    const resetGame = () => {
        resetScore();
        resetLevel();
        if (gameEnd) {
            toggleGameEnd();
        }
    }

    return (
        <div className="Game">
            <div id="best-score">Best Score: {bestScore}</div>
            <div id="level">Current Level: {currentLevel}</div>
            <div id="score">Current Score: {playerScore}</div><br />
            <Board
                currentLevel={currentLevel}
                toggleGameEnd={toggleGameEnd}
                gameEnd={gameEnd}
                incrementScore={incrementScore}
                incrementLevel={incrementLevel}
                resetGame={resetGame}
            />
        </div>
    )
}

export default Game;