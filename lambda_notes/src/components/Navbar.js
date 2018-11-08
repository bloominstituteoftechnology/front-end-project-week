import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormText } from "reactstrap";
import styled from "styled-components";
import Search from './Search';

const SideButton = styled.button`
  width: 5%;
  padding: 0.5rem 0;
  text-decoration: none;
  text-align: center;
  font-size: inherit;
  font-weight: bold;
  color: #00a3ff;
  background-color: white;
  border: none;
  border-radius: 5px;
  display: block;
  cursor: pointer;
  &:not(:last-child) {
  }
`;

//  handleChange(event) {
//     let NotesToSearch = [];
//     let newSearch = [];

//     if (event.target.value !== "") {
//       NotesToSearch = this.props.notes;

//       newSearch = NotesToSearch.filter(item => {
//         const lc = item.toLowerCase();
//         const filter = event.target.value.toLowerCase();
//         return lc.includes(filter);
//       });
//     } else {
//       newSearch = this.props.notes;
//     }
//     this.setState({
//       filtered: newSearch
//     });
//   }
class Navbar extends Component {
  render() {
    return (
      <nav
        style={{
          backgroundColor: "#00A3FF",
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 500,
          paddingTop: "1rem",
          paddingBottom: "1rem",
          width: "100vw"
        }}
      >
      <Search />
        <header
          style={{
            display: "flex",
            justifyContent: "flex-end",
            color: "white",
            fontSize: "1.5rem",
            marginRight: "20px"
          }}
        >
          <Link to="/" style={{ color: "white" }}>
            Lambda Notes
          </Link>
        </header>

      </nav>
    );
  }
}

export default Navbar;
