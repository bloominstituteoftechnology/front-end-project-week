import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import List from './components/List';
import Note from './components/Note';
import Create from './components/Create';
import Edit from './components/Edit';
import './App.css';

class App extends Component {
  state = {
    deleteId: null,
  }

  toggleDeleteModal(id) {
    document.getElementById('delete-modal').classList.toggle('delete-modal--display');
    document.getElementById('opaque-shield').classList.toggle('opaque-shield--display');
    this.setState({
      deleteId: this.state.deleteId === null ? id : null,
    });
  }

  processDelete() {
    axios.delete(`http://localhost:4444/notes/${this.state.deleteId}`).then(() => {
      window.location.href = '/';
    })
    .catch((error) => {
      alert('Server error: Please try again later.');
      this.toggleDeleteModal(this.state.deleteId);
    });
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className="left-panel">
            <h1 className="left-panel__heading">
              Lambda
              <br />
              Notes
            </h1>
            <Link to="/">
              <div className="left-panel__button left-panel__view-button">View Your Notes</div>
            </Link>
            <Link to="/create">
              <div className="left-panel__button left-panel__create-button">+ Create New Note</div>
            </Link>
          </div>
          <div className="container">
            <Route path="/" component={List} exact />
            <Route path="/notes/:id" component={Note} toggleDeleteModal={this.toggleDeleteModal}
              processDelete={this.processDelete} />
            <Route path="/create" component={Create} />
            <Route path="/edit/:id" component={Edit} />
          </div>
          <div className="delete-modal" id="delete-modal">
            <div className="delete-modal__warning">Are you sure you want to delete this?</div>
            <div className="delete-modal__delete-button" onClick={this.processDelete}>Delete</div>
            <div className="delete-modal__cancel-button" onClick={this.toggleDeleteModal(this.state.deleteId)}>
              No
            </div>
          </div>
          <div className="opaque-shield" id="opaque-shield" />
        </div>
      </Router>
    );
  }
}

export default App;
