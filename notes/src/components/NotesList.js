import React from "react";
import SmallNote from "./SmallNote";
import { MainContent, NoteList, Search } from "../styled/NotesList";
import axios from "axios";
import { API } from "../App";

class NotesList extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      search: ""
    };
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
