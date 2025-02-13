import React from 'react';
import '../../styles/CardPage/ClosedCard.css';
import cardImage from '../../assets/card.jpg';
import { useNavigate } from 'react-router-dom';

const ClosedCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/open-card'); // Make sure the route is defined in App.jsx
  };

  return (
    <div className="closed-card">
      <img src={cardImage} alt="Valentine's Day Card" className="card-image" />
      <button className="arrow-button" onClick={handleClick}>--&gt;</button>
    </div>
  );
};

export default ClosedCard;
