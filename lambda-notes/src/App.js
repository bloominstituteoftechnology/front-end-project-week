import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import { Route, Switch } from 'react-router-dom';
import { LeftPanel, NewNote, NoteList, NotePage } from './components/';

class App extends Component {
  state = {
    notes: [{
      id: 0,
      title: 'Note',
      text: 'Cupcake ipsum dolor sit amet toffee tootsie roll candy canes. Bonbon dessert cookie carrot cake. Cotton candy.',
      completed: false
    }, {
      id: 1,
      title: 'Cupcake',
      text: 'Cupcake ipsum dolor sit amet toffee tootsie roll candy canes. Bonbon dessert cookie carrot cake. Cotton candy.',
      completed: false
    }, {
      id: 2,
      title: 'Peanut Butter',
      text: 'Cupcake ipsum dolor sit amet toffee tootsie roll candy canes. Bonbon dessert cookie carrot cake. Cotton candy.',
      completed: false
    }, 
    {
      id: 3,
      title: 'Coffee',
      text: 'Cupcake ipsum dolor sit amet toffee tootsie roll candy canes. Bonbon dessert cookie carrot cake. Cotton candy.',
      completed: false
    },
    {
      id: 4,
      title: 'Creme Brulee',
      text: 'Cupcake ipsum dolor sit amet toffee tootsie roll candy canes. Bonbon dessert cookie carrot cake. Cotton candy.',
      completed: false
    },
    {
      id: 5,
      title: 'Flan',
      text: 'Cupcake ipsum dolor sit amet toffee tootsie roll candy canes. Bonbon dessert cookie carrot cake. Cotton candy.',
      completed: false
    },
    {
      id: 6,
      title: 'Custard',
      text: 'Cupcake ipsum dolor sit amet toffee tootsie roll candy canes. Bonbon dessert cookie carrot cake. Cotton candy.',
      completed: false
    },
    {
      id: 7,
      title: 'Red Velvet',
      text: 'Cupcake ipsum dolor sit amet toffee tootsie roll candy canes. Bonbon dessert cookie carrot cake. Cotton candy.',
      completed: false
    },
    {
      id: 8,
      title: 'French Silk Pie',
      text: 'Cupcake ipsum dolor sit amet toffee tootsie roll candy canes. Bonbon dessert cookie carrot cake. Cotton candy.',
      completed: false
    },
  ],
    note: {
      id: null,
      title: '',
      text: '',
      completed: false
    }
  };

  NoteList = props => <NoteList {...props} notes={this.state.notes} />;

  NotePage = props => {
    const note = this.state.notes.filter(note => note.id === +props.match.params.id)[0]
    return <NotePage {...props} note={note} />
  }

  render() {
    return (
      <div className="App">
        <SplitPane split="vertical" defaultSize={230}>
            <LeftPanel />
            <Switch>
              <Route exact path="/" render={this.NoteList} />
              <Route path="/note/:id" render={this.NotePage} />
              <Route path="/new" component={NewNote} />
            </Switch>
        </SplitPane>
      </div>
    );
  }
}

export default App;
