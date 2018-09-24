import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Nav from './components/Nav';
import Container from './components/Container';


class App extends Component {
  state = {
    notes: [],
    fetching: false,
    deleteConfirm: false
  }

  componentDidMount() {
    this.setState({
      fetching: true
    })
    axios
    .get('https://killer-notes.herokuapp.com/note/get/all')
    .then(response => this.setState({notes: response.data, fetching: false}))
    .catch(err => console.log(err))
  }

  handleDeleteConfirm = () => {
    this.setState({deleteConfirm: !this.state.deleteConfirm})
  }

  //navigation bar always shows, container will hold everything else and routes

  render() {
    return (
      <div className='App'>
        <Nav />
        <Container notes={this.state.notes} deleteConfirm={this.handleDeleteConfirm}/>
      </div>
    );
  }
}

export default App;
