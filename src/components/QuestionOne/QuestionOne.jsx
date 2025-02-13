import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/QPage1/QPage1.css';

const QPage1 = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/closed-card'); //change route if needed
    };

    return (
        <div className="question 1 page">
            <button className="click-button" onClick={handleClick}>click here &lt;3</button>
        </div>
    );
};

export default QPage1;
