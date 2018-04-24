import React from "react";
import './SideBar.css';

export const SideBar = props => {
  return <div className="sideBarContainer">
            <div className="header">
                <h1>Lambda Notes</h1>
            </div>
            <button className="button">View Your Notes</button>
            <button className="button">+ Create New Note</button>
         </div>
};