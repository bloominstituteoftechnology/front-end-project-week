import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import  { Front, NewNote, SingleNote, EditNote }  from './pages/';
import Nav from './navigation';


import './style/App.css'
import './route.css';
// // import '../pages/pagestyles/page.css';
// // import '../style/nav.css';

import { notes } from './pages/notes';

class App extends Component {

  constructor(){
    super();
    this.state = {
        notes: [],
        title: '',
        text: ''
    };
}

frontComponent = (props) => {
  return <Front notes={this.state.notes} />

}

singleComponent = (props) => {
  const note = this.state.notes.filter(note => note.id === +props.match.params.id)[0]
  return <SingleNote note={note} />
}

newComponent = (props) => {
  return <NewNote title={this.state.title} text={this.state.text} />
}


componentDidMount() {
    this.setState({ notes: notes, title: notes.title, text: notes.text })
}

  render() {
    return (
      <div className="App">
        <Router>
          
          <div className="route-container">
            <Nav />

              <Switch>
                <Route exact path='/' render={this.frontComponent} />
                <Route path='/note/:id' render={this.singleComponent} />
                <Route path='/new' render={this.newComponent} />
              </Switch>
          </div>
          
          </Router>
      </div>
    );
  }
}

export default App;
