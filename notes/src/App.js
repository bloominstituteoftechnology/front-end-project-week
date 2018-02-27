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
import Modal from './components/Modal';

class App extends Component {
	componentDidMount() {
	  // fetch notes from db
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
            <Route exact path="/" component={List} />
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
    modal: state.notes.modal
  } 
}

export default connect(mapStateToProps)(App);
