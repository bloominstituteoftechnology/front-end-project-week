import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { filterNotes, getNotes } from "../store/actions";
import { connect } from "react-redux";

// ==============================
// ======   STYLED COMPS   ======
// ==============================

const Nav = styled.nav`
  width: 300px;
  position: fixed;
  height: 100vh;
  padding: 20px 15px;
  background: #d8d8d8;
  border-right: 1px solid #979797;

  @media (max-width: 650px) {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #979797;
    border-right: none;
    text-align: center;
    padding: 0 0 20px;
  }
`;

const H1 = styled.h1`
  color: #4a4a4a;
  display: block;

  @media (max-width: 650px) {
    border-bottom: 2px dotted #979797;
    letter-spacing: 5px;
    display: inline-block;
    width: 75%;
    padding-left: 5px;
    text-transform: uppercase;
    padding-bottom: 10px;
  }
`;

const Span = styled.span`
  display: block;

  @media (max-width: 650px) {
    display: inline-block;
  }
`;

const StyledLink = styled(Link)`
  background: #2bc1c4;
  color: white;
  font-weight: bold;
  width: 85%;
  text-decoration: none;
  margin: 0 auto 10px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #979797;
  transition: all 0.3s ease-in-out;
  display: block;

  &:hover {
    background: white;
    color: #2bc1c4;
  }

  &:active {
    opacity: 0.5;
  }

  @media (max-width: 650px) {
    width: 70%;
  }
`;

const SearchBar = styled.input`
  color: #4a4a4a;
  font-weight: bold;
  background: #f3f3f3;
  font-family: "Font Awesome 5 Free", "Open Sans", sans-serif;
  width: 88%;
  text-decoration: none;
  margin: 0 auto 10px;
  padding: 10px;
  border: 1px solid #979797;
  transition: all 0.3s ease-in-out;
  display: block;

  &:focus {
    outline: 1px solid #2bc1c4;
  }

  @media (max-width: 650px) {
    width: 72%;
  }
`;

// ==============================
// ======    COMPONENTS    ======
// ==============================

class NavSideBar extends Component {
  handleInputChange = ({ target: { value } }) => {
    value === "" ? this.props.getNotes() : this.props.filterNotes(value);
  };

  render() {
    return (
      <Nav>
        <H1>
          Lambda <Span>Notes</Span>
        </H1>
        <StyledLink to="/notes">View&nbsp;Your&nbsp;Notes</StyledLink>
        <StyledLink to="/note-add">+&nbsp;Create&nbsp;New&nbsp;Note</StyledLink>
        <SearchBar
          value={this.props.filteredNotes}
          onChange={this.handleInputChange}
          placeholder="&#xf002; Search"
          className="fa fa-input"
        />
      </Nav>
    );
  }
}

const mapStateToProps = ({ notes }) => ({
  notes
});

export default connect(
  mapStateToProps,
  { filterNotes, getNotes }
)(NavSideBar);
