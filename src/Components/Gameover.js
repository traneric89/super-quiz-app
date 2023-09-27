import React from "react";

const Gameover = ({ score, playAgain }) => {
  return (
    <div className="endscreen">
      <h1>GAME OVER</h1>
      <h2>Score: {score}</h2>
      <button className="again-button" onClick={playAgain}>
        Play Again?
      </button>
    </div>
  );
};

export default Gameover;
