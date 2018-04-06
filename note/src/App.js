import React, { Component } from 'react';
import './App.css';
// import { fetchLuke } from './actions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import List from './components/List';
// import EditNote from './components/EditNote';
// import ViewNote from './components/ViewNote';
// import AddNote from './components/AddNote';
import Login from './components/Login';
// import Modal from './components/Modal';
// import './firebase';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          {/* {this.props.modal.showing ? <Route component={Modal} /> : null} */}
          <Route path="/app" component={SideBar} />
          <Route path="/app/list" component={List} />
          {/* <Route path="/app/addnote" component={AddNote} />
          <Route path="/app/editnote" component={EditNote} />
          <Route path="/app/notes/:id" component={ViewNote} /> */}
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

export default connect(mapStateToProps)(App);