import React from "react";
import {
  NavBarDiv,
  NavBarHeader,
  NavLinkBtn,
  NavLinkDiv,
  NavButtonText
} from "../../Styles/NavBarStyles";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const NavigationBar = props => {

  const logoutFunction = (ev) => {
    ev.preventDefault()
    localStorage.clear()
    window.location.reload()
  }

  return (
    <NavBarDiv>
      <NavBarHeader>Lambda Notes</NavBarHeader>
      <NavLinkDiv>
        <SearchBar filterTarget={props.filterTarget} filter={props.filter}/>
        <NavLinkBtn>
          <NavButtonText>
            <Link to="/home" className="a">
              {" "}
              View Your Notes
            </Link>
          </NavButtonText>
        </NavLinkBtn>
        <NavLinkBtn>
          <NavButtonText>
            <Link to="/form" className="a">
              {" "}
              + Create New Note
            </Link>
          </NavButtonText>
        </NavLinkBtn>
        <NavLinkBtn onClick={(ev) => logoutFunction(ev)}>
          <NavButtonText>
              Logout
          </NavButtonText>
        </NavLinkBtn>
      </NavLinkDiv>
    </NavBarDiv>
  );
};

export default NavigationBar;
