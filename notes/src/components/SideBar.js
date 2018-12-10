import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  SideBarWrapper,
  SideBarTitle,
  SideBarLinksWrapper,
  Btn
} from "./Styled";

class SideBar extends Component {
  render() {
    return (
      <SideBarWrapper>
        <SideBarTitle>Lambda Notes </SideBarTitle>
        <SideBarLinksWrapper>
          <NavLink exact to="/">
            <Btn>View Your Notes</Btn>
          </NavLink>

          <NavLink exact to="/note-form">
            <Btn>+ Create New Note</Btn>
          </NavLink>
        </SideBarLinksWrapper>
      </SideBarWrapper>
    );
  }
}

export default SideBar;
