import { useState } from "react";
import React from "react";

function Game() {
    const [playerScore, setPlayerScore] = useState(0);

    const incrementScore = () => {
        setPlayerScore(playerScore + 1);
    }

    const resetScore = () => {
        setPlayerScore(0);
    }

    return (
        <div className="Game">
            <div id="score">Score: {playerScore}</div>
        </div>
    )
}

export default Game;