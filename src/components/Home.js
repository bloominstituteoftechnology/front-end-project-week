import React from "react";
// import { withRouter } from 'react-router-dom';
import './Home.css' 

const Home = () => {

    return (
          <div className="main-wrapper">
          {localStorage.getItem("token") ? ( 
          <div> <div className="loggged-on">
          {`Welcome back, ${localStorage.getItem("name").split(" ")[0]}! You are currently logged on. `}
          </div></div>) : (
           <div>
            <h3>Welcome to Lambda Notes</h3>
             <p>Please Sign In or Sign Up to begin making notes.</p>            
            </div>)
          }</div>
    )
}
export default Home;
