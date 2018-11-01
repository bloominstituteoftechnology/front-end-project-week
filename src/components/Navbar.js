import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MyNav = styled.nav`
  display: flex;
  flex-direction: column;
  background: #D3D2D3;
  width: 250px;
  height: 100vh;
  padding: 0 1rem;

  h1 {
    color: #303030;
    font-size: 2rem;
    font-weight: bold;
    padding: 0.7rem 0 1.4rem;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    background: #30B8BC;
    padding:10px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 1rem;
    border: 1px solid gray;
  }
`;

const Navbar = props => {
  return (
    <MyNav>
      <h1>Lambda Notes</h1>
      <NavLink to='/'>View Your Notes</NavLink>
      <NavLink to='/newnote'>+ Create New Note</NavLink>
    </MyNav>
  )
};

export default Navbar;