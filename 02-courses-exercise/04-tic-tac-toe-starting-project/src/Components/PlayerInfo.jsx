import { useState } from "react";

export default function PlayerInfo({ isActive, initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  const handleBtn = () => {
    setIsEditing((state) => !state);
  };
  const onChangeName = (nameInput) => {
    setPlayerName((p) => (p = nameInput));
  };
  return (
    <li className={`${isActive == true ? "active" : " "}`}>
      <span className="player">
        {isEditing == false ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            value={playerName}
            onChange={() => onChangeName(event.target.value)}
            type="text"
          />
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleBtn}>{isEditing ? "save" : "edit"}</button>
      </span>
    </li>
  );
}
