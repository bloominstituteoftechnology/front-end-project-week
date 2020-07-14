import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome To Notes</h1>
      <Link to="/yournotes">Notes</Link>
    </div>
  );
};

export default Home;
