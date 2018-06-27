import React, { Component } from 'react';
import './App.css';
import jwt from "jsonwebtoken";
import { Route, withRouter, Link } from "react-router-dom";
import { Navigation, NotesList, AddNote, Note, Login, Register } from "./components";
import { connect } from "react-redux";
import { setAccount } from "./actions";

class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem('jwt');
    if (token) {
      jwt.verify(token, process.env.REACT_APP_JWT_SECRET, (err, decoded) => {
      if (err) {
          console.log(err);
        } else {
          console.log(decoded);
          const { id } = decoded;
          this.props.setAccount(id);
        }
      })
    }
  }

  signoutHandler = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="App">
        {localStorage.getItem('jwt') ? (
          <div>
            <Navigation signoutHandler={this.signoutHandler}/>
          </div>
        ) : (
          <Route exact path="/" render={() => <div><Link to="/login">Login</Link></div>}/>
        )}
        <Route exact path="/notes" component={NotesList}/>
        <Route path="/addnote" component={AddNote}/>
        <Route path="/note/:id" component={Note}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

export default withRouter(connect(mapStateToProps, { setAccount })(App));
