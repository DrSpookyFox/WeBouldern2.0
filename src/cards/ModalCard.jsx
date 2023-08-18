import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import "./ModalCard.css";

const ModalCard = ({
  title,
  imgSrc,
  imgAlt,
  grade,
  spotters,
  description,
  buttonText,
  GPSlocation,
}) => {
  return (
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      {title && <h1 className="card-title">{title}</h1>}
      {description && <p className="card-description">{description}</p>}
      {spotters && <p>Spotters: {spotters}</p>}
      {grade && <p>Grade: {grade}</p>}
      {buttonText && GPSlocation && (
        <a href={GPSlocation} className="card-btn">
          GPS Coordinates
        </a>
      )}


    </div>
  );
};
export default ModalCard;
