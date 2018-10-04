import React, { Component } from 'react';
import './App.css';
import LambdaNav from './components/LambdaNav.js';
import HomePage from './components/Homepage/HomePage.js';
import axios from 'axios';
import { Route } from 'react-router-dom';
import CreateNote from './components/CreateNotePage/CreateNote.js'
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

  const URL = 'https://killer-notes.herokuapp.com/note'
  axios
  .get(`${URL}/get/all`)
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
  };

  render() {


    return (
      <div className="App">
        <Route path = '/notes/:id' render ={props => <SinglePage {...props} notes={this.state.notes} diableOnClickOutside={false} />}/>

        <Route path= "/" component ={LambdaNav} />

        <Route exact path = '/' render ={props => <HomePage {...props} filterNotes={this.filterNotes} notes = {this.state}/>}/>
        <Route path = "/CreateNote"  render ={props => <CreateNote {...props} notes = {this.state} />}/>
      </div>
    );
  }
}

export default App;
