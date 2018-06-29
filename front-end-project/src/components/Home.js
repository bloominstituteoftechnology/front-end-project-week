import React from "react";
import { NavLink } from "react-router-dom";


const Home = props => {
  return (
    <div  style={{textAlign: 'center', marginTop: '35vh'}}>
        <h1> Welcome to Lambda Take Note! </h1>
        <br/>
        <div>
          <NavLink to="/login">
            <button className="button2"> Click to Log in </button>
          </NavLink>
          <NavLink to="/register">
            <button className="button2"> Click to Register </button>
          </NavLink>
          </div>
    </div>
  );
};

export default Home;
