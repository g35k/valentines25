import React from 'react';
import '../../styles/OpenPage/OpenCard.css';
import cardImage2 from '../../assets/heart.jpg';

const OpenCard = () => {
  return (
    <div className="closed-card">
      <img src={cardImage2} alt="Card Border" className="card-image2" />
    </div>
  );
};

export default OpenCard;
