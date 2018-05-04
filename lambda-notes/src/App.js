import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import axios from 'axios';
import { LeftPanel, NewNote, NotePage, EditNote } from './components/';
import NoteList from './components/NoteList';

class App extends Component {
  state = {
    notes: [],
    note: {
      title: '',
      text: ''
    }
  };

  componentDidMount() {
    this.noteGetter();
  }

  noteGetter = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/notes');
      this.setState({ notes: response.data });
    } catch (err) {
      console.log(err.message);
    }
  };

  // updates state every time you put something in your input form
  handleChange = ({ target: { name, value } }) => {
    this.setState({ note: { ...this.state.note, [name]: value } });
  };

  // submits a new note
  handleSubmit = async () => {
    const { note, notes } = this.state;
    try {
      await axios.post('http://localhost:5000/api/notes', note);
      this.setState({ notes, note: { title: '', text: '' } });
    } catch (err) {
      console.log(err);
    }
  };

  handleEdit = async (id) => {
    const { note, notes } = this.state;
    try {
      await axios.put(`http://localhost:5000/api/notes/${id}`, note);
      this.setState({ notes, note: { title: '', text: '' } });
    } catch (err) {
      console.log(err.message);
    }
  };

  handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/notes/${id}`);
      this.noteGetter();
    } catch (err) {
      console.log(err.message);
    }
  };

  NoteList = (props) => <NoteList notes={this.state.notes} noteGetter={this.noteGetter} />;

  ViewNotePage = ({
    match: {
      params: { id }
    }
  }) => {
    const note = this.state.notes.find((note) => note._id === id);
    return <NotePage {...note} del={this.handleDelete} />;
  };

  NewNote = (props) => {
    return (
      <NewNote
        {...props}
        {...this.state.note}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  };

  EditNote = (props) => {
    const { id } = props.match.params;
    return (
      <EditNote
        {...props}
        {...this.state.note}
        id={id}
        handleChange={this.handleChange}
        edit={this.handleEdit}
      />
    );
  };

  render() {
    return (
      <div className="App">
        <SplitPane split="vertical" defaultSize={230}>
          <LeftPanel />
          <Switch>
            <Route exact path="/" render={this.NoteList} />
            <Route path="/note/:id" render={this.ViewNotePage} />
            <Route path="/new" render={this.NewNote} />
            <Route path="/edit/:id" render={this.EditNote} />
            {/* <Route path="/delete/:id" component={DeleteModal} /> */}
          </Switch>
        </SplitPane>
      </div>
    );
  }
}

export default App;
