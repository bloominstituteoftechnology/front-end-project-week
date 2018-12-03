import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { SideBarWrapper, SideBarContentWrapper, SideBarTitle, SideBarLinksWrapper, ViewLinkWrapper, Btn, CreateLinkWrapper } from "./Styled";

class SideBar extends Component {
  render() {
    return (
      <SideBarWrapper>
        <SideBarContentWrapper>
        <SideBarTitle>Lambda Notes </SideBarTitle>
        <SideBarLinksWrapper>
          <ViewLinkWrapper>
            <NavLink exact to="/" activeClassName="activeNavButton">
              <Btn>View Your Notes</Btn>
            </NavLink>
          </ViewLinkWrapper>
          <CreateLinkWrapper>
            <NavLink to="/note-form" activeClassName="activeNavButton">
              <Btn>+ Create New Note</Btn>
            </NavLink>
          </CreateLinkWrapper>
        </SideBarLinksWrapper>
        </SideBarContentWrapper>
      </SideBarWrapper>
    );
  }
}

export default SideBar;
