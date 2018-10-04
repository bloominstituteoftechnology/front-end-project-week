import React, { Component } from 'react';
import './App.css';
import LambdaNav from './components/LambdaNav.js';
import HomePage from './components/Homepage/HomePage.js';
import axios from 'axios';
import { Route, Switch,Fade } from 'react-router-dom';
import CreateNote from './components/CreateNotePage/CreateNote.js'
import SinglePage from './components/SinglePage/SinglePage.js';
import onClickOutside from "react-onclickoutside";


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
    var EnhancedComponent = onClickOutside(SinglePage);

    return (
      <div className="App">


            <Route exact path = '/notes/:id' render ={props => <EnhancedComponent {...props} notes={this.state.notes} diableOnClickOutside={false} />}/>


          <Route path= "/" component ={LambdaNav} />
          <Route exact path = "/CreateNote"  render ={props => <CreateNote {...props} notes = {this.state} />}/>
          <Route exact path = '/' render ={props => <HomePage {...props} filterNotes={this.filterNotes} notes = {this.state}/>}/>

      </div>
    );
  }
}

export default App;
