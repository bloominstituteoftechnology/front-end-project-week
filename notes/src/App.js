import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import staticData from './staticData';
import { Row, Col, Container} from 'reactstrap';
import NotesList from './components/NotesList';
import Nav from './components/Nav';
import AddNote from './components/AddNote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    this.setState({
      notes: staticData
    })
  }

  render() {


    return (
      <div className="App">
        <h5 className="App-header">Your Notes:</h5>
        <Container fluid>
          <Row>
            <Col sm="3" >
              
             <Route path="/" component={Nav} />  
          
            </Col>
            {this.state.notes.map((note, index) => {
              return (
                <Col sm="3" >
                  <NotesList key={index} note={note} />
                </Col> 
              )
            })}

          </Row>
          {/* passing props to add note */}
          < AddNote notes={this.state.notes}/> 
        </Container>
      </div>
    );
  }
}

export default App;


// main place 