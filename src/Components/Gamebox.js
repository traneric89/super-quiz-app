import React from "react";
import { useState, useEffect } from "react";

const Gamebox = ({ gameData, currentQuestionIndex, onClick, showAnswer }) => {
  //State to show user which option selected
  const [optionSelected, setOptionSelected] = useState(-1);

  //Function updates user selected option
  const optionClicked = (optionIndex) => {
    setOptionSelected(optionIndex);
    onClick(optionIndex);
  };

  //When new question/current question index changes, reset option selected
  useEffect(() => {
    setOptionSelected(-1);
  }, [currentQuestionIndex]);

  return (
    <div className="gamebox">
      <div className="question">
        <h2>{gameData[currentQuestionIndex].question}</h2>
      </div>
      <div className="options-container">
        <div
          className="options"
          onClick={() => optionClicked(0)}
          style={{
            backgroundColor:
              showAnswer === 1 && gameData[currentQuestionIndex].answer === 0
                ? "rgb(76, 176, 80)"
                : showAnswer === 1 &&
                  gameData[currentQuestionIndex].answer !== 0
                ? "rgb(251, 54, 110)"
                : showAnswer === 0 && optionSelected === 0
                ? "rgb(248, 201, 45)"
                : "rgb(89, 183, 238)",
            pointerEvents: optionSelected === -1 ? "auto" : "none",
          }}
        >
          <h2>{gameData[currentQuestionIndex].options[0]}</h2>
        </div>
        <div
          className="options"
          onClick={() => optionClicked(1)}
          style={{
            backgroundColor:
              showAnswer === 1 && gameData[currentQuestionIndex].answer === 1
                ? "rgb(76, 176, 80)"
                : showAnswer === 1 &&
                  gameData[currentQuestionIndex].answer !== 1
                ? "rgb(251, 54, 110)"
                : showAnswer === 0 && optionSelected === 1
                ? "rgb(248, 201, 45)"
                : "rgb(89, 183, 238)",
            pointerEvents: optionSelected === -1 ? "auto" : "none",
          }}
        >
          <h2>{gameData[currentQuestionIndex].options[1]}</h2>
        </div>
        <div
          className="options"
          onClick={() => optionClicked(2)}
          style={{
            backgroundColor:
              showAnswer === 1 && gameData[currentQuestionIndex].answer === 2
                ? "rgb(76, 176, 80)"
                : showAnswer === 1 &&
                  gameData[currentQuestionIndex].answer !== 2
                ? "rgb(251, 54, 110)"
                : showAnswer === 0 && optionSelected === 2
                ? "rgb(248, 201, 45)"
                : "rgb(89, 183, 238)",
            pointerEvents: optionSelected === -1 ? "auto" : "none",
          }}
        >
          <h2>{gameData[currentQuestionIndex].options[2]}</h2>
        </div>
        <div
          className="options"
          onClick={() => optionClicked(3)}
          style={{
            backgroundColor:
              showAnswer === 1 && gameData[currentQuestionIndex].answer === 3
                ? "rgb(76, 176, 80)"
                : showAnswer === 1 &&
                  gameData[currentQuestionIndex].answer !== 3
                ? "rgb(251, 54, 110)"
                : showAnswer === 0 && optionSelected === 3
                ? "rgb(248, 201, 45)"
                : "rgb(89, 183, 238)",
            pointerEvents: optionSelected === -1 ? "auto" : "none",
          }}
        >
          <h2>{gameData[currentQuestionIndex].options[3]}</h2>
        </div>
      </div>
    </div>
  );
};

export default Gamebox;
