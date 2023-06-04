import { useState } from "react"
import React from "react"

function Player() {
    const [playerName, setPlayerName] = useState("Player 1");
    const [editPlayerName, setEditPlayerName] = useState(false);

    const toggleEditMode = () => {
        setEditPlayerName(!editPlayerName);
    }

    return (
        <div className="Game">
            {playerName} 
        </div>
    )
}

export default Player;