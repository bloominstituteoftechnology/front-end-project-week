import axios from 'axios';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateNote from './CreateNote';
import EditNote from './EditNote';
import { Header }from './Header';
import NoteList from './NoteList';
import SingleNoteView from './SingleNoteView';
import Sidebar from './Sidebar';
import './css/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      loading: true
    }
  }

  componentDidMount() {
    if(process.env.NODE_ENV === 'development'){
      let promise = axios.get("http://localhost:5555/api/notes/");
      promise 
      .then(response => {
          console.log(response.data);
          this.setState({notes: response.data, loading: false});
      })
      .catch(error => {
          console.log(error);
          this.setState({loading: false});
      })
    }
    else {
      let promise = axios.get("https://notepen.herokuapp.com/api/notes");
      promise 
        .then(response => {
            console.log(response.data);
            this.setState({notes: response.data, loading: false});
        })
        .catch(error => {
            console.log(error);
        })
    }
}

  render() {
    if(this.state.loading === true) {
      return (
        <div>
          <Header style={{margin: '40px'}} text="loading..." color="dark" />
        </div>
      )
    }
    else {
      return (
        <div className="App">
          <Sidebar />
          <Switch>
            <Route exact path="/" render={props => (
              <NoteList
                {...props}
                notes={this.state.notes}
              />
            )}/>
            <Route exact path="/notes" render={props => (
              <NoteList
                {...props}
                notes={this.state.notes}

              />
            )}/>
            <Route exact path="/notes/:id" component={SingleNoteView}/>
            <Route exact path="/create" render={props => (
              <CreateNote
                {...props}
                notes={this.state.notes}
                handleChange={this.handleChange}
              />
            )}/>
            <Route path="/notes/:id/edit" render={props => (
              <EditNote
                {...props}
                notes={this.state.notes}
                handleChange={this.handleChange}
              />
            )}/>
          </Switch>
        </div>
      );
    }
    
  }
}

export default App;
