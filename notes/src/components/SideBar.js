import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { SideBarWrapper,SideBarLinksWrapper, Btn } from "./Styled";

class SideBar extends Component {
  render() {
    return (
      <SideBarWrapper>
        <h1>Lambda Notes </h1>
      <SideBarLinksWrapper>
        <li>
          <NavLink exact to="/" activeClassName="activeNavButton">
            <Btn>View Your Notes</Btn>
          </NavLink>
        </li>
        <li>
          <NavLink to="/note-form" activeClassName="activeNavButton">
            <Btn>+ Create New Note</Btn>
          </NavLink>
        </li>
      </SideBarLinksWrapper>
      </SideBarWrapper>
    );
  }
}

export default SideBar;
