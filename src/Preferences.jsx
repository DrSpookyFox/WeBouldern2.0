import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Preferences = (props) => {
  const [value, onChange] = useState({
    minGrade: 2,
    maxGrade: 8,
    spotters: 1,
    crashpads: 1,
    minTemp: 40,
    maxTemp: 75,
  });

  // stopping point. Must make function for collecting responses, and differentiate values for useEffect for range value.
  // Also this is the start of a deconstructed array: {minGrade,maxGrade,spotters,crashpads,minTemp, maxTemp}
  useEffect(() => {
    const el = document.querySelector(".buble");

    if (el) {
      el.style.left = `${Number(value)}px`;
    }
  });
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Preferences
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Min Grade Range:</Form.Label>
            <div className="buble1">V{value.minGrade}</div>
            <Form.Range
              name="minGrade"
              min="0"
              max="17"
              step="1"
              value={value.minGrade}
              onChange={({ target: { value: radius } }) => {
                onChange(radius);
              }}
            />
            <Form.Label>Max Grade Range:</Form.Label>
            <div className="buble">V{value.maxGrade}</div>
            <Form.Range
              name="maxGrade"
              min="0"
              max="17"
              step="1"
              value={value.maxGrade}
              onChange={({ target: { value: radius } }) => {
                onChange(radius);
              }}
            />
            <Form.Label>Number of crashpads:</Form.Label>
            <div className="buble">{value.crashpads}</div>
            <Form.Range
              name="maxGrade"
              min="1"
              max="5"
              step="1"
              value={value.crashpads}
              onChange={({ target: { value: radius } }) => {
                onChange(radius);
              }}
            />
            <Form.Label>Number of spotters: </Form.Label>
            <div className="buble">{value.spotters}</div>
            <Form.Range
              name="maxGrade"
              min="0"
              max="4"
              step="1"
              value={value.spotters}
              onChange={({ target: { value: radius } }) => {
                onChange(radius);
              }}
            />
            <Form.Label>Coldest tolerable temp:</Form.Label>
            <div className="buble">{value.minTemp}°F</div>
            <Form.Range
              name="minTemp"
              min="0"
              max="17"
              step="1"
              value={value.minTemp}
              onChange={({ target: { value: radius } }) => {
                onChange(radius);
              }}
            />
            <Form.Label>Hottest tolerable temp:</Form.Label>
            <div className="buble">{value.maxTemp}°F</div>
            <Form.Range
              name="maxTemp"
              min="0"
              max="17"
              step="1"
              value={value.maxTemp}
              onChange={({ target: { value: radius } }) => {
                onChange(radius);
              }}
            />
          </Form.Group>
        </Form>
         
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Preferences;
