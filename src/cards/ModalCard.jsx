import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import "./ModalCard.css";

const ModalCard = (props) => {
  return (
    <>
      <section className="cards-list">
        <>
          <div className="card-container" key={props.id}>
            <img src={props.imgSrc} alt={props.imgAlt} className="card-img" />
            <h1 className="card-title">{props.title}</h1>
            <div className="card-description">
              {props.description}
              <p>Grade: {props.grade}</p>
              <p>Spotters: {props.spotters}</p>
              <p>Crashpads: {props.crashpads}</p>
              <p>Ideal Temps: {props.tempRange}</p>
              <p>Height: {props.boulderHeight}</p>
            </div>
            <a href={props.GPSlocation} className="card-btn">
              GPS Coordinates
            </a>
          </div>
        </>
      </section>
    </>
  );
};
export default ModalCard;
