import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const Preferences = (props) => {
  const [value, setValue] = useState({
    minGrade: 2,
    maxGrade: 8,
    spotters: 1,
    crashpads: 1,
    minTemp: 40,
    maxTemp: 75,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.minGrade >= value.maxGrade) {
      console.log("alert Min grade is higher than the max grade", value);
    } else if (value.minTemp >= value.maxTemp) {
      console.log("alert! Min temp is higher than the max temp", value);
    } else {
      console.log(typeof value.minTemp);
    }
  };

  // Stopping point. Write a function that renders if there is an alert

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
            <div>V{value.minGrade}</div>
            <Form.Range
              name="minGrade"
              min="0"
              max="17"
              step="1"
              value={value.minGrade}
              onChange={({ target: { value: radius } }) => {
                setValue({ ...value, minGrade: radius });
              }}
            />
            <Form.Label>Max Grade Range:</Form.Label>
            <div>V{value.maxGrade}</div>
            <Form.Range
              name="maxGrade"
              min="0"
              max="17"
              step="1"
              value={value.maxGrade}
              onChange={({ target: { value: radius } }) => {
                setValue({ ...value, maxGrade: radius });
              }}
            />
            <Form.Label>Number of crashpads:</Form.Label>
            <div>{value.crashpads}</div>
            <Form.Range
              name="crashpads"
              min="1"
              max="5"
              step="1"
              value={value.crashpads}
              onChange={({ target: { value: radius } }) => {
                setValue({ ...value, crashpads: radius });
              }}
            />
            <Form.Label>Number of spotters: </Form.Label>
            <div>{value.spotters}</div>
            <Form.Range
              name="spotters"
              min="0"
              max="4"
              step="1"
              value={value.spotters}
              onChange={({ target: { value: radius } }) => {
                setValue({ ...value, spotters: radius });
              }}
            />
            <Form.Label>Coldest tolerable temp:</Form.Label>
            <div>{value.minTemp}°F</div>
            <Form.Range
              name="minTemp"
              min="0"
              max="100"
              step="1"
              value={value.minTemp}
              onChange={({ target: { value: radius } }) => {
                setValue({ ...value, minTemp: radius });
              }}
            />
            <Form.Label>Hottest tolerable temp:</Form.Label>
            <div>{value.maxTemp}°F</div>
            <Form.Range
              name="maxTemp"
              min="0"
              max="100"
              step="1"
              value={value.maxTemp}
              onChange={({ target: { value: radius } }) => {
                setValue({ ...value, maxTemp: radius });
              }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Alert key="danger" variant="danger"></Alert>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Preferences;
