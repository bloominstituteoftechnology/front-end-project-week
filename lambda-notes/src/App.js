import React, { Component } from 'react';
import './App.css';
import LambdaNav from './components/LambdaNav.js';
import HomePage from './components/Homepage/HomePage.js';
import axios from 'axios';


import CreateNote from './components/CreateNotePage/CreateNote.js';

import { Route, Switch,Fade } from 'react-router-dom';


import SinglePage from './components/SinglePage/SinglePage.js';




class App extends Component {

  constructor() {
  super();
      this.state = {
        notes: [

        ]
      };

    }


  componentDidMount(){

  const URL = 'http://localhost:3300/api/notes'
  axios
  .get(`${URL}`)
  .then(response => {
    this.setState( ()  => ({notes:response.data}));
  })
  .catch(err => {
      console.error('Server Error', err);
  })
  }




  filterNotes = arr => event => {

    const result = this.state.notes.filter((p)=> {
    return p.title.toLowerCase().indexOf(arr.toLowerCase()) > -1;
    });
    event.preventDefault();
    this.setState({
        notes: result,
      });
  }

  render() {



    return (
      <div className="App">



  <Route exact path = '/notes/:id' render ={props => <SinglePage {...props} notes={this.state.notes} />}/>
  <Route path = '/' render ={props => <LambdaNav {...props} filterNotes={this.filterNotes}/>}/>
  <Route exact path = "/CreateNote"  render ={props => <CreateNote {...props} notes = {this.state} />}/>
  <Route exact path = '/' render ={props => <HomePage {...props} notes = {this.state}/>}/>





      </div>
    );
  }
}

export default App;
