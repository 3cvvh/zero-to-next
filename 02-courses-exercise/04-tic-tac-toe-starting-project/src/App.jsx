import GameBoard from "./Components/GameBoard";
import PlayerInfo from "./Components/PlayerInfo";
import { useState } from "react";

export default function App() {
  const [symbolActive, setSymbolActive] = useState("X");
  // const [gameBoard,setGameBoard] = useState(gameState.board)
  const [gameTurns, setGameTurns] = useState([]);
  function handleSquare(indexRow, indexCol) {
    // setSymbolActive(symbol => symbol == "X" ? "O" : "X" )
    setGameTurns((prevTurns) => {
      let playerActive = "X";
      if (prevTurns.length > 0 && prevTurns[0].player == "X") {
        playerActive = "O";
      }
      const updateTurns = [
        {
          square: { rowIndex: indexRow, colIndex: indexCol },
          player: playerActive,
        },
        ...prevTurns,
      ];
      return updateTurns;
    });
  }
  // const handleSelect = (indexRow,indexCol) => {
  //   setGameBoard(prevBoard => {
  //     let updatedBoard = [...prevBoard.map(innerArray => [...innerArray])]
  //     updatedBoard[indexRow][indexCol] = symbolActive
  //       return updatedBoard
  //   })
  // }
  console.log(gameTurns);
  return (
    <main>
      <div id="game-container">
        <ol className="highlight-player" id="players">
          <PlayerInfo
            isActive={symbolActive == "X"}
            initialName={"player 1"}
            symbol={"X"}
          />
          <PlayerInfo
            isActive={symbolActive == "O"}
            initialName={"player 2"}
            symbol={"O"}
          />
        </ol>
        <GameBoard
          selectSquare={handleSquare}
          turns={gameTurns}
          symbolActive={symbolActive}
        />
      </div>
      LOG
    </main>
  );
}
