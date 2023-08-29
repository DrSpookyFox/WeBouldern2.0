import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import "./ModalCard.css";

const ModalCard = (props) => {

  return (
    <div className="card-container">
      {props.imgSrc && props.imgAlt && (
        <img src={props.imgSrc} alt={props.imgAlt} className="card-img" />
      )}
      {props.title && <h1 className="card-title">{props.title}</h1>}
      {props.description && (
        <p className="card-description">{props.description}
      {props.grade && <p>Grade: {props.grade}</p>}
      {props.spotters && <p>Spotters: {props.spotters}</p>}
      {props.crashpads && <p>Crashpads: {props.crashpads}</p>}
      {props.tempRange && <p>Ideal Temps: {props.tempRange}</p>}
      {props.boulderHeight && <p>Height: {props.boulderHeight}</p>}</p>
      )}
      {props.GPSlocation && (
        <a href={props.GPSlocation} className="card-btn">
          GPS Coordinates
        </a>
      )}
    </div>
  );
};
export default ModalCard;
