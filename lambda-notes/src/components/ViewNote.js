import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ViewNote = styled.div`
  padding: ${props => props.theme.dimensions.viewNote.padding};

  .topControls {
    text-align: end;
    padding: ${ props => props.theme.dimensions.viewNote.topControlsPadding };
  }

  h1 {
    padding: ${ props => props.theme.dimensions.viewNote.headingPadding };
    
  }

  p {
    font-size:  ${ props => props.theme.dimensions.viewNote.textFontSize };
    line-height: ${ props => props.theme.dimensions.viewNote.textLineHeight };
    white-space: pre-line;
  }

  a {
    font-family: ${props => props.theme.font.heading};
    font-size: ${props => props.theme.dimensions.viewNote.linkFontSize};
    color: ${props => props.theme.color.headingText};
    padding: ${props => props.theme.dimensions.viewNote.linkPadding};
  }
  a:visited {
    color: ${props => props.theme.color.clickedAnchor};
  }
`;

export default ({ match, notes }) => {
  const { id } = match.params;
  const note = notes.filter(note => note._id === id)[0];
  const { textBody, title } = note;

  return (
    <ViewNote>
      <div className="topControls">
        <Link to={`/edit/${id}`}>edit</Link>
        <Link to={`/delete/${id}`}>delete</Link>
      </div>
      <div className="note">
        <h1>{title}</h1>
        <p>{textBody}</p>
      </div>
    </ViewNote>
  );
};
