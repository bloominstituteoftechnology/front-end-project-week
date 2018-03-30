import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route, Link } from 'react-router-dom';
import List from './List';
import Edit from './Edit';
import Create from './Create';
import Note from './Note';
import { Container, Row, Col, Button } from 'reactstrap';
import { createNote, deleteNote, editNote } from '../actions';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="Container">
          <Col xs="3" className="Menu">
            <h1 className='Menu__heading'>Lambda Notes</h1>
            <Link to="/">
              <Button color="deoco" className="Button">View Your Notes</Button>
            </Link>
            <Link to="/create">
              <Button color="deoco" className="Button">+ Create New Note</Button>
            </Link>
          </Col>
          <Col className="ContentArea">
            <Route exact path="/" 
            render={(props) => <List {...props} notes={this.props.notes}/>}
            />
            <Route path="/notes/:id" 
              render={({match}) => <Note
              note={this.props.notes.find(note => 
                {return note.id === match.params.id})}
              deleteNote={this.props.deleteNote}/>}
            />
            <Route path="/edit/:id"
              render={({match}) => <Edit 
              note={this.props.notes.find(note => 
                {return note.id === match.params.id})}
              editNote={this.props.editNote}/>}
            />
            <Route path="/create" 
            component={Create}/>
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

export default connect(mapStateToProps, {createNote, deleteNote, editNote})(App);
