import React, { Component } from 'react';
import axios from 'axios';
import NotesList from '../components/NotesList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes:[]
    }
  }

  componentDidMount() {
    axios
        .get('https://killer-notes.herokuapp.com/note/get/all')
          .then(res => {
            //console.log(res);
            this.setState({notes: res.data});
          }).catch(err => console.error(`Error: ${err}`));
  }


  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <h1 className="App-title">List View</h1>
        </header>
        <NotesList notes={this.state.notes} />
        <hr />
       
      </React.Fragment>
    );
  }
}

export default App;
