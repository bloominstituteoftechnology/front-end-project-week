import React from 'react';
import styled from 'styled-components';

const Note = styled.div`
  font-family: raleway;
  padding: 8px;
  margin-left: 300px;
  margin-right: 20px;
  margin-top: 30px;
  word-break: break-all;
  > h2 {
    font-family: Roboto;
  }
`;

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
  }

  render() {
    return <Note>boooooooyyaaa</Note>;
  }
}

export default NoteForm;
