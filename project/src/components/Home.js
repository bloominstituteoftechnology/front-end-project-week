import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Lambda Notes</h1>

      <Link to="/notes">Click here to see our notes.</Link>
    </div>
  );
}

export default Home;
