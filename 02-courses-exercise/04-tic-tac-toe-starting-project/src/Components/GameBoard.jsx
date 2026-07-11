import { useState } from "react";
const gameState = {
  board: Array(3)
    .fill(null)
    .map(() => Array(3).fill(null)),
};
export default function GameBoard({ symbolActive, selectSquare, turns }) {
  console.log(turns);
  for (let turn of turns) {
    const { square, player } = turn;
    const { rowIndex, colIndex } = square;
    gameState.board[rowIndex][colIndex] = player;
  }
  return (
    <ol id="game-board">
      {gameState.board.map((row, indexRow) => (
        <li key={indexRow}>
          <ol>
            {row.map((col, indexCol) => (
              <li key={indexCol}>
                <button onClick={() => selectSquare(indexRow, indexCol)}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
