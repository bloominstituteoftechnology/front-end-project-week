import React, { Component } from "react";
import { Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { testData } from "./testData";
import NoteList from "./components/NoteList";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
// import SimpleStorage from "react-simple-storage";
import { AppContainer } from "./components/styles";
import axios from 'axios'

const ALL = "https://killer-notes.herokuapp.com/note/get/all";
const CREATE = "https://killer-notes.herokuapp.com/note/create";
const DELETE = "https://killer-notes.herokuapp.com/note/delete";
const GET = "https://killer-notes.herokuapp.com/note/get";
const PUT = "https://killer-notes.herokuapp.com/note/edit";

class App extends Component {
  state = {
    notes: [],
    loading: false
  };

  componentDidMount() {
		this.setState({ loading: true });
		axios.get(ALL).then(response => {
			this.setState({ notes: response.data, loading: false });
		});
	}

  handleCreateNote = note => {
		this.setState({ loading: true });
		axios.post(CREATE, note).then(response => {
			axios.get(`${GET}/${response.data.success}`).then(response => {
				this.setState(prevState => {
          return {
            notes: [...prevState.notes, response.data],
					loading: false,
          }
				});
			});
		});
	};

  handleEdit = (id, edited) => {
		console.log("we got in.");
		this.setState({ loading: true });
		axios.put(`${PUT}/${id}`, edited).then(response => {
			this.setState(prevState => ({
				notes: prevState.notes.map(note => {
					if (note._id == response.data._id) {
						return response.data;
					} else {
						return note;
					}
				}),
				loading: false,
			}));
		});
	};

  handleDeleteNote = id => {
		this.setState({ loading: true });
		axios.delete(`${DELETE}/${id}`).then(() => {
			axios.get(ALL).then(response => {
				this.setState({ notes: response.data, loading: false });
			});
		});
	};

  // removed this from render: <SimpleStorage parent={this} />
  render() {
    console.log("App", this.props);
    return (
      <AppContainer>
        <Sidebar />
        <Route
          exact
          path="/"
          render={() => <NoteList notes={this.state.notes} />}
        />
        <Route
          exact
          path="/notes"
          render={() => <NoteList notes={this.state.notes} />}
        />
        <Route
          exact
          path="/create"
          render={() => <CreateNote handleSubmit={this.handleCreateNote} />}
        />
        {/* this route will handle the single note view as well as editing and deleting */}
        <Route
          exact
          path="/notes/:id"
          render={props => (
            <Note
              {...props}
              notes={this.state.notes}
              handleSubmit={this.handleEdit}
              handleDelete={this.handleDeleteNote}
            />
          )}
        />
      </AppContainer>
    );
  }
}

export default App;
