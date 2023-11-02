import React, { useState, useEffect } from 'react';
import { fetchRandomRiddle } from '../utils/api';
import './RiddleDisplay.css';

const RiddleDisplay = () => {
  const [riddleData, setRiddleData] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [streak, setStreak] = useState(0);

  useEffect(() => {

    fetchRandomRiddle()
      .then((data) => setRiddleData(data))
      .catch((error) => console.error('Error fetching riddle:', error));
  }, []);

  const revealAnswer = () => {

    setShowAnswer(true);
  };

  const handleUserResponse = (isCorrect) => {

    if (isCorrect) {
      setStreak((prevStreak) => prevStreak + 1);
    } else {

      setStreak(0);
    }

    fetchRandomRiddle()
      .then((data) => {
        setRiddleData(data);
        setShowAnswer(false); 
      })
      .catch((error) => console.error('Error fetching riddle:', error));
  };

  return (
    <div className="riddle-display">
      {riddleData && (
        <>
          <h2>{riddleData.riddle}</h2>
          <div className="button-container">
            {!showAnswer && <button onClick={revealAnswer}>Reveal Answer</button>}
          </div>
          {showAnswer && (
            <div className="answer-container">
              <p>The Answer is: {riddleData.answer}</p>
              <div className="button-container">
                <button className="yes-button" onClick={() => handleUserResponse(true)}>
                  Yes, I got it right!
                </button>
                <button className="no-button" onClick={() => handleUserResponse(false)}>
                  No, try again
                </button>
              </div>
            </div>
          )}
          <p>Streak: {streak}</p>
        </>
      )}
    </div>
  );
};

export default RiddleDisplay;