import React from "react";
import styled from "styled-components";
import TextTruncate from "react-text-truncate";

const MainContent = styled.div`
  background-color: #f3f3f3;
  margin-left: 250px;
  min-height: 100vh;
  text-align: left;
  padding: 2%;

  h2 {
    font-size: 1.75rem;
    font-weight: bold;
    margin-top: 1rem;
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
  padding: 1% 2.5%;
  width: 30%;
  cursor: pointer;
  margin-bottom: 4%;
  height: 250px;

  &:hover {
    border: 1px solid blue;
    box-shadow: 3px -1.5px black;
  }

  p {
    margin: 0;
    margin-top: 5%;
    height: auto;
  }
`;

const HeaderWrap = styled.div`
  height: 50px;
  width: 100%;
  h2 {
    margin: 0;
    font-weight: bold;
    border-bottom: 1px solid #000000;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const WrappedText = styled(TextTruncate)`
  line-height: 2rem;
`;

const Search = styled.div`
  box-sizing: border-box;
  padding-bottom: 3%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  input {
    width: 90%;
    line-height: 1.75rem;
    font-size: 1rem;
    border: 1px solid lightslategrey;
    padding: 0 5%;
    text-align: center;
    &:hover {
      border: 1px solid blue;
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
            placeholder="&#x1F50D; Search by title"
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
                <HeaderWrap>
                  <h2>{note.title}</h2>
                </HeaderWrap>
                <WrappedText line={5} truncateText="…" text={note.textBody} />
              </NoteWrapper>
            );
          })}
        </NoteList>
      </MainContent>
    );
  }
}

export default NotesList;
