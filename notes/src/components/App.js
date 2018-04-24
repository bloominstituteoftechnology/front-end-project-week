import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route, Link } from 'react-router-dom';
import List from './List';
import Edit from './Edit';
import Create from './Create';
import Note from './Note';
import { Container, Row, Col, Button } from 'reactstrap';
import { createNote, fetchNotes, search } from '../actions';

class App extends Component {
  componentDidMount() {
      this.props.fetchNotes();
      this.props.search('');
  }

  render() {
    return (
      <Container>
        <Row className="Container">
          <Col xs="12" md="3" className="Menu">
            <h1 className='Menu__heading'>Lambda Notes</h1>
            <Link to="/">
              <Button color="deoco" className="Button">View Your Notes</Button>
            </Link>
            <Link to="/create">
              <Button color="deoco" className="Button">+ Create New Note</Button>
            </Link>
          </Col>
          <Col className="ContentArea">
            <Route exact path="/" component={List}/>
            <Route path="/notes/:id" component={Note}/>
            <Route path="/edit/:id" component={Edit}/>
            <Route path="/create" component={Create}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, {createNote, fetchNotes, search })(App);
