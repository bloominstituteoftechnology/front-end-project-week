import React, { Component } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import {Route} from 'react-router-dom';
import axios from 'axios';
import ViewNote from './components/ViewNote';
// import Authenticate from './components/Authentication/Authenticate';
import Register from './components/Register';
// import Login from './components/Login/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ['1']
    }
  }

/*Exported function met to fetch API data for this state via a different component*/
  setData = () => {
    axios
      .get(`https://nameless-harbor-91626.herokuapp.com/users/${localStorage.getItem('userID')}/notes`)
      .then(response => {
        this.setState({notes: response.data})
      })
      .catch(err => {
        console.log("Set Data failed:", err)
      })
  }

  render() {
    console.log('App location', this.props.location);
    return (
      <div className="App">
        <Route exact path='/' component={NotesList} />
        <Route exact path="/create" component={props => <CreateNote {...props}
        setData={this.setData} />} />
        <Route exact path="/notes/:id" component={props => <ViewNote {...props}
        setData={this.setData} />} />
        <Route exact path="/signup" component={Register} />
      </div>
    );
  }
}

// export default Authenticate(App);
export default App;
