import React, { Component } from 'react';
import './App.css';

import SideMenu from './components/SideMenu';
import data from './data';

import { Route } from 'react-router-dom';
import DisplayNoteList from './components/DisplayNoteList';
import DisplayNote from './components/DisplayNote';
import CreateNote from './components/CreateNote';


class App extends Component {
  constructor() {
    super();
    this.state = {
    notes: []
    };
    }
    

    componentDidMount() {
      this.setState({ notes: data });
      }


  render() {
    return (
      <div className="App">
        <SideMenu />
       
        <Route
                    exact
                    path="/"
                    render={props => (
                        <DisplayNoteList  {...props}  notes={this.state.notes}  />
                    )}
                    />

        <Route
                    path="/Notes/:id"
                    render={props => 
                    <DisplayNote {...props} 
                         notes={this.state.notes} 
                        submitEdit={this.submitEdit}
                        deleteNote={this.props.deleteNote}/>}
                    />
        <Route
                    path="/Notes/:id"
                    render={props => 
                    <CreateNote {...props} 
                        CreateNote={this.createNote}/>}
                    />
      </div>
    );
  }
}

export default App;
