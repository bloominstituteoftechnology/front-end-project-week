import React, { Component } from 'react';
import './App.css';
import Cards from './Components/YourNotes.js';
import Input from './Components/CreateNote.js';
import ViewNote  from './Components/ViewNote.js';
import EditNote from './Components/EditNote.js';
// import DeleteNote  from './Components/DeleteNote.js';
import Navigation from './Components/Navigation.js';
import { Route, Link } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      Notes: [
      {title: 'One Note', content: 'Blah Blah', id: 0},
      {title: 'Second Note', content: 'blah blah', id: 1},
      {title: 'Third Note', content: 'blah blah blah blah', id: 2},
      {title: 'Fourth Note', content: 'Blah Blah', id: 3},
      {title: 'Fifth Note', content: 'blah blah', id: 4},
      {title: 'Sixth Note', content: 'blah blah blah blah', id: 5}
      ]
    }
  };

  handleViewNotes = () => {
    return (
      <button type='button' className='btn btn-sm mb-2 '>View Your Notes</button>
    )
  }
  handleCreateNotes = () => {
    return (
      <button type='button' className='btn btn-sm'> + Create New Note</button>
    )
  }

  handleAddNote = (content, title, id) => {
    const { Notes } = this.state;
    Notes.push({title, content, id});
    this.setState({ Notes })
    };

  render() {
    return (
      
      <div className="container">
        <div className='new'>
          <div className='row border '>
            <div className='column_left text-center'>
              <h2 className='col_left_header p-2 text-left'>Lambda Notes</h2>
                <div className='navButtons'>
                  <Navigation view={this.handleViewNotes()} create={this.handleCreateNotes()} />
                </div>
            </div>
            <div className='column_right '>
             
              <div>
                
                <Route path={`/YourNotes`}  render ={ () => <Cards notes={this.state.Notes} />} />
                
                <Route path="/CreateNote" render = { () => 
                  <Input handleAddNote={this.handleAddNote}
                    Notes={this.Notes}  />} />

                <Route path="/EditNote" render = { () =>
                  <EditNote handleAddNote={this.handleAddNote}
                    Notes={this.Notes}  />} />

                <Route path={`/ViewNote`}  render ={ () => <ViewNote notes={this.state.Notes} />} />
                {/* <Route path={`/DeleteNote`} component={DeleteNote}/> */}
               
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;