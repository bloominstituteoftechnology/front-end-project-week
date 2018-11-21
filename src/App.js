import React, { Component } from 'react';
import './App.css';
import Note from './components/Note';
import Sidebar from './components/Sidebar';
import NotesContainer from './components/NotesContainer'

class App extends Component {

  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }
  
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render() {

    return (
      <div>
        <div className="AppContainer">
          <div className="Sidebar">         
            <h1>Lambda Notes</h1> 
            <div className="btn">View Your Notes</div>
            <div className="btn" onClick={this.toggleHidden.bind(this)} >+ Create New Note</div>
            </div>
          <hr></hr>

          <div className="NotesContainer">
            <h1 className="h1">Your Notes:</h1>
            <div>
        {!this.state.isHidden && <Child/>}
      </div>
          </div>
        </div>
      </div>
    );
  }
}

const Child = () => (
  <div className='modal'>
        <NotesContainer />
    </div>
  )  


export default App;
