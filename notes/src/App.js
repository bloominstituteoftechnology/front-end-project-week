import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getNotes, themeSwitch } from './Actions';
import NotesContainer from './Components/NotesContainer/NotesContainer';
import { GOOGLE_API_KEY } from './constants';
import { Route, Link } from 'react-router-dom';
import { MiddleSection, Sidebar, TopBar, Main, PrimaryButton, Header, LinkBar, DownloadButton, LogoutButton } from './Components/StyledComponents/StyledComponents';
import UserMiniCard from './Components/User/UserMiniCard';
import NewNote from './Components/NewNote/NewNote';
import {withRouter} from 'react-router-dom';
import FullSizeNote from './Components/FullSizeNote/FullSizeNote';
import ThemeSwitch from 'react-theme-switch';
import {CSVLink} from 'react-csv';
import DeleteModal from './Components/DeleteModal/DeleteModal';
import firebase from './firebase';




var database = firebase.database();
console.log('firebase', database);


//for API KEY: create a constants.js file, with an export for your google api key 
//or create a variable below this line that stores your API key.

class App extends Component {
 constructor(props) {
super(props)
   this.state={
     currentUser: null,
     isLoggedIn: false,
   }
 }

  componentDidMount() {
      this.props.getNotes();
  }

  SignIn = (e) => {
    let provider;
    if (e.target.name === 'facebook') {
      provider = new firebase.auth.FacebookAuthProvider();
    } else if (e.target.name === 'google') {
      provider = new firebase.auth.GoogleAuthProvider();
    }
    firebase.auth().signInWithPopup(provider)
      .then(({
        user
      }) => {
        this.setState({
          currentUser: user,
          isLoggedIn: true,
        })
      })
  }
  
  SignOut = () => {

    firebase.auth().signOut().then(() => {
      this.setState({
        currentUser: null,
        isLoggedIn: false,
      })
    })
  }


 
  render() {
    let primary = this.props.theme.primary;
    console.log(primary)
    return (
  
      <Main>   
      <TopBar> {this.state.isLoggedIn? <UserMiniCard newUser ={this.state.currentUser}/> : <button name='google' className="loginBtn loginBtn--google" onClick={(e)=>{this.SignIn(e)}}>Login with Google</button>} <LinkBar>  <CSVLink data={this.props.notes}> <DownloadButton> <i className="fas fa-download"></i></DownloadButton></CSVLink><ThemeSwitch/></LinkBar> </TopBar>
       <MiddleSection theme={this.props.theme}> 
   
      <Sidebar>
      <Header>Lambda Notes</Header>
      <Link style={{textDecoration:'none', width: '100%'}} to='/'><PrimaryButton>View Notes</PrimaryButton> </Link>
      <Link style={{textDecoration:'none', width: '100%'}} to='/notes/new'> <PrimaryButton>Create A Note</PrimaryButton> </Link>
      {this.state.isLoggedIn ? <LogoutButton onClick={()=>{this.SignOut()}}>Logout</LogoutButton> : null}
      </Sidebar>
     {this.state.isLoggedIn? <Route exact path = '/'
      component = {NotesContainer}
      /> : <Route exact path = '/'
      component = {NewNote}
     /> }
     <Route exact path = '/:id'
          render = {
              (props) => {
      return (
      <FullSizeNote location = {props.history.location}/>
    )
      }}/> 

     
    

  
      <Route path ='/:id/delete' render={(props)=> {
      return (
        <React.Fragment>
        <FullSizeNote location = {props.history.location}/>
      <DeleteModal {...props}  location = {props.history.location}/>
      </React.Fragment>
    )
      }}/>

        <Route exact path ='/notes/new' render={(props)=> {
       return (<NewNote location = {props.history.location}/>)
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
