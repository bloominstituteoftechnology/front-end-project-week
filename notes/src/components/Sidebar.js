import React from "react";
import { NavLink } from "react-router-dom";

export default class SideBar extends React.Component {


    
    render() {
        return (
            <div>
                <h1>Lambda Notes</h1>
                <NavLink to='/'>View Your Notes</NavLink>
                <NavLink to='/create'>+ Create New Note</NavLink>
            </div>
        )
    }
}