import React from 'react';
import styled from 'styled-components';

const Note = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 167px;
  height: 170px;
  padding: 5px 13px;
  line-height: 19px;
  text-overflow: ellipsis;
  margin-bottom: 21px;

  h5 {
    line-height: 1.8;
    font-size: 14px;
  }

  p {
    font-size: 11px;
    padding-top: 5px;
  }
`

const NoteThumbnail = ({ note }) => (
  <Note>
    <h5>{note.title}</h5>
    <hr></hr>
    <p>{note.textBody}</p>
  </Note>
)

export default NoteThumbnail;