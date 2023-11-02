import React, { useState, useEffect } from 'react';
import './MemoryGame.css'; 

const MemoryGame = () => {
  const [numbers, setNumbers] = useState([]);
  const [userClicks, setUserClicks] = useState([]);
  const [gameState, setGameState] = useState('initial'); 

  // Function to shuffle an array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };
  const startNewGame = () => {
    const initialNumbers = [1, 2, 3, 4, 5];
    const shuffledNumbers = shuffleArray(initialNumbers);
    setNumbers(shuffledNumbers);
    setUserClicks([]);
    setGameState('showNumbers');
    setTimeout(() => {
      setGameState('userPlay');
    }, 3000);
  };


  const handleBallClick = (number) => {
    if (gameState === 'userPlay') {
      setUserClicks((prevClicks) => [...prevClicks, number]);
      if (userClicks.length + 1 === numbers.length) {
        const isCorrect = userClicks.every((click, index) => click === numbers[index]);
        if (isCorrect) {
          
          setGameState('wellDone');
          setTimeout(() => {
            startNewGame();
          }, 2000); 
        } else {
          
          setGameState('gameOver');
        }
      }
    }
  };

  useEffect(() => {
    startNewGame();
  }, []); 

  return (
    <div className="memory-game-container">
      {gameState === 'showNumbers' && (
        <div>
          <p>Memorize the order!</p>
          <div className="balls-container">
            {numbers.map((number) => (
              <div key={number} className="ball">
                {number}
              </div>
            ))}
          </div>
        </div>
      )}

      {gameState === 'userPlay' && (
        <div>
          <p>Click the balls in order!</p>
          <div className="balls-container">
            {numbers.map((number) => (
              <div
                key={number}
                className={`ball ${userClicks.includes(number) ? 'clicked' : ''}`}
                onClick={() => handleBallClick(number)}
              >
                {userClicks.includes(number) ? '✔' : ''}
              </div>
            ))}
          </div>
        </div>
      )}

      {gameState === 'wellDone' && (
        <div>
          <p>Well Done!</p>
        </div>
      )}

      {gameState === 'gameOver' && (
        <div>
          <p>Game Over! You made a mistake.</p>
          <button onClick={startNewGame}>Try Again</button>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
