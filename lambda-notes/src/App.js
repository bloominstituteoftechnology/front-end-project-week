import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import { Route, Switch } from 'react-router-dom';
import { LeftPanel, NewNote, NoteList, NotePage, EditNote } from './components/';
// import DeleteModal from './components/DeleteModal';
// import firebase from './firebase';

// const itemsRef = firebase.database().ref('notes');

class App extends Component {
  state = {
    notes: [{
      id: 0,
      title: 'Note',
      text: 'Cupcake ipsum dolor sit amet toffee tootsie roll candy canes. Bonbon dessert cookie carrot cake. Cotton candy.Carrot cake I love cotton candy I love I love fruitcake gummies tootsie roll. Jelly-o sugar plum oat cake. Oat cake oat cake cookie. Candy cookie sweet. Dessert soufflé bonbon chocolate bar I love caramels lemon drops. Dragée chocolate ice cream cheesecake cookie jujubes tart I love. Ice cream tootsie roll chocolate cake. Caramels I love liquorice lollipop topping halvah.',
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

  // componentDidMount() {
  //   itemsRef.on('value', snapshot => {
  //     const items = snapshot.val()
  //   const notes = Object.entries(items);
  //     console.log(items)
  //     this.setState({ notes });
  //     console.log(this.state)
  //   });
  // }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ note: {...this.state.note, [name]: value }});
  }

  handleSubmit = id => {
    const { note, notes } = this.state;
    // itemsRef.push(note)
    // this.setState({ note: { id: null, text: '', title: '' } });
    this.setState({
     notes: [...notes, {...note, id }],
     note: { id: null, title: '', text: '' }
    });
  }

  handleEdit = id => {
    let { note, notes } = this.state;
    notes = notes.map(obj => obj.id === +id ? {...note, id: +id } : obj);
    this.setState({ notes, note: { id: null, text: '', title: '' } });
  }

  handleDelete = id => {
    let { notes } = this.state;
    notes = notes.filter(obj => obj.id !== +id);
    this.setState({ notes });
  }

  NoteList = props => <NoteList notes={this.state.notes} />;

  ViewNotePage = ({ match: { params: { id } } }) => {
    const note = this.state.notes.find(note => note.id === +id);
    return <NotePage {...note} del={this.handleDelete} />;
  }

  NewNote = props => {
    const id = this.state.notes.length;
    return <NewNote
      {...props}
      {...this.state.note}
      id={id}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
    />;
  }

  EditNote = props => {
    const { id } = props.match.params;
    // const notes = this.state.notes;
    // const note = notes.find( note => (note.id).toString()===id.toString())
    // const fields = { 
    //   title: note.title,
    //   text: note.text,
    // }
    // this.setState({ note: fields});
    return <EditNote
      {...props}
      {...this.state.note}
      id={id}
      handleChange={this.handleChange}
      edit={this.handleEdit}
    />;
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
              <Route path="/edit/:id" render={this.EditNote} />
              {/* <Route path="/delete/:id" component={DeleteModal} /> */}
            </Switch>
        </SplitPane>
      </div>
    );
  }
}

export default App;
