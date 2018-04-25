import React, { Component } from 'react';
import NotesList from '../src/Components/NotesList';
// import CreateNote from '../src/Components/CreateNote';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        newNote: '',
        notes: [{
          title: 'Hello',
          body: 'World'
        }]
    };
    
  }

  // componentDidMount() {
  //   this.setState({notes})
  // }
  createNewCard(props) {
    console.log('testing create new card.' + props)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="leftbox">
              <h3 className="title">Lambda</h3>
              <h3 className="title">Notes</h3>
                <button className ="Buttons">View Your Notes</button>
                <button className ="Buttons" onClick={() => this.createNewCard(this.state)}>+ Create New Note</button>
            </div>
          </div>
          <div className="col-9">
            <div className="rightbox">
                <h3>Your Notes:</h3>
              <NotesList notes={this.state.notes}/>
            </div>
          </div>
        </div>
      </div> // container!!!
    );
  }
}

export default App;
