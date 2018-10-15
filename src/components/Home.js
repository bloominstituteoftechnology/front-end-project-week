import React from "react";
import { withRouter } from 'react-router-dom';
import './Home.css' 

const Home = () => {

    return (
          <div>
          {localStorage.getItem("token")? (<div className="main-wrapper"> {`Welcome, ${localStorage.getItem("name").split(" ")[0]}! `}</div>) : (
           <div className="main-wrapper">
            <h3>Welcome to Lambda Notes</h3>
             <p>Please Sign In or Sign Up to begin making notes.</p>            
            </div>)
          }</div>
    )
}

export default Home;
