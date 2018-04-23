import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards.js';
import Input from './Components/Input.js';

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

  // componentDidMount() {
  //   this.setState({ notes:  {Title: 'New TTT', Content: ''} });
  // }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    // e.preventDefault();
    console.log("DOES HANDLE SUBMIT WORK", Notes);
    const Notes  = this.state.Notes;
    Notes.push(this.state.newNote);
    console.log("DOES HANDLE SUBMIT PUSH? ", Notes);
    this.setState({ Notes, newNote:{ title: '', content: '' }});
    
   
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <div className='Container '>
          <div className='row'>
            <div className='column_left'>
              <h2 className='col_left_header p-2 text-left'>Lambda Notes</h2>
            </div>
            <div className='column_right'>
              <Cards notes={this.state.Notes} />
              <Input 
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              />
            </div>
          </div>

          

        </div>
      </div>
    );
  }
}

export default App;
