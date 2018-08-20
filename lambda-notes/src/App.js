import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, H1, H2, H3 } from './components/StyledComponents';
import SideBar from './components/SideBar';
import { connect } from 'react-redux';
import { fetchNotes } from './actions';
import ListView from './components/ListView/ListView';

class App extends Component {
  
  componentDidMount(){
    this.props.fetchNotes()
  }
  render() {
    return (
      <div className="App">
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="appView">
          <H2>Your Notes:</H2>
          <ListView {...this.props}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes
  }
}

export default connect(mapStateToProps, { fetchNotes })(App);
