import React, { Component } from 'react';
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
    e.preventDefault();
    // console.log("DOES HANDLE SUBMIT WORK", Notes);
    const Notes  = this.state.Notes;
    Notes.push(this.state.newNote);
    this.setState({ Notes, newNote:{ title: '', content: '' }});
    
   
  }

  render() {
    return (
      <div className="container">
        <div className='new'>
          <div className='row border border-primary'>
            <div className='column_left text-center'>
              <h2 className='col_left_header p-2 text-left'>Lambda Notes</h2>
              <button type='button' className='btn btn-sm mb-2 '>View Your Notes</button>
              <button type='button' className='btn btn-sm'> + Create Your Note</button>
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
