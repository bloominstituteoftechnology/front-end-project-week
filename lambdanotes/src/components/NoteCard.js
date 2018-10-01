import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';

function NoteCard(props) {
  const { _id } = props.note;
  console.log(props);
  const truncate = content => {
    return content.length > 100 ? `${content.slice(0,97)} ...` : content
  }
  const titleTruncate = title => {
    return title.length > 20 ? `${title.slice(0,17)} ...` : title
  }
  return(
    <CardDiv>
      <Link style={{textDecoration: 'none'}}to={`notes/${_id}`}>
        <div className='note-content'>
          <h3>{ titleTruncate(props.note.title) }</h3> 
          <hr />
          <Markdown>{ truncate(props.note.textBody) }</Markdown>
          {/* <p>{ truncate(props.note.textBody) }</p> */}
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
      overflow-wrap: break-word;
    }

    hr {
      color: #000000;
    }

    p {
      overflow-wrap: break-word;
      color: #3B3B3B;
    }
  }
`