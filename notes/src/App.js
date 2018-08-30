import React, { Component } from 'react';
import './App.css';
import { Link, Route } from "react-router-dom";


import Notes from "./components/Notes";
import SingleNote from './components/SingleNote'
import Edit from './components/Edit'
import NewNote from './components/NewNote'
// import SideBar from './components/SideBar'
import { Button } from 'reactstrap'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          _id: 1,
          title: "note2",
          textBody: "Test Test Test Test"
        },
        {
          _id: 2,
          title: "note1",
          textBody: "Test Test Test Test"
        },
        {
          _id: 3,
          title: "note3",
          textBody: "Test Test Test Test"
        },
        {
          _id: 4,
          title: "note4",
          textBody: "Test Test Test Test"
        }
      ],
      title: '',
      textBody: '',
      _id: 5,
    }

  }

  addNote = (e) => {
    e.preventDefault();

    const notes = this.state.notes.slice();

    notes.push({
      title: this.state.title,
      textBody: this.state.textBody,
      _id: this.state._id
    });

    const _id = this.state._id + 1;

    this.setState({
      notes, _id, title: '', textBody: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleEdit = (e, id, push) => {
    e.preventDefault();

    const notes = this.state.notes.map(eachNote => {
      if (eachNote._id === id) {
        if (this.state.title.length) eachNote.title = this.state.title;
        if (this.state.textBody.length) eachNote.textBody = this.state.textBody;
      }
      return eachNote;
    });

    this.setState({
      notes,
      title: '',
      textBody: '',
    })
      push(`/notes/${id}`)
  }

  handleDelete = (e, id, push) => {
    // delete stuff
    this.setState({notes: this.state.notes.filter(note => note._id !== id)})
    push('/notes')
  }


  render() {
    return (
      <div className="App">
        <div className="sidenav">
          <h1 className="title">Lambda Notes </h1>
          <Link to='/notes'>
            <Button className="li">View Your Notes</Button>
          </Link>
          <Link to="/new" >
            <Button className="li">Create New Note</Button></Link>
        </div>
        <Route exact path="/" render={() =>
          <div>Welcome young master</div>} />

        <Route exact path='/new' render={(props) =>
          <NewNote {...props} handleChange={this.handleChange} addNote={this.addNote} title={this.state.title} textBody={this.state.textBody} />} />

        <Route exact path='/edit/:id' render={(props) =>
          <Edit {...props} handleChange={this.handleChange} handleEdit={this.handleEdit} title={this.state.title} textBody={this.state.textBody} notes={this.state.notes} />} />

        <Route exact path='/notes' render={() =>
          <div><Notes notes={this.state.notes} /></div>} />

        <Route path="/notes/:id" render={(props) =>
          <SingleNote {...props} notes={this.state.notes} handleDelete = {this.handleDelete} />} />
      </div>
    );
  }


}

export default App;
