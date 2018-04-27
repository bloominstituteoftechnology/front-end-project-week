import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import  notes  from './notes.js';

// Combine Component Imports into a single file at end
import Header from './components/header/header.js';
import NavBar from './components/navBar/navBar.js';
import InputForm from './components/inputForm/inputForm.js';
import Display from './components/display/display.js';
import Home from './components/home/home.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { notes }  
  }

  // componentDidMount() {

  //   axios
  //     .get('http://localhost:5000/notes')
  //     .then(response => {
  //       this.setState({ notes: response.data })
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <div className="App">

        <Route 
        exact path='/' title='List View' component={Header} />
        <Route exact path='/' render={props => <Home notes={this.state.notes}/>} />


        <Route exact path='/new' component={Header} />
        <Route exact path='/new' render={props => <InputForm notes={this.state.notes}/>} />


        <Route exact path='/note/:id' component={Header} />
        <Route exact path='/note/:id' component={Display} />

        <Route exact path='/note/:id/edit' component={Header} />
        <Route exact path='/note/:id/edit' component={InputForm} />

        <Route exact path='/note' component={Header} />
        <Route exact path='/note' component={Display} />

        <Route path='/' component={NavBar} />
      </div>
    );
  }
}

export default App;
