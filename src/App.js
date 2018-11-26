import React, { Component } from 'react';
import './App.css';
import NoteList from './components/NoteList';
import NotesContainer from './components/NotesContainer';
import Modal from 'react-modal';
class App extends Component {

  state = {
    secondModalIsOpen: false
  };

  openSecondModal = () => {
    this.setState({ secondModalIsOpen: true });
  };

  closeSecondModal = () => {
    this.setState({ secondModalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        
        <div className="Sidebar">
          <h1>Lambda Notes</h1>
          <button className="btn">View Notes</button>
          <button className="btn" onClick={this.openSecondModal}>+ Create Note</button>          
        </div>
        <div>
          <hr></hr>
        </div>

        <div className="NotesContainer">
        <NoteList component={NoteList} />        
        </div>
        
        <div>
        <Modal
          isOpen={this.state.secondModalIsOpen}
          onRequestClose={this.closeSecondModal}
          >
          <button className="exit" onClick={this.closeSecondModal}>close</button>
            <NotesContainer />
            
        </Modal>
      </div>

      </div>

      
    );
  }
}



export default App;