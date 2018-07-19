import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getNotes } from './Actions';
import NotesContainer from './Components/NotesContainer/NotesContainer';
import { GOOGLE_API_KEY } from './constants';
import { Route, Link } from 'react-router-dom';
import { MiddleSection, Sidebar, TopBar, Main, PrimaryButton, Header, LinkBar } from './Components/StyledComponents/StyledComponents';
import UserMiniCard from './Components/User/UserMiniCard';
import NewNote from './Components/NewNote/NewNote';
import {withRouter} from 'react-router-dom';
import FullSizeNote from './Components/FullSizeNote/FullSizeNote';
import ToggleSwitch from './Components/Misc/ToggleSwitch';

//for API KEY: create a constants.js file, with an export for your google api key 
//or create a variable below this line that stores your API key.

class App extends Component {
  componentDidMount() {
  this.props.getNotes();

  }
  render() {
    
    return (
      <Main>
      <TopBar> <UserMiniCard/><LinkBar><i class="far fa-moon"></i>&nbsp;&nbsp; <ToggleSwitch/> </LinkBar> </TopBar>
      <MiddleSection>
        
      <Sidebar>
      <Header>Lambda Notes</Header>
      <Link style={{textDecoration:'none', width: '100%'}} to='/'><PrimaryButton>View Notes</PrimaryButton> </Link>
      <Link style={{textDecoration:'none', width: '100%'}} to='/notes/new'> <PrimaryButton>Create A Note</PrimaryButton> </Link>
      </Sidebar>
      <Route exact path = '/' component = {NotesContainer}/>
     
      <Route exact path ='/notes/new' render={(props)=> {
      
       return (<NewNote location = {props.history.location}/>)
      }}/>
      <Route exact path ='/:id' render={(props)=> {
      
      return (<FullSizeNote location = {props.history.location}/>)
      }}/>


      </MiddleSection>
      </Main>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    searchText: state.searchText,
    saveInProgress: state.saveInProgress

  }
}

export default withRouter(connect(mapStateToProps, { getNotes })(App));
