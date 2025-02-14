import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/QuestionFive/QuestionFive.css';

const QuestionFive = () => {
  const navigate = useNavigate();

  // State to track incorrect attempts
  const [incorrectAttempts, setIncorrectAttempts] = useState(0);

  // Array of cycling alert messages
  const messages = [
    'go again loser',
    'embarrassing for you',
    'um',
    'hehehh',
    'no?',
    'close...i guess...',
    'think bruh',
    'you got it baby',
    'noooo',
    'lol',
    'try harderrrr'
  ];

  // Handle button click to navigate or show cycling alert messages
  const handleClick = (emoticon) => {
    if (emoticon === ':3') {
      navigate('/closed-card'); // Navigate to closed-card if correct button is clicked
    } else {
      // Show cycling alert message based on the number of incorrect attempts
      alert(messages[incorrectAttempts % messages.length]);

      // Increment the incorrect attempts counter
      setIncorrectAttempts(incorrectAttempts + 1);
    }
  };

  const emoticons = [':)', ':D', ':P', ':3', ':/', ':|', ':(', ':O', ':X', ':$', '8)', ':@', ';)', ':-)', ':c', ':b', '^_^', ':>', '<3', '=)', 'T_T'];

  return (
    <div className="q-page5">
      <h2 className="question-text">hehe find me</h2>
      <div className="buttons-container">
        {emoticons.map((emoticon, index) => {
          const randomTop = Math.random() * 80 + 'vh'; // Random position top (between 0 and 80% of the screen height)
          const randomLeft = Math.random() * 80 + 'vw'; // Random position left (between 0 and 80% of the screen width)
          const randomSize = Math.floor(Math.random() * 40) + 40; // Random button size between 40px and 80px

          return (
            <button
              key={index}
              className="emoticon-button"
              style={{
                top: randomTop,
                left: randomLeft,
                width: `${randomSize}px`,
                height: `${randomSize}px`,
                fontSize: `${randomSize / 2}px`,
              }}
              onClick={() => handleClick(emoticon)}
            >
              {emoticon}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionFive;
