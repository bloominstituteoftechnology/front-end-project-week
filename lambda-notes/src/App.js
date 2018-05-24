import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import ListView from './components/ListView';
import NavBar from './components/NavBar';
import CreateNote from './components/CreateNote';
import ViewNote from './components/ViewNote';
import EditNote from './components/EditNote';
import note from './components/dummyData';


class App extends Component {
  constructor() {
    super();
    this.state = {
      noteList: [],
      current: {}
    }
  }

  componentDidMount() {
    axios
        .get(
            `https://killer-notes.herokuapp.com/note/get/all`)
        .then(
            res => {this.setState({ noteList: res.data })})
        .catch(
            err => {console.log(err)})
  }

  setCurrentNote = (noteID) => {
      axios
        .get(
            `https://killer-List.herokuapp.com/note/get/${noteID}`
        )
        .then(
            res => {this.setState({ current: res.data })}
        )
        .catch(
            err => {console.log(err)}
        )
  }

  render() {
    return (
        <div className='App'>
            <div className='nav-bar'>
                <Route path='/' component={ NavBar } />    
            </div>
            <div className='note-container'>
                <Route exact path='/' render={ (props) => {
                    return (<ListView { ...props } noteList={this.state.noteList} />)}} />
                <Route path='/note/create' component={CreateNote} />
                <Route exact path='/:id' render={ (props) => {
                    return (<ViewNote {...props} current={this.state.current} />)}} />
                <Route path='/:id/edit' component={EditNote} />
            </div>
        </div>
    );
}
}

export default App;
