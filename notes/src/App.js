import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import { List, Note, NewNote, EditNote } from './components';


class App extends Component {
  state = {
    notes: [],
  }

  componentDidMount() {
    axios.get('https://killer-notes.herokuapp.com/note/get/all')
    .then(res => this.setState({ notes: res.data }))
    .catch(err => {
      console.log(err);
    })
  }

  postNote = note => {
    console.log("NOTE:", note)
    axios
      .post('https://killer-notes.herokuapp.com/note/create', note)
      .then(response => {
        this.refresh()
        
      })
      .catch(err => {
          console.log(err);
      })
  }

  refresh() {
    axios.get('https://killer-notes.herokuapp.com/note/get/all')
    .then(res => this.setState({ notes: res.data }))
    .catch(err => {
      console.log(err);
    })
  }

  removeNote = (_id) => {
    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${_id}`)
      .then(response => {
        this.refresh()
      })
      .catch(err => {
        console.log(err)
      })
  };

  updateNote = (editedNote) => {
    axios
      .put(`https://killer-notes.herokuapp.com/note/edit/${editedNote._id}`, editedNote)
      .then(response => {
        this.refresh()
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    console.log("WHERE ARE MY PROPS:", this.props)
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs="3" className="sidebar">
              <h1>Lambda Notes</h1>
              <Link to="/">
                <button className="list-button">View Your Notes</button>
              </Link>
              <Link to="/newnote">
                <button className="new-note-button">+ Create New Note</button>
              </Link>
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
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;