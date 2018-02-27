import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from './button';
import { deleteNote } from '../actions';

const StyledDelete = styled.div`
  position: absolute;
  top: 160px;
  left: 165px;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
  width: 500px;
  height: 165px;
  background-color: #f3f3f3;
  border: 1px solid #bfbfc0;

  p {
    width: 100%;
    height: 20px;
    margin-top: 40px;
    text-align: center;
    font-family: Raleway, sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
  }
`;

const Delete = props => (
  <StyledDelete style={{ opacity: '1' }}>
    <p>Are you sure you want to delete this?</p>
      <Button method={props.deleteNote} backgroundColor='#bf2828' title='Delete' />
      <Button backgroundColor='#5dbdc2' title='No' />
  </StyledDelete>
);

export default connect(null, { deleteNote })(Delete);
