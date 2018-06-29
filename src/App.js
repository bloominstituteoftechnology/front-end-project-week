import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import Registration from './auth/registration';
import Login from './auth/login';
import { List, Note, NewNote, EditNote } from './components';


class App extends Component {
  state = {
    notes: [],
  }

  componentDidMount() {
    axios.get('https://lambda-notes-kolumbic.herokuapp.com/api/notes')
    .then(res => this.setState({ notes: res.data }))
    .catch(err => {
      console.log(err);
    })
  }

  postNote = note => {
    console.log("NOTE:", note)
    axios
      .post('https://lambda-notes-kolumbic.herokuapp.com/api/notes', note)
      .then(response => {
        this.refresh()
        
      })
      .catch(err => {
          console.log(err);
      })
  }

  refresh() {
    axios.get('https://lambda-notes-kolumbic.herokuapp.com/api/notes')
    .then(res => this.setState({ notes: res.data }))
    .catch(err => {
      console.log(err);
    })
  }

  removeNote = (_id) => {
    axios
      .delete(`https://lambda-notes-kolumbic.herokuapp.com/api/notes/${_id}`)
      .then(response => {
        this.refresh()
      })
      .catch(err => {
        console.log(err)
      })
  };

  updateNote = (editedNote) => {
    axios
      .put(`https://lambda-notes-kolumbic.herokuapp.com/api/notes/${editedNote._id}`, editedNote)
      .then(response => {
        this.refresh()
      })
      .catch(err => {
        console.log(err)
      })
  }

  // logout = () => {
  //   if(localStorage.getItem("jwt")) {
  //     localStorage.removeItem("jwt");
  //     this.props.history.push('/register')
  //   }
  // };

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs="3" className="sidebar">
              <div className="the-real-sidebar">
                <h1 className="sidebar-header">Lambda Notes</h1>
                <Link to="/register">
                  {/* <button style={{ marginBottom: '50px' }} className="button-template">Home</button> */}
                </Link>
                <Link to="/login">
                  {/* <button className="button-template">Login</button> */}
                </Link>
                {/* <button style={{ marginBottom: '25px' }} className="button-template" onClick={this.logout}>Logout</button> */}
                <Link to="/">
                  <button className="button-template">View Your Notes</button>
                </Link>
                <Link to="/newnote">
                  <button className="button-template">+ Create New Note</button>
                </Link>
              </div>
            </Col>
            <Col xs="9" className="content-container">
              <Route exact path="/" render={props =>{
                return (
                  <List {...props} list={this.state.notes} />
                )
              }} />
              <Route path="/newnote" render={props =>{
                return (
                  <NewNote {...props} postNote={this.postNote} />
                )
              }} />
              <Route path="/note/:id" render={props => {
                return (
                  <Note {...props} list={this.state.notes} removeNote={this.removeNote}/>
                )
              }} />
              <Route path="/edit/:id" render={props =>{
                return (
                  <EditNote {...props} updateNote={this.updateNote} />
                )
              }} />
              <Route path="/register" component={Registration}/>
              <Route path="/login" component={Login}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;