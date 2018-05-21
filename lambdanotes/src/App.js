import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import ContentArea from './components/contentarea.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [{
        title: "Placeholder Note Title",
        content: "Placeholder note content",
        id: 0
      }],
      appState: "list",
      editId: null
    };
  }


  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col className="left-side" xs="3">
              PLACEHOLDER
            </Col>
            <Col className="content" xs="9">
              <ContentArea />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
