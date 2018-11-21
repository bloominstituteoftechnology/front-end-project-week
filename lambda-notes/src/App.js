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
  max-width: 900px;
  width: 100%;
  margin: 0 auto;

  ${props=>props.windowHeight > props.elementHeight ? `height: ${props.windowHeight}px;` : `height: ${props.elementHeight}px;`}
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

// TODO: fix styling to fit page or element which ever is longer
// TODO: fix delete modal to overlay view with transparent color

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

  componentDidUpdate(){
    const height = document.getElementsByClassName('body-container')[0].scrollHeight;

    if(height !== this.state.height){
      this.setState({height: height});
    }
  }

  render(){
    console.log(window.innerHeight);
    console.log(this.state.height);
    return (
      <AppContainer windowHeight={window.innerHeight} elementHeight={this.state.height}>
  
        <NavContainer>
          <Route path="/" render={props=><NavSideBar {...props}/>}/>
        </NavContainer>
  
        <BodyContainer className='body-container'>
          <Route exact path="/" component={NotesList}/>
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
