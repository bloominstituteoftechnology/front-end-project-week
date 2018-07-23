import React, { Component } from 'react';
import './App.css';
import SideBar from './components/Sidebar';


class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: [
        {
          title: 'Lorem',
          note: 'Ipsum',
          id: Date.now()
        }
      ],
      title: '',
      note: '',
    }
  }

  change = e => {
    this.setState({ [e.target.name]: e.target.value });  
  }

  submit = e => {
    e.preventDefault()
    this.state.notes.push({
      title: this.state.title,
      note: this.state.note,
      id: Date.now()
    })
    this.setState({title: '', note: ''})
  }




  render() {
    return (
      <div className="App">
      <SideBar />
        {this.state.notes.map((note, index) => {
          return <div key={index}>{note.title} <hr /> {note.note}</div>
        })}

        <form onSubmit={this.submit}>
        <input
        type='text'
        name='title'
        value={this.state.title}
        placeholder='title'
        onChange={this.change}
        />

        <input
        type='text'
        name='note'
        value={this.state.note}
        placeholder='note'
        onChange={this.change}
        />

        <button
        type='submit'>
        ADD NOTE
        </button>
        </form>
        
      </div>
    );
  }
}

export default App;
