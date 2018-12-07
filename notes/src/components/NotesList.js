import React from "react";
import SmallNote from "./SmallNote";
import styled from "styled-components";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { API } from "../App";

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

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class NotesList extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      search: ""
    };
    // this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${API}/get/all`)
      .then(res => {
        this.setState({ notes: res.data });
        this.props.get(res.data);
      })
      .catch(err => console.error(err));
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.search(e);
  };

  onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({ notes: items });
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
          {this.state.notes.map((note, index) => {
            return (
              <SmallNote
                key={note._id}
                index={index}
                note={note}
                history={this.props.history}
              />
            );
          })}
        </NoteList>
      </MainContent>
    );
  }
}

export default NotesList;
