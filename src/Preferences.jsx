import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import MultiRangeSlider from "./multirangeslider/MultiRangeSlider";

const Preferences = (props) => {
  const [value, setValue] = useState({
    tempMin: 0,
    tempMax: 100,
    gradeMin: 0,
    gradeMax: 17,
    spotters: 1,
    crashpads: 1,
  });

  useEffect(() => {
    // Retrieve preferences from localStorage
    const savedPreferences = JSON.parse(
      localStorage.getItem("savedPreferences")
    );

    if (savedPreferences) {
      setValue(savedPreferences);
    }
  }, []);

  const handleSubmit = (e) => {
    console.log("submit was clicked!", value);
    e.preventDefault();
    const updatedPreferences = { ...value };
    localStorage.setItem(
      "savedPreferences",
      JSON.stringify(updatedPreferences)
    );
    props.onHide();
  };

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
          </Form.Group>
          <Form.Label>Tolerable Temperature Range</Form.Label>
          <MultiRangeSlider
            min={0}
            max={100}
            tempSymbol={"°F"}
            value={value}
            onChange={({ min, max }) =>
              setValue({ ...value, tempMin: min, tempMax: max })
            }
          />
          <Form.Label>V Grade Range</Form.Label>
          <MultiRangeSlider
            min={0}
            max={17}
            vGrade={"V"}
            value={value}
            onChange={({ min, max }) => {
              setValue({ ...value, gradeMin: min, gradeMax: max });
            }}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Preferences;
