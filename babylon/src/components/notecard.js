import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledCard = styled.div`
  position: relative;
  width: 180px;
  height: 200px;
  margin-top: 20px;
  margin-left: 10px;
  padding: 10px 15px 25px; 
  background-color: #fffeff;
  border: 1px solid #bfbfc0;  
  border-radius: 1px;
  word-wrap: break-word;

  h3 {
    padding-bottom: 4px;
    margin-bottom: 7px;
    border-bottom: 2px solid #bfbfc0;
    letter-spacing: 1px;
    font-size: 1.6rem;
    font-weight: 700;
    color: #4a494a;
    text-decoration: none;
  }

  p {
    line-height: 175%;
    letter-spacing: 1px;
    font-size: 1.15rem;
    font-weight: 500;
    font-family: Raleway, sans-serif;
    color: #5e5d5e;    
  }

  .notecard__footer {
    position: absolute;
    bottom: 5px;
    width: 100%;
    font-size: 0.9rem;
  }
`;

const NoteCard = props => (
  <Link to={`/fullnote/${props.note.id}`} style={{ textDecoration: 'none' }}>
    <StyledCard>
      <h3>{props.note.title.length > 15 ? `${props.note.title.substring(0, 14)}...` : props.note.title}</h3>
      <p>{props.note.body.length > 120 ? `${props.note.body.substring(0, 119)}...` : props.note.body}</p>
      <p className='notecard__footer'>{props.note.stamp}</p>
    </StyledCard>
  </Link>
);

export default NoteCard;
