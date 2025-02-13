import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/LandingPage/LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/closed-card'); // Make sure the route is defined in App.jsx
    };

    return (
        <div className="landing-page">
            <button className="click-button" onClick={handleClick}>click here &lt;3</button>
        </div>
    );
};

export default LandingPage;
