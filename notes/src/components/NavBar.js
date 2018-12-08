// imporing libraries
import React from 'react';
import styled from 'styled-components';

// styled Navbar
const NavBarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  .navbar {
    width: 30rem;
    padding: 4rem 2rem;

    h1 {
      font-size: 3.8rem;
      font-weight: bold;
      margin-bottom: 4rem;
      line-height: 3.4rem;
    }

    .menu {
      background-color: #24B8BD;
      color: white;
      border: 1px solid #414141;
      margin: 2rem auto;
      padding: 1rem;
      text-align: center;
      font-size: 1.8rem;
      font-weight: bold;
    }
  }
`;

const NavBar = (props) => {
  return (
    <NavBarWrapper>
      <div className="navbar">
        <h1>Lambda <br /> Notes</h1>
        <div
          className="menu"
          onClick={() => {props.history.push('/')}}
        >
          View Your Notes
        </div>
        <div
          className="menu"
          onClick={() => {props.history.push('/add')}}
        >
          + Create New Note
        </div>
      </div>
    </NavBarWrapper>
  );
}

export default NavBar;