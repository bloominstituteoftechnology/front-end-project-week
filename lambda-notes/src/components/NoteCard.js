import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    }
`;

const NoteCard = props => {
  const { title, textBody } = props.note;
  return (
    <StyledLink to={`/notes/${props.note.id}`}>
      <div className="notecard">
        <div className="">
          <div>
              <h2>{title}</h2>
            <hr/>
            <p className="notecardbody">{textBody}</p>
          </div>
        </div>
      </div>
    </StyledLink>
  );
};

export default NoteCard;
