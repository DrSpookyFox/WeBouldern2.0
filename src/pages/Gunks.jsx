import "./page.css";
import React, { useEffect, useState } from "react";
import ModalCard from "../cards/ModalCard";
import boulderInfoGunks from "../../db/boulderInfo - Gunks";

const Gunks = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const updatedSavedPreferences = JSON.parse(
    localStorage.getItem("savedPreferences")
  );

  // Helper function to convert grade string to a numeric value
  const gradeToNumber = (grade) => {
    const numericPart = parseInt(grade.slice(1), 10);
    return isNaN(numericPart) ? 0 : numericPart;
  };

  useEffect(() => {
    const filterData = () => {
      if (!updatedSavedPreferences) {
        // No preferences saved, use the default data
        setFilteredItems(boulderInfoGunks);
      } else {
        // Convert gradeMin and gradeMax from strings to numbers
        const minGrade = parseInt(updatedSavedPreferences.gradeMin, 10);
        const maxGrade = parseInt(updatedSavedPreferences.gradeMax, 10);

        // Filter the data based on user preferences, including grade comparison
        const filteredData = boulderInfoGunks.filter((item) => {
          // Convert the item's grade to a numeric value
          const itemGradeValue = gradeToNumber(item.grade);

          // Check if the item's grade is within the specified range
          const gradeMatches =
            itemGradeValue >= minGrade && itemGradeValue <= maxGrade;

          const tempRangeMatches = isTempRangeWithinPreferences(
            item.tempRange,
            updatedSavedPreferences.tempMin,
            updatedSavedPreferences.tempMax
          );

          const spottersMatch =
            item.spotters >= updatedSavedPreferences.spotters;
          const crashpadsMatch =
            item.crashpads >= updatedSavedPreferences.crashpads;

          // Check if all conditions are met
          return (
            gradeMatches && tempRangeMatches && spottersMatch && crashpadsMatch
          );
        });

        // Check if the filteredData is different from the current state before updating
        if (!arraysEqual(filteredData, filteredItems)) {
          setFilteredItems(filteredData);
        }
      }
    };

    filterData();
  }, [updatedSavedPreferences, filteredItems]); // Add filteredItems as a dependency

  // Helper function to check if two arrays are equal
  const arraysEqual = (a, b) => {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  // Helper function to check if a temperature range is within preferences
  const isTempRangeWithinPreferences = (tempRange, min, max) => {
    const [tempMin, tempMax] = tempRange
      .split(" - ")
      .map((temp) => parseInt(temp, 10));

    return tempMin >= min && tempMax <= max;
  };

  return (
    <>
      <h1>Gunks Page</h1>
      <section className="cards-list">
        {filteredItems.map((item) => (
          <ModalCard
            key={item.id}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            title={item.title}
            description={item.description}
            grade={item.grade}
            spotters={item.spotters}
            crashpads={item.crashpads}
            tempRange={item.tempRange}
            boulderHeight={item.boulderHeight}
            GPSlocation={item.GPSlocation}
          />
        ))}
      </section>
    </>
  );
};

export default Gunks;
