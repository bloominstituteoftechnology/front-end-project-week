import React, { Component } from 'react';
import './App.scss';
import MainSection from './components/MainSection';
import SideBar from './components/sidebar'
import axios from 'axios'
import CreateNote from './components/CreateNote'
import {Route} from 'react-router-dom'

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

getNotes=()=>{
 axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => this.setState({ notes: response.data }))
    .catch(err => console.log(err))
    
}

createNote=(note)=>{
  axios
    .post("https://fe-notes.herokuapp.com/note/create",note)
    .then(this.getNotes)
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="appContainer">
        <div className="sideBarClass">
          <h1>Lambda <br></br>Notes</h1>
        <Route path= "/" component={SideBar}></Route>
        </div>
        <Route path="/create" render={props => <CreateNote createNote={this.createNote}/>}></Route>
        <Route exact path="/" render={(props => (<MainSection notes={this.state.notes}/>))}></Route>
       </div>
    );
  }
}

export default App;
