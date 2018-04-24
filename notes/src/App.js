import React, { Component } from 'react';
import './App.css';
import Cards from './Components/Cards.js';
import Input from './Components/Input.js';
import Navigation from './Components/Navigation.js';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newNote: { title: '', content: '' },
      Notes: [
      {title: 'One Note', content: 'Blah Blah'},
      {title: 'Second Note', content: 'blah blah'},
      {title: 'Third Note', content: 'blah blah blah blah'},
      {title: 'Fourth Note', content: 'Blah Blah'},
      {title: 'Fifth Note', content: 'blah blah'},
      {title: 'Sixth Note', content: 'blah blah blah blah'}
      ]
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const Notes  = this.state.Notes;
    Notes.push(this.state.newNote);
    this.setState({ Notes, newNote:{ title: '', content: '' }});
  }

  handleViewNotes = () => {
    return (
      <button type='button' className='btn btn-sm mb-2 '>View Your Notes</button>
    )
  }
  handleCreateNotes = () => {
    return (
      <button type='button' className='btn btn-sm'> + Create Your Note</button>
    )
  }

  render() {
    return (
      <div className="container">
        <div className='new'>
          <div className='row border border-primary'>
            <div className='column_left text-center'>
              <h2 className='col_left_header p-2 text-left'>Lambda Notes</h2>
                <Navigation view={this.handleViewNotes()} create={this.handleCreateNotes()} />
    
            </div>
            <div className='column_right '>
              <div>
                <Cards notes={this.state.Notes} />
              </div>

              <div>
              {/* <Input 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              /> */}
                <Navigation />
                {/* <Route path="/ViewNotes" component={Cards} /> */}
                <Route path="/CreateNote" component={Input} />

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
