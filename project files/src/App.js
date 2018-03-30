import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import  { Front, NewNote, SingleNote, EditNote }  from './pages/';
import Nav from './navigation';


import './style/App.css'
import './route.css';
// import './pages/pagestyles/page.css';
import './navigation/nav.css';


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

editComponent = (props) => {
  const edit = this.state.notes.filter(note => note.id === +props.match.params.id)[0]
  return <EditNote edit={edit} />
}

newComponent = (props) => {
  const newnote = this.state.notes
  return <NewNote note={newnote} />
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
                <Route path='/edit/:id' render={this.editComponent} />
                <Route path='/new' render={this.newComponent} />
              </Switch>
          </div>
          
          </Router>
      </div>
    );
  }
}

export default App;
