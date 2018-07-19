import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getNotes, themeSwitch } from './Actions';
import NotesContainer from './Components/NotesContainer/NotesContainer';
import { GOOGLE_API_KEY } from './constants';
import { Route, Link } from 'react-router-dom';
import { MiddleSection, Sidebar, TopBar, Main, PrimaryButton, Header, LinkBar, DownloadButton } from './Components/StyledComponents/StyledComponents';
import UserMiniCard from './Components/User/UserMiniCard';
import NewNote from './Components/NewNote/NewNote';
import {withRouter} from 'react-router-dom';
import FullSizeNote from './Components/FullSizeNote/FullSizeNote';
import ThemeSwitch from 'react-theme-switch';
import {CSVLink} from 'react-csv';






//for API KEY: create a constants.js file, with an export for your google api key 
//or create a variable below this line that stores your API key.

class App extends Component {


  componentDidMount() {
  this.props.getNotes();
  }

 
  render() {
    let primary = this.props.theme.primary;
    console.log(primary)
    return (
  
      <Main>   
      <TopBar> <UserMiniCard/><LinkBar>  <CSVLink data={this.props.notes}> <DownloadButton> <i class="fas fa-download"></i></DownloadButton></CSVLink><ThemeSwitch/></LinkBar> </TopBar>
       <MiddleSection theme={this.props.theme}> 
        
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
    saveInProgress: state.saveInProgress,
    nightVision: state.nightVision,
    theme: state.theme

  }
}

export default withRouter(connect(mapStateToProps, { getNotes, themeSwitch })(App));
