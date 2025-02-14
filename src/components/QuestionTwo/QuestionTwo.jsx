import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/QuestionTwo/QuestionTwo.css';

const QuestionTwo = () => {
    const navigate = useNavigate();

    // Handle button clicks
    const handleClick = (buttonIndex) => {
        if (buttonIndex === 2) {
            navigate('/question-3'); // Navigate to Question Three page
        } else {
            alert('of course an aussie wouldn\'t know');
        }
    };

    return (
        <div className="q-page2">
            <h2 className="q2-question">how much wood could a wood chuck chuck? </h2>
            <button className="q2-button" onClick={() => handleClick(1)}>a lot</button>
            <button className="q2-button" onClick={() => handleClick(2)}>like a lot a lot</button>
            <button className="q2-button" onClick={() => handleClick(3)}>three</button>
            <button className="q2-button" onClick={() => handleClick(4)}>CALABASA</button>
        </div>
    );
};

export default QuestionTwo;
