import React from "react";

const Cards = ({ title, image, button, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <a href={link} className="card-button" target="_blank" rel="noreferrer"> 
          {button}
        </a>
      </div>
    </div>
  );
};

export default Cards;
