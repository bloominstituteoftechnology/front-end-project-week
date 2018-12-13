import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Buttons = styled.button`
  width: 100%;
  max-width: 165px;
  height: 44px;
  border: 5px solid #afb4b5;
  background: #57b5bb;
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
  :hover {
    background-color: white;
    color: gray;
  }
`;

const NavPannelTle = styled.h1`
  Margin: 11px 11px;
  color: #415156;
`;

const NavPannelLinksWpr = styled.div`
  list-style-type: none;
  margin-left: 13px;
`;

const NavPannelWpr = styled.div`
  height: 700px;
  max-width: 185px;
  width: 100%;
  background: #d3d2d5;
  border-right: 1px solid #afafaf;
`;



class NavPannel extends Component {
  render () {
    return (
      <NavPannelWpr>
        <NavPannelTle> Lambda Notes  </NavPannelTle>
        <NavPannelLinksWpr>
          <NavLink exact to="/">
            <Buttons> View Your Notes </Buttons>
          </NavLink>

          <NavLink exact to="/noteForm">
            <Buttons> + Create New Note </Buttons>
          </NavLink>

          <NavLink exact to='/filterNotes'>
            <Buttons> Search For Note </Buttons>
          </NavLink>

        </NavPannelLinksWpr>
      </NavPannelWpr>
    );
  }
}

export default NavPannel;
