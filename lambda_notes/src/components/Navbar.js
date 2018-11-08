import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormText } from "reactstrap";
import styled from "styled-components";

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
//       NotesToSearch = this.props.items;

//       newSearch = NotesToSearch.filter(item => {
//         const lc = item.toLowerCase();
//         const filter = event.target.value.toLowerCase();
//         return lc.includes(filter);
//       });
//     } else {
//       newSearch = this.props.items;
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
        <div style = {{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
          <input style={{ width: "500px", marginBottom:'10px', fontSize: '1rem', padding:'100px'}}
            type="Search"
            id=""
            name=""
            placeholder="Search"
            onChange={event => console.log(event.target.value)}
          />
          <button style={{backgroundColor: "white", marginLeft: '15px',  cursor:'pointer'}}>search</button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
