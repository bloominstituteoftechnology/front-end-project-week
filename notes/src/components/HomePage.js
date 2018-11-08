import React from "react";
import { NavLink } from "react-router-dom";
import "../css/homePage.css";


const HomePage = () => {
  return ( 
   
        <div className="sideBar">
          <NavLink className="lambdaTitle" to="/">
            <h1 className="lambdaTitle">Lambda <br></br> Notes</h1>
          </NavLink>
          <div className="sideBarButtons">
            <NavLink className="sideBarButtons" to="/notes">
              <button>View Your Notes</button>
            </NavLink >
            <NavLink className="sideBarButtons" to="/createnote">
              <button>+ Create New Note</button>
            </NavLink>
          </div>
        </div>
   );
}
 
export default HomePage;
