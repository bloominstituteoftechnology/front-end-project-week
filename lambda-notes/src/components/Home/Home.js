import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Note Database</h1>

      <Link to="/notes">Enter</Link>
    </div>
  );
}

export default Home;
