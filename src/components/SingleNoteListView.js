import React from "react";
import styled from "styled-components";
import "./SingleNoteListView.css";
import { withRouter } from 'react-router-dom';

// ==============================
// ======   STYLED COMPS   ======
// ==============================

const Div = styled.div`
  padding: 15px;
  background: white;
  border: 1px solid #999999;
  width: 200px;
  height: 220px;
  margin: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: -1px 2px 7px rgba(0, 0, 0, 0.15);

  @media (max-width: 650px) {
    width: 90%;
    height: 120px;
  }
`;

const H2 = styled.h2`
  font-size: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid #4a494a;
`;

const P = styled.p`
  font-size: 12px;
`;

// ==============================
// ======    COMPONENTS    ======
// ==============================

const SingleNoteListView = ({key, id, index, getNoteString, note, history}) => {
  console.log("NOTE: ", note)
    return (
      <div key={key} id={id} index={index} className="dnd-div">
        <Div
          onClick={() => {
            history.push(`/note/${id}`);
          }}
        >
          <H2>{getNoteString(note.title, 10)}</H2>
          <P>{getNoteString(note.textBody, 25)}</P>
        </Div>
      </div>
    )
}

export default withRouter(SingleNoteListView);
