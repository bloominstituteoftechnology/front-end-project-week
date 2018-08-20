import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Banner from './Banner';
import ListView from './ListView';
import CreateNote from './CreateNote';
import ViewNote from './ViewNote';
import EditNote from './EditNote';
import DeleteNote from './DeleteNote';
import LoginForm from './LoginForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      currentNote: {},
      deleting: false,
      loggedIn: true
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/notes')
      .then(response => {
        console.log('GET RESPONSE: ', response)
        this.setState({ notes: response.data })
      })
      .catch(err => {console.log(err)})
  }
  handleSetData = data => {this.setState({ notes: data, deleting: false })}
  toggleDeleting = () => {this.setState({ deleting: !this.state.deleting })}
  toggleLogin = () => {this.setState({ loggedIn: !this.state.deleting })}
  compare = (a,b) => {
    if (a.title.toUpperCase() < b.title.toUpperCase()) {
      return -1;
    } else if (a.title.toUpperCase() > b.title.toUpperCase()) {
      return 1;
    } else {return 0;}
  }
  sortAz = () => {
    let notes = this.state.notes.slice().sort(this.compare);
    this.setState({ notes })
  }
  sortZa = () => {
    let notes = this.state.notes.slice().sort(this.compare).reverse();
    this.setState({ notes })
  }
  handleRefresh = () => {
    axios
      .get('http://localhost:8000/notes')
      .then(response => {
        this.setState({ notes: response.data })
      })
      .catch(err => {console.log(err)})
  }

  render() {
    return (
      <div className="App">
        <Banner />
        <Route exact path='/' render={() => <ListView notes={this.state.notes} sortAz={this.sortAz} sortZa={this.sortZa} />} />
        <Route path='/create' render={() => <CreateNote contentValue={this.state.contentValue} titleValue={this.state.titleValue} handleSetData={this.handleSetData} />} />
        <Route path='/view/:id' render={(props) => <ViewNote {...props} notes={this.state.notes} toggleDeleting={this.toggleDeleting} />} />
        <Route path='/edit/:id' render={(props) => <EditNote {...props} notes={this.state.notes} currentNote={this.state.currentNote} handleSetData={this.handleSetData} handleEditNote={this.handleEditNote} handleEditTitle={this.state.handleEditTitle} handleEditContent={this.state.handleEditContent} handleSetCurrent={this.handleSetCurrent} />} />
        {this.state.deleting ? (<Route path='/view/:id' render={props => (<DeleteNote {...props} toggleDeleting={this.toggleDeleting} handleSetData={this.handleSetData} handleRefresh={this.handleRefresh} />)}/>) : null}
        {this.state.loggedIn ? null : (<Route path='/' render={props => (<LoginForm {...props} toggleLogin={this.toggleLogin} />)}/>)}
      </div>  
    );
  }
}

export default App;
