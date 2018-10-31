import React from "react";
import { NavLink } from "react-router-dom";

class SideBar extends React.Component {
    render() {
        return (
            <div className="side-bar">
                <h1>Lambda Notes</h1>
                <div className="link-section">
                    <NavLink exact to="/" activeClassName="link">View Your Notes</NavLink>
                    <NavLink to="/create" activeClassName="link">+ Create New Note</NavLink>
                </div>
            </div>


            
        );
    }
}

export default SideBar;