import React, { Component } from 'react';
import './App.scss';
import MainSection from './components/MainSection';
import SideBar from './components/sidebar'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    }
  }
  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => this.setState({ notes: response.data }))
      .catch(err => console.log(err))

  }
  render() {
    return (
      <div className="appContainer">
        <div className="sideBarClass">
          <h1>Lambda <br></br>Notes</h1>
          <SideBar />
        </div>
        <MainSection notes={this.state.notes} />
        {console.log(this.state.notes)}
       
        

      </div>
    );
  }
}

export default App;
