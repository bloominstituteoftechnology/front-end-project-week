import React from "react";
import {
  NavDiv,
  NavHeader,
  NavBtn,
  NavLinkDiv,
  NavButtonText
} from "../Styles/NavBarStyles";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";

const NavigationBar = props => {
  return (
    <NavDiv>
      <NavHeader>Lambda Notes</NavHeader>
      <NavLinkDiv>
        <SearchBar filterTarget={props.filterTarget} filter={props.filter}/>
        <NavBtn>
          <NavButtonText>
            <Link to="/home" className="a">
              {" "}
              View Your Notes
            </Link>
          </NavButtonText>
        </NavBtn>
        <NavBtn>
          <NavButtonText>
            <Link to="/form" className="a">
              {" "}
               Create New Note
            </Link>
          </NavButtonText>
        </NavBtn>
      </NavLinkDiv>
    </NavDiv>
  );
};

export default NavigationBar;