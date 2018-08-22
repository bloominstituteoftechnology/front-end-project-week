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
      deleting: false,
      loggedIn: true
    }
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API}/notes`)
      .then(response => {
        this.setState({ notes: response.data })
      })
      .catch(err => {console.log(err)})
    // axios
    //   .get('https://thawing-dawn-77220.herokuapp.com/notes')
    //   .then(response => {
    //     this.setState({ notes: response.data })
    //   })
    //   .catch(err => {console.log(err)})
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
      .get('https://thawing-dawn-77220.herokuapp.com/notes')
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
        <Route path='/create' render={() => <CreateNote handleRefresh={this.handleRefresh} />} />
        <Route path='/view/:id' render={(props) => <ViewNote {...props} notes={this.state.notes} toggleDeleting={this.toggleDeleting} />} />
        <Route path='/edit/:id' render={(props) => <EditNote {...props} notes={this.state.notes} handleRefresh={this.handleRefresh} />} />
        {this.state.deleting ? (<Route path='/view/:id' render={props => (<DeleteNote {...props} toggleDeleting={this.toggleDeleting} handleRefresh={this.handleRefresh} />)}/>) : null}
        {this.state.loggedIn ? null : (<Route path='/' render={props => (<LoginForm {...props} toggleLogin={this.toggleLogin} />)}/>)}
      </div>  
    );
  }
}

export default App;
