import { useState } from "react";
import React from "react";
import "../styles/Player.css"

function Player() {
    const [playerName, setPlayerName] = useState("Player 1");
    const [newName, setNewName] = useState("");
    const [editPlayerName, setEditPlayerName] = useState(false);

    const toggleEditMode = () => {
        setEditPlayerName(!editPlayerName);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setPlayerName(newName);
        toggleEditMode();
    }

    const handleChange = (event) => {
        setNewName(event.target.value);
    }

    return (
        <div className="Player">
            <div className="player-name">{playerName} </div>
            {editPlayerName && (
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter Name" onChange={handleChange}>
                    </input>
                    <input type="submit" value="Submit"></input>
                    <button onClick={toggleEditMode}>Cancel</button>
                </form>
            )}
            {!editPlayerName && (<button onClick={toggleEditMode}>Edit Player</button>)}
        </div>
    )
}

export default Player;