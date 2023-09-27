import React from "react";
import { useState, useEffect } from "react";

const Timer = ({
  gameData,
  currentQuestionIndex,
  roundComplete,
  displayAnswer,
}) => {
  //State for how much time alloted for given question
  const [timeLeft, setTimeLeft] = useState(gameData[currentQuestionIndex].time);

  //Countdown timer each second to update user on time left to answer question
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
    if (timeLeft === 0) {
      clearTimeout(timer);
      displayAnswer();
      const answerTimer = setTimeout(() => {
        roundComplete();
        setTimeLeft(gameData[currentQuestionIndex].time);
      }, 3000);
    }
  }, [timeLeft]);

  return (
    <div className="timer-div">
      <h2>Time Left: </h2>
      <div className="time-container">
        <h2 className="time">{timeLeft}</h2>
      </div>
    </div>
  );
};

export default Timer;
