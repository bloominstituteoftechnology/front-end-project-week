import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NoteCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid #c8c7c8;
  font-size: 18px;
  width: 295px;
  background: white;
  margin-bottom: 25px;
  padding: 5px 15px 20px 15px;
`;

const NoteTitleWrapper = styled.h3`
  font-size: 24px;
  font-weight: bold;
  border-bottom: solid 1px black;
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

const NoteList = props => {
  return (
    <Link to={`/note/${props.id}`}>
      <NoteCardWrapper className="NoteList">
        <NoteTitleWrapper className="note-title">
          {props.title}
        </NoteTitleWrapper>
        <div className="note-textbody">{props.textBody}</div>
      </NoteCardWrapper>
    </Link>
  );
};

export default NoteList;
