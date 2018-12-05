import React from "react";
import styled from "styled-components";

const MainContent = styled.div`
  background-color: #f3f3f3;
  margin-left: 275px;
  height: 100vh;
  text-align: left;
  padding: 2%;

  h2 {
    font-size: 1.75rem;
    font-weight: bold;
  }
`;

const NoteList = styled.div`
  box-sizing: border-box;
  background-color: #f3f3f3;
  display: flex;
  flex-flow: row wrap;
`;

const NoteWrapper = styled.div`
  box-sizing: border-box;
  background-color: #ffffff;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  border: 1px solid black;
  align-items: left;
  padding: 2%;
  width: 30%;
  height: auto;
  cursor: pointer;
  margin-bottom: 4%;
  min-height: 200px;

  &:hover {
    border: 1px solid blue;
    box-shadow: 3px -1.5px black;
  }

  div {
    width: 100%;
    border-bottom: 1px solid #000000;
  }

  h2 {
    margin: 0;
    font-weight: bold;
  }

  p {
    margin: 0;
    margin-top: %;
  }
`;

const Search = styled.div`
  box-sizing: border-box;
  padding-bottom: 3%;
  width: 30%;
  display: flex,
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  input {
    width: 80%;
    height: auto;
    font-size: 1rem;
    border:1px solid lightslategrey;
    padding: 0 5%;
    &:hover {
      border:1px solid blue;
      cursor: pointer;
      font-color: blue;
    }
  }
`;

class NotesList extends React.Component {
  state = {
    search: ""
  };

  componentDidMount() {
    this.props.reset();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.search(e);
  };

  render() {
    return (
      <MainContent>
        <h2>Your Notes:</h2>
        <Search>
          <input
            type="text"
            name="search"
            value={this.state.search}
            placeholder="&#x1F50D;    Search by title"
            onChange={this.handleChange}
          />
        </Search>
        <NoteList>
          {this.props.notes.map(note => {
            return (
              <NoteWrapper
                key={note._id}
                onClick={() => this.props.history.push(`/notes/${note._id}`)}
              >
                <div>
                  <h2>{note.title}</h2>
                </div>
                <p>{note.textBody}</p>
              </NoteWrapper>
            );
          })}
        </NoteList>
      </MainContent>
    );
  }
}

export default NotesList;
