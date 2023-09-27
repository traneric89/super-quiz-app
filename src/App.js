import React from "react";
import Header from "./Components/Header";
import Timer from "./Components/Timer";
import Gamebox from "./Components/Gamebox";
import { useState, useEffect, useRef } from "react";
import Loader from "./Components/Loader";
import Gameover from "./Components/Gameover";

const App = () => {
  //State Management
  const [data, setData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [correctAnswer, setCorrectAnswer] = useState();
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(false);

  //GET request for game data
  useEffect(() => {
    try {
      const fetchEvents = async () => {
        const response = await fetch(
          "https://scs-interview-api.herokuapp.com/questions"
        );
        if (!response.ok) {
          throw new Error("Not 200 response");
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      };
      fetchEvents();
    } catch (error) {
      console.log(error);
    }
  }, []);

  //Updates correct answer for current question
  useEffect(() => {
    if (isMounted.current) {
      setCorrectAnswer(data[currentQuestionIndex].answer);
    } else {
      isMounted.current = true;
    }
  }, [currentQuestionIndex]);

  const answerClicked = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  //Time expired/round complete
  const roundComplete = () => {
    if (selectedAnswer === correctAnswer) {
      setScore((score) => score + 1);
    }
    if (currentQuestionIndex === data.length - 1) {
      setGameOver(true);
    } else {
      setCurrentQuestionIndex(
        (currentQuestionIndex) => currentQuestionIndex + 1
      );
      setSelectedAnswer(-1);
      setShowAnswer(0);
    }
  };

  //After time expires, show correct/incorrect answers
  const displayAnswer = () => {
    setShowAnswer(1);
  };

  //Resets current game data for new session
  const playAgain = () => {
    setScore(0);
    setSelectedAnswer(-1);
    setShowAnswer(0);
    setCurrentQuestionIndex(0);
    setGameOver(false);
  };

  return (
    <div className="background">
      {!gameOver ? (
        <div>
          <Header />
          {loading ? (
            <Loader />
          ) : (
            <div>
              <Timer
                gameData={data}
                currentQuestionIndex={currentQuestionIndex}
                roundComplete={roundComplete}
                displayAnswer={displayAnswer}
              />
              <Gamebox
                gameData={data}
                currentQuestionIndex={currentQuestionIndex}
                onClick={answerClicked}
                showAnswer={showAnswer}
              />
            </div>
          )}
        </div>
      ) : (
        <Gameover score={score} playAgain={playAgain} />
      )}
    </div>
  );
};

export default App;
