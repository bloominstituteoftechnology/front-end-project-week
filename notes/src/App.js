import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import { List, Note, NewNote, EditNote, DeleteNote, Test } from './components';


class App extends Component {
  state = {
    notes: []
  }

  componentDidMount() {
    axios.get('https://killer-notes.herokuapp.com/note/get/all')
    .then(res => this.setState({ notes: res.data }))
    .catch(err => console.log(err))
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
              {/* <Link to="/test">
               <button className="test-button">Test Zone</button>
              </Link> */}
            </Col>
            <Col xs="9" className="content-container">
              <Route exact path="/" render={props =>{
                return (
                  <List {...props} list={this.state.notes} />
                )
              }} />
              <Route path="/newnote" component={NewNote}/>
              <Route path="/note/:id" render={props => {
                return (
                  <Note {...props} list={this.state.notes} />
                )
              }} />
              <Route path="/edit" component={EditNote}/>
              <Route path="/delete" component={DeleteNote}/>
              <Route path="/test" component={Test}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;