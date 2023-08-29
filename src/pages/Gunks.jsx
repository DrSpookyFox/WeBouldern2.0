import "./page.css"
import React from "react";
import ModalCard from "../cards/ModalCard";
import boulderInfoGunks from "../../db/boulderInfo - Gunks";


const Gunks = () => {
  const cards = boulderInfoGunks.map((item) => {
    return <ModalCard key={item.id} {...item} />;
  });

  return (
    <>
      <h1>Gunks Page</h1>
      <section className="cards-list">{cards}</section>
    </>
  );
};

export default Gunks;
// have to displauy info from json object or database from data from Home
// Main prority will be to display data
