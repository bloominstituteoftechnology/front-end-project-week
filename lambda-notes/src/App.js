import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import Notes from './components/Notes';

class App extends Component {
  constructor(props){
    super()
    this.state = {
      notes: []
    }
  }

  componentDidMount(){
    axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => this.setState({notes: response.data}))
      .catch(err => console.log(err))
  }

  postNote = (newNote) => {
    axios
      .post("https://killer-notes.herokuapp.com/note/edit/id", newNote)
      .then(res => this.setState({ notes: res.data }, this.props.history.push('/')))
      .catch(err => {console.log(err)});
  }


  render() {
    return (
      <div className="App">
        <SideBar />
        <Notes notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
