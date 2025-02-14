import React from 'react';
import '../../styles/CardPage/ClosedCard.css';
import cardImage from '../../assets/closed.png';
import { useNavigate } from 'react-router-dom';

const ClosedCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/open-card'); 
  };

  return (
    <div className="closed-card">
      <div className="text-left">card for my bebe!</div>
      <div className="click-here-text">open!! yay!</div> {/* New text above arrow button */}
      <img src={cardImage} alt="Valentine's Day Card" className="card-image" />
      <button className="arrow-button" onClick={handleClick}>--&gt;</button>
    </div>
  );
};

export default ClosedCard;
