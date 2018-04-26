// Styling Components
import './Styles.css';

// testing tools
import testData from './components/TestData';

// REDUX components
import { connect } from 'react-redux';
import { editNote, createNote, deleteNote } from './actions';

// REACTSTRAP COMPONENTS

// REACT COMPONENTS
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MENUBAR from './components/MenuBar';
import LISTVIEW from './components/ListView';
import CREATENOTE from './components/CreateNote';
import NOTEVIEW from './components/NoteView';
import EDITNOTE from './components/EditNote';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      note: [],
    }
  }

  render() {
    console.log('App state: ' , this.state);
    console.log('App props: ' , this.props);
    return (
      <Router>
        <div className="APP">
            <div className="APP__MENU">
              <MENUBAR />
            </div>
            <div className="APP__BODY">
              <Switch>
                <Route exact path='/' render={( props ) => <LISTVIEW {...props} notes={this.props.notes}/> }
                />
                <Route path='/note/:id' render={(props) => <NOTEVIEW {...props} /> }
                />
                <Route path='/edit/:id' render={( props ) => <EDITNOTE {...props} /> }
                />
                <Route path='/create' component={CREATENOTE} />
              </Switch>
            </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps, { editNote, createNote, deleteNote })(App);

// console.log(store.getState());

// const unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// store.dispatch(fetchNotes(store));
// store.dispatch(createNote({title: 'new note title', text: 'New note text, new note text.'}));
// store.dispatch(editNote({title: 'edited title', text: 'edited text.  edited text.'}, 4));

// unsubscribe();