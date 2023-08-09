import React from "react";

const Footie = () => {
  return (
    <>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        By Alexander Singer <br></br>
        <a
          className="text-reset fw-bold"
          href="https://github.com/DrSpookyFox"
          target="_blank"
          rel="noreferrer"
        >
          My Github
        </a>
      </div>
    </>
  );
};

export default Footie;
