// src/components/Card.jsx
import React from "react";
import "./Card.css";

function Card({ title, image, description, rating, price }) {
  const ratingClass = rating > 4.0 ? "green" : "red";

  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <h2 className="card-title">{title}</h2>
      <p className="description">{description}</p>

      <p className={`rating ${ratingClass}`}>{rating} ★</p>

      {/* Price anchored at bottom */}
      <div className="card-footer">
        <p className="price">{price}/night</p>
      </div>
    </div>
  );
}

export default Card;
