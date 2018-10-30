import React from "react";
import spinner from "./Spinner.svg";

const Spinner = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start"
      }}
    >
      <img
        src={spinner}
        alt="loading..."
        style={{ width: "200px", display: "block", marginTop: "100px" }}
      />
    </div>
  );
};

export default Spinner;
