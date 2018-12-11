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
    width: 240px;
    height: 100%;
`;

const Title = styled.div`
   text-decoration: none;
   color: #4A4A4A;
   text-align: left;
   font-size: 35px;
   line-height: 30px;
   font-family: 'Helvetica', 'Arial', sans-serif;
   font-weight: bold;
   margin-bottom: 20px;

`;





const Navbar = () => {
  return (
  
    <nav>
    < NavColor>
      <div className="container">
        <Link to="/" style={{ textDecoration: 'none' }} >
          <Title >Lambda Notes</Title >
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
      </NavColor>
    </nav>
  
  );
};

export default Navbar;
