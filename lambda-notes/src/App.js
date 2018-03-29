import React, { Component } from 'react';
import './App.css';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';


import SampleData from './SampleData';
import ViewNotes from './components/ViewNotes';
import CreateNote from './components/CreateNote';
import ViewNote from './components/ViewNote';


class App extends Component {
  state = {
    notes: [],
    key: '',
    title: '',
    content: ''
  };
  addItem = this.addItem.bind(this);
  handleTitleChange = this.handleTitleChange.bind(this);
  handleContentChange = this.handleContentChange.bind(this);

  addItem(e) {
    let newNote = {
      key: Date.now(),
      title: this.state.title,
      content: this.state.content
    };
    this.setState(prevState => {
      return {
        notes: prevState.notes.concat(newNote)
      };
    });
    console.log(e);

    e.preventDefault();
    // window.location = '/';
  }

  handleTitleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
   
  }
  handleContentChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    this.setState({ notes: SampleData });
    console.log('CDM', this.state.notes);
  }

  render() {
    console.log('RENDER', this.state.notes);
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={props => <ViewNotes {...props} notes={this.state.notes} key={this.state.key} state={this.state} />}
          />
          <Route
            path="/CreateNote"
            render={props => (
              <CreateNote
                {...props}
                redirect={this.redirect}
                addItem={this.addItem}
                notes={this.state.notes}
                handleTitleChange={this.handleTitleChange}
                handleContentChange={this.handleContentChange}
              />
            )}
          />

          <Route path='/ViewNote/:key' 
                render={props => (
                  <ViewNote
                      {...props}
                      notes={this.state.notes}
                      key={this.state.key} 
                      state={this.state}
                
              />
            )} />

            
        </div>
      </Router>
    );
  }
}

export default App;
