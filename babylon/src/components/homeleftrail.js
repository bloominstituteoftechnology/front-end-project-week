import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { titleSort } from '../actions';
import Button from './button';

const StyledHomeRail = styled.div`
  width: 210px;
  min-height: 400px;
  padding: 15px;
  background-color: #d7d7d7;
  border-right: 1px solid #bfbfc0;

  img {
    height: 100px;
    width: 100px;
  }

  .home-left-rail__sort-buttons {
    margin-top: 55px;
  }

`;

const HomeLeftRail = props => (
  <StyledHomeRail>
    {/* <h1>Operation Babylon</h1> */}
    <img src='https://res.cloudinary.com/jonbrunt/image/upload/v1519920433/JMB-Logo_htviyf.png' alt='JMB Logo' />
    <Link to='/' style={{ textDecoration: 'none' }}>
      <Button backgroundColor='rgb(34, 170, 61)' title='View Your Notes' />
    </Link>
    <Link to='/newnote' style={{ textDecoration: 'none' }}>
      <Button backgroundColor='rgb(34, 170, 61)' title='+ Create New Note' />
    </Link>
    <div className='home-left-rail__sort-buttons'>
      <Button method={props.titleSort} backgroundColor='rgb(34, 170, 61)' title='Sort By Title' />
      <Button backgroundColor='rgb(34, 170, 61)' title='Sort By Date/Time' />
    </div>
  </StyledHomeRail>
);

export default connect(null, { titleSort })(HomeLeftRail);

