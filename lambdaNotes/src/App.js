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

    this.SubmitAdd = this.SubmitAdd.bind(this);
    }
    

    componentDidMount() {
      this.setState({ notes: data });
      }


      SubmitAdd = (note) =>{

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
                    render={props => (
                    <DisplayNote {...props} 
                         notes={this.state.notes}
                        submitEdit={this.submitEdit}
                        deleteNote={this.props.deleteNote}/>
                    )}
                    />
        <Route
                   exact
                    path="/createNote"
                    render={props => 
                    <CreateNote {...props} 
                        SubmitAdd={this.SubmitAdd}/>}
                    />
      </div>
    );
  }
}

export default App;
