import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {fetchNotes, setCurrentNote} from './actions/actions';
import NavSideBar from './components/NavSideBar';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import DisplayNote from './components/DisplayNote';
import EditNote from './components/EditNote';

const AppContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`;

const NavContainer = styled.div`
  display: flex;
  width: 25%;
  background-color: #d3d2d3;
  border: 2px solid #c2c3c2;
`;

const BodyContainer = styled.div`
  display: flex;
  width: 75%;
  background-color: #f2f1f2;
  border-top: 2px solid #ececec;
  border-right: 2px solid #ececec;
  border-bottom: 2px solid #ececec;
`;

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      height: 0
    }

    window.onbeforeunload = this.saveCurrentNote;
  }

  saveCurrentNote = ()=>{
    window.localStorage.setItem("currentnote", JSON.stringify(this.props.currentNote));
  }

  componentDidMount(){
    this.props.fetchNotes();

    const currentNote = JSON.parse(localStorage.getItem("currentnote"));
    if(currentNote){
      this.props.setCurrentNote(currentNote);
    }
  }

  updateHeight = height=>{
    console.log('This works set state in redux', height);
  }

  render(){
    return (
      <AppContainer ref="container">
  
        <NavContainer>
          <Route path="/" render={props=><NavSideBar {...props}/>}/>
        </NavContainer>
  
        <BodyContainer>
          <Route exact path="/" render={props=><NotesList {...props} updateHeight={this.updateHeight}/>}/>
          <Route path="/create-note" render={props=><CreateNote {...props}/>}/>
          <Route path="/note/:id" render={props=><DisplayNote {...props}/>}/>
          <Route path="/edit/:id" render={props=><EditNote {...props}/>}/>
        </BodyContainer>
        
      </AppContainer>
    )
  }
}

const mapStateToProps = state=>{
  return{
    currentNote: state.currentNote
  }
}

export default withRouter(connect(mapStateToProps, {fetchNotes, setCurrentNote})(App));
