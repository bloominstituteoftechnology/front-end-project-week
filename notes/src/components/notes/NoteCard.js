import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import LinesEllipsis from "react-lines-ellipsis";

const Notes = styled.div`
border-bottom: 1px solid lightgrey;
display: flex;
justify-content: space-between;
align-items: none;
flex-direction: column;
background-color: #fff;
width: 200px;
margin 26px;
padding: 20px;
min-height: 250px;
text-align: left;
font-color: black;
text-decoration; none;
`;
const TextH = styled.div`
text-decoration; none;
border-bottom: 1px solid black;
padding-bottom: 5px;
width: 150px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
text-aling: left;
color: black;
font-family: "Helvetica", "Arial", sans-serif;
font-weight: bolder;
`;
const Text = styled.div`
text-decoration; none;
color: black;
margin-top: 5px;
font-family: "Helvetica", "Arial", "sans-serif",
font-weight: light;
fontSize: 10px;

`;

const NoteCard = props => {
  return (
    <Notes>
      <Link
        to={`/note/${props.note._id}`}
        className="note"
        style={{ textDecoration: "none" }}
      >
        <TextH>{props.note.title}</TextH>

        <Text><LinesEllipsis
          text={props.note.textBody}
          maxLine="6"
          ellipsis="..."
          trimRight
          basedOn="letters"
        /></Text>
      </Link>
    </Notes>
  );
};
export default NoteCard;
