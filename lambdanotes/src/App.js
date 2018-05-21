import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import ContentArea from './components/contentarea.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [{
        title: "Note Title",
        content: "Placeholder note content",
        id: 0
      },
      {
        title: "Note Title2",
        content: "Placeholder note content2",
        id: 1
      },
      {
        title: "Note Title3",
        content: "Placeholder note content3 ssdf sdf sdf sdf sdf fhgd asdwer g rth fdbvgsd fgtreg srasdv fghetrg weragf asdf erg a sdf af awerf asf fgserg sdcv sdgfsea egr asdfg saertg aZDf aer gsdfg aergf adfg a ffg arg asdfg aerg asdfg aefaf asdf asdf adf asdfawefasdf sdf ",
        id: 2
      },
      {
        title: "Note Title4",
        content: "Placeholder note content4",
        id: 3
      },
    ],
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
              <ContentArea appState={this.state.appState} notes={this.state.notes} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
