import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from "react-emotion";

import Note from '../components/notes/Note';

const Container = styled("div")`
  margin-left: 25%;
  width: 75%;
  padding: 80px 35px;

  .body-header {
    h2 {
      font-size: 2.7rem;
      font-weight: bold;
      color: #4A494A;
    }
  }
`;

const Main = styled("main")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

class NotesContainer extends Component {
  render() {
    return (
      <Container>
        <header className="body-header">
          <h2>Your Notes:</h2>
        </header>
        <Main>
          {
            this.props.notes.map((item, index) => <Note
              key={index}
              id={item.id}
              title={item.title}
              description={item.description}
              deleteNote={this.deleteNote}
            />)
          }
        </Main>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(mapStateToProps, {})(NotesContainer);