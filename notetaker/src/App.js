import React, { Component } from "react";
import { Route } from "react-router";
import { Row, Col, Container } from "reactstrap";
import "./App.css";
// import NoteList from "./components/NoteList/NoteList";
// import CreateNote from "./components/CreateNote/CreateNote";
// import Note from "./components/Note/Note,";

//remove in final release
// const placeholderText = "Fumo fumo fumo fumo fumo fumo fumo fumo fumo";
// const placeholderNotes = [
//   { title: "Note 1", content: placeholderText },
//   { title: "Note 2", content: placeholderText },
//   { title: "Note 3", content: placeholderText },
//   { title: "Note 4", content: placeholderText }
// ];

class App extends Component {
  constructor() {
    super();
    this.state = {
      note: []
    };
  }

  render() {
    return <div className='App'>
    <Container>
      <Row>
        <Col>
        {/* <Route exact path="/" component={ NoteList }/> */}
        Placeholder Routes Here
        {/* <Route path = '/CreateNote' component = { CreateNote }/>
        <Route path = '/NoteView' component = { Notes }/> */}
        </Col>
      </Row>
    </Container>
    </div>
  }
}

export default App;
