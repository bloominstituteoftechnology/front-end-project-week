import React, { Component } from 'react';
import './App.css';
import Cards from './Components/Cards.js';
import Input from './Components/Input.js';
import Navigation from './Components/Navigation.js';
// import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      addTitle: '',
      addContent: {content: ''},
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

// ChangeState = () => {
//   this.setState({ Notes: this.state.Notes.concat(this.AddOne) })
// };

// AddOne = {title: 'ONLY ONE', content: 'NOthing'};
  
handleChange = (e) => {
  console.log('HANDLE_CHANGE', e.target.name);
    this.setState({ [`${e.target.name}`]: e.target.value });
  };

  handleAddNote = (e) => {
    console.log("HANDLE_ADD_NOTE", this.state.addTitle, this.state.addContent.content);
    e.preventDefault();
    const { Notes, addContent, addTitle } = this.state;
    // addContent.concat(addTitle);
        console.log("addContent", addContent);
    Notes.push(addContent);
      console.log("Notes", Notes);
    this.setState({ Notes })
      
  }
  // : Notes.concat(newNote)});
  // , newNote: { title: '', content: '' }
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
      {/* <button onClick={this.ChangeState}> Click this Buttton and Change the state? */}
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
                <Cards notes={this.state.Notes} />
              </div>

              <div>
              <Input 
                handleChange={this.handleChange}
                handleAddNote={this.handleAddNote}
                addTitle={this.state.addTitle}
                addContent={this.state.addContent.content}
              />
                {/* <Navigation /> */}
                {/* <Route path="/ViewNotes" component={Cards} /> */}
                {/* <Route path="/CreateNote" component={Input} /> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
