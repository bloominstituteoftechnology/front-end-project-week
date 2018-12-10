import React from "react";
import {Link} from "react-router-dom";

const SideBar = props => (
    <div className="side-bar">
        <div className="title-container">
            <h2 className="title-font">Lambda Notes</h2>
        </div>
        <div className="button-container">
        <Link to="/"><button className="button">View Your Notes</button></Link>
        <Link to="/create"><button className="button">+ Create New Note</button></Link>
        </div>
    </div>
);

export default SideBar;