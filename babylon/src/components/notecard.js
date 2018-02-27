import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 180px;
  height: 190px;
  margin-top: 20px;
  margin-left: 10px;
  padding: 10px 15px 25px; 
  background-color: #fffeff;
  border: 1px solid #bfbfc0;  
  border-radius: 1px;

  h3 {
    padding-bottom: 4px;
    margin-bottom: 7px;
    letter-spacing: 1px;
    font-size: 1.6rem;
    font-weight: 700;
    color: #4a494a;
    border-bottom: 2px solid #bfbfc0;
  }

  p {
    line-height: 175%;
    letter-spacing: 1px;
    font-size: 1.15rem;
    font-weight: 500;
    font-family: Raleway, sans-serif;
    color: #5e5d5e;    
  }

`;

const NoteCard = props => (
  <StyledCard>
    <h3>Note Title</h3>
    <p>This is example data...awkjfghaksd afdehfai eurkhvaeruk hv  krhvcxnl reuh cvzfhjksdgle rfh kjsdhfv asdkj bh</p>
  </StyledCard>
);

export default NoteCard;
