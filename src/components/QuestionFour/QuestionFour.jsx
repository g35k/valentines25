import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/QuestionFour/QuestionFour.css';

const QuestionFour = () => {
  const navigate = useNavigate();
  const [buttonPosition, setButtonPosition] = useState({ top: '50%', left: '50%' });

  // Function to move the button to a random position
  const moveButton = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10; // Random position between 10% and 90% for vertical movement
    const randomLeft = Math.floor(Math.random() * 80) + 10; // Random position between 10% and 90% for horizontal movement
    setButtonPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveButton();
    }, 1000); // Move the button every second

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const handleClick = () => {
    navigate('/question-5'); // Navigate to Question 5
  };

  return (
    <div className="q-page4">
      <h2 className="question-text">Me after I drink a Celcius and start tweaking</h2>
      <button
        className="q-button"
        style={{ top: buttonPosition.top, left: buttonPosition.left }}
        onClick={handleClick}
      >
        ^////^
      </button>
    </div>
  );
};

export default QuestionFour;
