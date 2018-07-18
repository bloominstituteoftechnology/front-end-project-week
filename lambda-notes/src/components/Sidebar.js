import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const HeaderSpan = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 3.6rem;
  line-height: 3rem;
`

const BaseButton = styled.button`
  background-color: #2BC1C4;
  border: 1px solid #979797;
  height: 40px;
  color: white;
  text-align:center;
  width:100%;
  margin-top: 24px;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  &:focus{
    outline: 3px solid white;
  }
`

const HeaderDiv = styled.div`
  margin-top:19px;
`

class Sidebar extends Component {
  render() {
    return (
      <div>
          <HeaderDiv><HeaderSpan>Lambda Notes</HeaderSpan></HeaderDiv>
                   
          <Link to="/view-notes">
            <BaseButton> View Your Notes</BaseButton> 
          </Link>
          <Link to="/create-note">
            <BaseButton> + Create New Note</BaseButton>
          </Link>
      </div>
    );
  }
}

export default Sidebar;