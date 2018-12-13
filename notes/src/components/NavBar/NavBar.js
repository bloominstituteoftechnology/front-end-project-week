// imporing libraries
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// styled Navbar
const NavBarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  .navbar {
    position: fixed;
    display: flex;
    flex-direction: column;
    min-width: 30rem;
    padding: 4rem;

    h1 {
      font-size: 3.8rem;
      font-weight: bold;
      margin-bottom: 4rem;
      line-height: 3.4rem;
    }

    .links{
      display: flex;
      flex-direction: column;
    }

    a, .menu {
      width: 20rem;
      text-decoration: none;
      background-color: #24B8BD;
      color: white;
      margin: 1rem auto;
      padding: 1rem;
      text-align: center;
      font-size: 1.8rem;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        background-color: darkslategray;
        opacity: .75;
      }
    }

    .active {
      background-color: darkslategray;
    }

    @media (max-width: 700px) {
      position: relative;
      width: 100%;
      flex-direction: column;

      .links {
        flex-direction: row;
        a, div {
          border: 2px solid #424142;
        }
      }

    }
  }
`;

const NavBar = (props) => {
  return (
    <NavBarWrapper>
      <div className="navbar">
        <h1>Lambda <br /> Notes</h1>
        <div className="links">
          <NavLink
            exact to='/'
          >
            View Your Notes
          </NavLink>
          <NavLink
            to='/add'
          >
            + Create New Note
          </NavLink>
          <div
            className="menu"
            onClick={() => {
              props.logout();
              props.history.push('/login');
            }}
          >
            Sign Out
          </div>
        </div>
      </div>
    </NavBarWrapper>
  );
}

export default NavBar;