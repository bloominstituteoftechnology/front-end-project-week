import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

import styled from 'styled-components';

const NavColor = styled.div`
    background-color: #D8D8D8;
    text-slign: left;
    align:left;
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
    list-style-type: none;
    margin: 0;
    padding: 15px;
    width: 220px;
    height: 700px;
`;

const Navbar = () => {
  return (
  
    <nav>
    < NavColor>
      <div className="container">
        <Link to="/">
          <h1>Lambda Notes</h1>
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
      </NavColor>
    </nav>
  
  );
};

export default Navbar;
