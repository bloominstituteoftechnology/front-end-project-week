import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import { Route, Switch } from 'react-router-dom';
import { LeftPanel, NewNote, NoteList, NotePage, EditNote } from './components/';
import DeleteModal from './components/DeleteModal';
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

  ViewNotePage = props => {
    const note = this.state.notes.filter(note => note.id === +props.match.params.id)[0]
    return <NotePage {...props} note={note} />
  }

  NewNote = props => {
    const { title, text } = this.state.note;
    return <NewNote handleChange={this.handleChange} title={title} text={text} />
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ note: {...this.state.note, [name]: value }});
    console.log(this.state.note);
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  EditNote = props => {
    const { title, text } = this.state.note;
    return <EditNote handleChange={this.handleChange} title={title} text={text} />
  }

  render() {
    return (
      <div className="App">
        <SplitPane split="vertical" defaultSize={230}>
            <LeftPanel />
            <Switch>
              <Route exact path="/" render={this.NoteList} />
              <Route path="/note/:id" render={this.ViewNotePage} />
              <Route path="/new" render={this.NewNote} />
              <Route path="/edit" render={this.EditNote} />
              <Route path="/delete" component={DeleteModal} />
            </Switch>
        </SplitPane>
      </div>
    );
  }
}

export default App;
