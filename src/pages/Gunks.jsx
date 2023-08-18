import React from "react";
import ModalCard from "../cards/ModalCard";

const Gunks = () => {
  return (
    <>
      <h1>Gunks Page</h1>
      <ModalCard
        imgSrc="https://picsum.photos/id/201/300/200"
        imgAlt="Black Boulder"
        title="Black Boulder"
        description="A classic Gunks Climb. Start in a sit start and then follow the obvious face to a comfy topout"
        buttonText="Learn More"
        GPSlocation="card2"
        spotters="1"
        grade="V5"
      />
    </>
  );
};

export default Gunks;
// have to displauy info from json object or database from data from Home
// Main prority will be to display data
