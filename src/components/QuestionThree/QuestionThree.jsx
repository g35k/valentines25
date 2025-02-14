import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/QuestionThree/QuestionThree.css';

const QuestionThree = () => {
    const navigate = useNavigate();

    // Handle button clicks
    const handleClick = (button) => {
        if (button === 'small') {
            navigate('/question-4'); // Navigate to Question Four page
        } else {
            alert('looooserrrrr!');
        }
    };

    return (
        <div className="q-page3">
            <h2 className="q-question">Does サメ love kela?</h2>
            <div className="q-buttons">
                <button className="q-button-small" onClick={() => handleClick('small')}>Yes</button>
                <button className="q-button-large" onClick={() => handleClick('large')}>No</button>
            </div>
        </div>
    );
};

export default QuestionThree;
