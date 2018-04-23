import React, { Component } from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';
import Notes from './Notes';

const Wrapper = styled.div`
  display: flex;
  width: 99.5%;
  margin-top: 13px;
  border: 1px solid;
`;

class NoteList extends Component {
  render() {
    return (
        <Wrapper>
            <Sidebar />
            <Notes />
        </Wrapper>
    )
  }
}

export default NoteList;
