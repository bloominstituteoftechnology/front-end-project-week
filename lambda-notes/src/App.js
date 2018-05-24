import React, { Component } from 'react';
import './App.css';

import { Route, Link } from 'react-router-dom';
import { Export, DeleteNote, CreateNote, EditNote, ListNotes, Note } from './components/index';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
            id: 0,
            title: 'Test Note',
            body: 'This Note is a test! Did it work??'
        },
        {
            id: 1,
            title: 'Note #2',
            body: 'I love taking notes!!'
        },
        {
            id: 2,
            title: 'Bill of Rights',
            body: '1) Freedom of Speech 2) The Right to Bear Arms 3) The Housing of Soldiers 4) Protection from Unreasonable Search and Seizure 5) Protection of Rights to Life, Liberty and Property 6) Rights of Accused Persons in Criminal Cases 7) Rights in Civil Cases 8) Excessive Bail, Fines and Punishments Forbidden 9) Other Rights Kept by the People 10) Undelegated Powers Kept by the States and the People'
        }
      ]
    }
  }


  render() {
    return (
      <div className="app-container">
        <div className="sidebar">
          <h1>Lambda Notes</h1>
          <Link to="/">
            <button>View Your Notes</button>
          </Link>
          <Link to="/create">
            <button>+ Create New Note</button>
          </Link>
        </div>
        <div>
          <Route exact path="/" render={(props) => <ListNotes {...props} notes={this.state.notes} />} />
          <Route path="/note/:id" render={(props) => <Note {...props} notes={this.state.notes} />} />
          <Route path="/create" render={(props) => <CreateNote {...props} notes={this.state.notes} />} />
          <Route path="/note/:id/edit" render={(props) => <EditNote {...props} notes={this.state.notes} />} />
          <Route path="/note/:id/delete" render={(props) => <DeleteNote {...props} notes={this.state.notes} />} />
          <Route path="/export" render={(props) => <Export {...props} notes={this.state.notes} />} />
        </div>
      </div>
    );
  }
}

export default App;
