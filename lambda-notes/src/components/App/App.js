import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactMarkdown  from 'react-markdown';

// Very important when you work with React Router Redux

import { withRouter } from 'react-router-dom'

import './App.css';

import Nav from '../Nav/Nav';
import UserLogin from '../User/UserLogin';
import NotesList from '../Note/NotesList';
import NoteForm from '../Note/NoteForm';
import ViewNote from '../Note/ViewNote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      message: '',
      notes: []  
    };
  }

  componentDidMount() {
    // get the token from somewhere
    const token = localStorage.getItem('jwt');
    const msg = localStorage.getItem('msg');

    this.setState({ isLogged: token, message: msg});
    if(token)
      this.props.history.push('/notes');
  }

  handleSubmitLogin = (msg) => {
    this.setState({ isLogged: true, message: msg});
    this.props.history.push('/notes');
  };

  handleSubmitLogout = (msg) => {
    this.setState({ isLogged: false, message: msg});
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="App">
        <Route path="/" render={() => (<Nav isLogged={this.state.isLogged} onClickLogout={this.handleSubmitLogout}/>)} />
        <Route path="/login" render={() => <UserLogin isLogin={true} onClickLogin={this.handleSubmitLogin}/>} />
        <Route path="/register" render={() => <UserLogin isLogin={false} onClickLogin={this.handleSubmitLogin}/>} />

        <Route exact path="/notes" render={() => (<NotesList/>)}/>
        <Route exact path="/newnote" render={() => (<NoteForm className="App-content-container" header="Create New Note:" button="Save" />)}/>
        <Route exact path="/note/:id" render={(props) => (<ViewNote {...props}/>)}/>
        <Route exact path="/editnote/:id" render={(props) => (<NoteForm {...props} className="App-content-container" header="Edit Note:" button="Update" />)}/> */}
        {/* <ReactMarkdown source={'# This is a header\n\nAnd this is a paragraph'} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const props = state;
  return props;
}

export default withRouter(connect(mapStateToProps)(App))



/*
    Very important when you work with React Router Redux
    // before
    export default connect(mapStateToProps)(Something)

    // after
    import { withRouter } from 'react-router-dom'
    export default withRouter(connect(mapStateToProps)(Something))

  */