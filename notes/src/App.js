import React, { Component } from 'react';
import './App.css';
// import { fetchLuke } from './actions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import List from './components/List';
import EditNote from './components/EditNote';
import ViewNote from './components/ViewNote';
import AddNote from './components/AddNote';
import Login from './components/Login';
import Modal from './components/Modal';
import { fetchNotes } from './actions';
import './firebase';

class App extends Component {
	componentDidMount() {
    this.props.fetchNotes();
	}

  render() {
    return (
      <Router>
        <div className="App">
          {this.props.modal.showing ? <Route component={Modal} /> : null}
          <div className="sidebar">
            <SideBar />
          </div> 
          <div className="content">  
            <Route exact path="/" component={Login} />
            <Route path="/list" component={List} />
            <Route path="/addnote" component={AddNote} />
            <Route path="/editnote" component={EditNote} />
            <Route path="/notes/:id" component={ViewNote} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal
  } 
}

export default connect(mapStateToProps, { fetchNotes })(App);
