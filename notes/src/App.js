import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getNotes } from './Actions';
import NotesContainer from './Components/NotesContainer/NotesContainer';
import { GOOGLE_API_KEY } from './constants';
import { Route, Link } from 'react-router-dom';
import { MiddleSection, Sidebar, TopBar, Main } from './Components/StyledComponents/StyledComponents';
import UserMiniCard from './Components/User/UserMiniCard';

//for API KEY: create a constants.js file, with an export for your google api key 
//or create a variable below this line that stores your API key.

class App extends Component {
  componentDidMount() {
  this.props.getNotes();

  }
  render() {
    return (
      <Main>
        <TopBar> <UserMiniCard/> </TopBar>
      <MiddleSection>
        
      <Sidebar/>
      <Route path = '/notes' component = {NotesContainer}/>
      </MiddleSection>
      </Main>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    searchText: state.searchText,

  }
}

export default connect(mapStateToProps, { getNotes })(App);
