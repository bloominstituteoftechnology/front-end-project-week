import React, { Component } from 'react';
import './App.css';
import ListItems from './ListItems';
import CreateNewNote from './CreateNewNote';
import SideNav from './SideNav';
import SingleNoteView from './SingleNoteView'

import { Container, Row, Col } from 'reactstrap';

export default class App extends Component {
  render() {
    return(
      <div className="App">
        <Container className='notesContainer'>
          <div>
            <Row>
              <Col m="4">
                <h3> Lambda Notes</h3>
                  <SideNav />
               </Col>
               <Col m="8">
                  <ListItems />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    )
  }
}







