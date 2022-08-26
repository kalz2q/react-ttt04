import React from "react";
import "./App.css";
import { useState } from "react";

const status = "Next player: X";

function App() {
  const [squares, setSquares] = useState<Square[]>([
    { id: 0, value: "N" },
    { id: 1, value: "N" },
    { id: 2, value: "" },
    { id: 3, value: "N" },
    { id: 4, value: "N" },
    { id: 5, value: "N" },
    { id: 6, value: "N" },
    { id: 7, value: "N" },
    { id: 8, value: "O" },
  ]);
  // const [squares, setSquares] = useState<string[]>(Array(9).fill("kk"));
  type Square = {
    id: number;
    value: string;
  };

  const handleClick = (s: Square) => {
    let newSquares = squares;
    newSquares[3].value = "X";
    console.log(newSquares);
    setSquares(newSquares);
    console.log(squares);

    // for (var item in squares) {
    //   if (squares[item].id === s.id) {
    //     squares[item].value = "X";
    //   }
    // }
  };

  const renderSquare = (s: Square) => {
    return (
      <button className="square" onClick={() => handleClick(s)}>
        {s.value}
      </button>
    );
  };

  const Board = () => {
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(squares[0])}
          {renderSquare(squares[1])}
          {renderSquare(squares[2])}
        </div>
        <div className="board-row">
          {renderSquare(squares[3])}
          {renderSquare(squares[4])}
          {renderSquare(squares[5])}
        </div>
        <div className="board-row">
          {renderSquare(squares[6])}
          {renderSquare(squares[7])}
          {renderSquare(squares[8])}
        </div>
      </div>
    );
  };

  return (
    <div className="game">
      <div className="game-board">{Board()}</div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default App;
