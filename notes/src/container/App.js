import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';
import NotesList from '../components/NotesList';
import NoteForm from '../components/NoteForm';
import NotePage from '../components/NotePage';
import styled from 'styled-components';
import './App.css';

const NavButton = styled.button`
  width: 180px;
  height: 40px;
  margin-bottom: 25px;
  border: 1px solid gray;
  background: lightgreen;
  color: black;
  font-weight: bold;
  font-size: 14px;
`;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes:[]
    }
  }

  componentDidMount() {
    axios
        .get('https://killer-notes.herokuapp.com/note/get/all')
          .then(res => {
            //console.log(res);
            this.setState({notes: res.data});
          }).catch(err => console.error(`Error: ${err}`));
  }


  render() {
    return (
    
      <React.Fragment>
        <header className="App-header">
          <h1 className="App-title">List View</h1>
        </header>
        <hr />
        <ul className='navBar'>         
        <NavLink to="/create-note" activeClassName="activeNavButton">
        <NavButton>+Create New Note</NavButton>
        </NavLink>
        
        <NavLink to="/notes" activeClassName="activeNavButton">
        <NavButton>View Your Notes</NavButton>
        </NavLink>
      </ul> 

      
      
        <Route 
          exact path='/create-note' 
          component={NoteForm} 
        />
        <Route 
          exact path='/notes' 
          render={(props) => 
            (<NotesList {...props} 
            notes={this.state.notes} />)} 
          />
          <Route 
          path='/notes/:id'
          component={NotePage}
          // render={props => 
          // <NotePage {...props} getNote={this.getNote} />}
          />

      </React.Fragment>
    );
  }
}

export default App;
