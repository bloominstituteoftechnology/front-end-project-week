import React, { Component } from 'react';
import './App.css';

import SideMenu from './components/SideMenu';
import data from './data';

import { Route } from 'react-router-dom';
import DisplayNoteList from './components/DisplayNoteList';
import DisplayNote from './components/DisplayNote';
import CreateNote from './components/CreateNote';
import DeleteNote from './components/DeleteNote';
import EditNote from './components/EditNote';

class App extends Component {
  constructor() {
    super();
    this.state = {
    notes: []
    };

    this.submitAdd = this.submitAdd.bind(this);
    }
    

    componentDidMount() {
      this.setState({ notes: data });
      }


      submitAdd = (note) =>{

      }
      submitEdit = (note) => {
        console.log("submit Edit function in App")
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

  <Route            exact
                    path="/Notes/:id/delete"
                    render={props => (
                    <DeleteNote {...props} 
                         notes={this.state.notes}
                        
                        deleteNote={this.props.deleteNote}/>
                    )}
                    />

         <Route
                    path="/Notes/edit/:id"
                    render={props => (
                    <EditNote {...props} 
                         notes={this.state.notes}
                        submitEdit={this.submitEdit}
                      />
                    )}
                    />

        <Route
                   exact
                    path="/createNote"
                    render={props => 
                    <CreateNote {...props} 
                        submitAdd={this.submitAdd}/>}
                    />
      </div>
    );
  }
}

export default App;
