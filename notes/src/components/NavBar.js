import React from 'react';
import {NavLink} from 'react-router-dom';
//import styled from 'styled-components';
import {DivNavBar, Button} from '../styles';

/*
 *const DivNavBar = styled.div`
 *  border: 1px solid #c4c3c4;
 *  background-color: #d7d7d7;
 *  flex-direction: column;
 *  text-align: left;
 *  width: 195px;
 *  height: 100%;
 *  display: flex;
 *  position: fixed;
 *  padding: 2rem 1.8%;
 *  line-height: 0.9;
 *
 *  @media (max-width: 600px) {
 *    position: static;
 *    width: 90%;
 *    margin: 0 auto;
 *  }
 *`;
 *
 *export const Button = styled.button`
 *  background-color: #2ac0c4;
 *  color: white;
 *  padding: 1.2rem 1%;
 *  font-weight: bold;
 *  font-size: 1.5rem;
 *  width: 100%;
 *  margin: 0.9rem 0;
 *`;
 */

const NavBar = () => {
  return (
    <DivNavBar>
      <h1>
        Lambda <br />
        Notes
      </h1>
      <NavLink to="/notes">
        <Button>View Your Notes</Button>
      </NavLink>
      <NavLink to="/create">
        <Button>+ Create New Note</Button>
      </NavLink>
    </DivNavBar>
  );
};

export default NavBar;
