import React from "react";
import "./App.css";

type SquareState = "O" | "X" | "";

type SquareProps = {
  value: SquareState;
  onClick: () => void;
};

const Square = (props: SquareProps) => {
  return (
    // <button className="square" onClick={props.onClick}>
    <button className="square" onClick={() => console.log("click")}>
      {props.value}
    </button>
  );
};

// class Board extends React.Component {
const Board = () => {
  const status = "Next player: X";

  const renderSquare = (i: number) => {
    return <Square value="" onClick={() => onclick} />;
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

function App() {
  const [state, setState] = useState<GameState>;

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default App;
