import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import LambdaNotes from './components/LambdaNotes';
import Notes from './components/Notes';

class App extends Component {
constructor(props) {
   super(props);
   this.state ={
      notes:[]
   }
}
componentDidMount() {
   axios.get('https://fe-notes.herokuapp.com/note/get/all')
        .then( response => {
          console.log(response.data)
            this.setState({
                notes: response.data
            })
        })
}
  render() {
    return (
      <div className="App">
        <Header />
        <LambdaNotes />
        <Notes notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
