import React, { Component } from 'react';
import './App.css';
import Notes from './Notes';
// import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Route } from 'react-router-dom';
import Header from './Components/header';
import NavBar from './Components/navBar';
import InputForm from './Components/inputForm';
import Display from './Components/display';
import Home from './Components/home';
class App extends Component {
  state = { Notes }

  render() {
    return (
      <div className="App">

        <Route
          exact path='/' title='List View' component={Header} />
        <Route exact path='/' render={props => <Home notes={this.state.Notes} />} />


        <Route exact path='/new' component={Header} />
        <Route exact path='/new' render={props => <InputForm notes={this.state.Notes} />} />


        <Route exact path='/Notes/:id' component={Header} />
        <Route exact path='/Notes/:id' component={Display} />

        <Route exact path='/Notes/:id/edit' component={Header} />
        <Route exact path='/Notes/:id/edit' component={InputForm} />

        <Route exact path='/Notes' component={Header} />
        <Route exact path='/Notes' component={Display} />

        <Route path='/' component={NavBar} />
      </div>
    );
  }
}

export default App;