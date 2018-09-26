import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import styled from 'styled-components';

function NoteCard(props) {
  const { title, textBody, _id } = props.note;

  console.log(props);
  return(
    <CardDiv>
      <Link style={{textDecoration: 'none'}}to={`notes/${_id}`}>
        <div className='note-content'>
          <h3>{ title }</h3> 
          <hr />
          <p>{ textBody }</p>
        </div>
      </Link>
    </CardDiv>
  );
}

export default NoteCard;

const CardDiv = styled.div`
  box-sizing: border-box;
  width: 250px;
  height: 250px;

  border: 1px solid #BEBEBE;
  background-color: #ffffff;
  margin-bottom: 30px;

  .note-content {
    max-width: 250px;
    width: 85%;
    margin: 0 auto;

    h3{
      margin-top: 10px;
      color: #000000;
    }

    hr {
      color: #000000;
    }

    p {
      color: #3B3B3B;
    }
  }
`