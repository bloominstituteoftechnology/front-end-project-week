import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Navigation from './Navigation';
import ListView from './ListView';
import {Route} from 'react-router-dom';
import CreateView from './CreateView';
import Note from './Note';
import EditView from './EditView';
import axios from 'axios';
import DeleteModal from './DeleteModal';

const URL = 'https://killer-notes.herokuapp.com/note';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      fetching: false,
      fetched: false,
      saving: false,
      saved: false,
      updating: false,
      updated: false,
      deleting: false,
      deleted: false,
      error: null,
      "title": "",
      "textBody": ""
    };
  }

  componentDidMount() {
    const promise = axios.get(`${URL}/get/all`);
    promise.then(({data}) => {
      // console.log(data);
      this.setState({notes: data});
    })
    .catch((error) => this.setState({error}));
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.title === '' || this.state.textBody === '') return null;

    let notes = this.state.notes;
    const note = {
      "title": this.state.title,
      "textBody": this.state.textBody
    };

    const promise = axios.post(`${URL}/create`, note);
    promise.then(({data}) => {
      console.log(data);
      this.setState({
        notes: data,
        "title": "",
        "textBody": ""
      });
    })
    .catch((error) => this.setState({error}));
  };

  handleDelete = (id) => {
    
  };

  handleUpdate = (id) => {
    if(this.state.title === '' && this.state.textBody === '') return null;
    console.log('update');

    const note = {
      "title": this.state.title,
      "textBody": this.state.textBody
    };

    const promise = axios.put(`${URL}/edit/${id}`, note);
    promise.then(({data}) => {
      this.setState({
        notes: data,
        "title": "",
        "textBody": ""
      })
    })
    .catch((error) => this.setState({error}));
  };

  render() {
    return (
      <div className="App-container">
        <div className="App">
          <div style={{display: 'none'}}>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>

          <Navigation />
          <Route exact path="/" component={ListView} />
          <Route path="/create" render={props => (
            <CreateView {...props} title={this.state.title} textBody={this.state.textBody} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          )}/>
          <Route path="/note/:id" render={props => (
            <Note {...props} />
          )}/>
          <Route path="/edit/:id" render={props => (
            <EditView {...props} notes={this.state.notes} title={this.state.title} textBody={this.state.textBody} handleChange={this.handleChange} handleUpdate={this.handleUpdate} />
          )}/>
          <Route path="/delete/:id" render={props => (
            <DeleteModal {...props} />
          )}/>
        </div>
      </div>
    );
  }
}

export default App;
