import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown'

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    }
`;

const NoteCard = props => {
  const { title, content, id } = props.note;
  return (
    <StyledLink to={`/notes/${id}`}>
      <div className="notecard">
        <div className="">
          <div>
              <h2>{title.substring(0,25)}</h2>
            <hr/>
            <p className="notecardbody"><ReactMarkdown source={content.substring(0,140)}/></p>
          </div>
        </div>
      </div>
    </StyledLink>
  );
};

export default NoteCard;
