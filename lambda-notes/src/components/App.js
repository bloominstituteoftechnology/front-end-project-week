import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import VerticalNav from "./VerticalNav/VerticalNav";
import ListView from "./ListView/ListView";
import CreateNewView from "./CreateNewView/CreateNewView";
import NoteView from "./NoteView/NoteView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 0,
          title: "Note Title",
          content:
            "Lorem fugiat consectetur laborum incididunt id minim duis mollit ea dolore dolor irure."
        },
        {
          id: 1,
          title: "Note Title",
          content:
            "Lorem fugiat consectetur laborum incididunt id minim duis mollit ea dolore dolor irure."
        },
        {
          id: 2,
          title: "Note Title",
          content:
            "Lorem fugiat consectetur laborum incididunt id minim duis mollit ea dolore dolor irure."
        },
        {
          id: 3,
          title: "Note Title",
          content:
            "Lorem fugiat consectetur laborum incididunt id minim duis mollit ea dolore dolor irure."
        },
        {
          id: 4,
          title: "Note Title",
          content:
            "Lorem fugiat consectetur laborum incididunt id minim duis mollit ea dolore dolor irure."
        },
        {
          id: 5,
          title: "Note Title",
          content:
            "Lorem fugiat consectetur laborum incididunt id minim duis mollit ea dolore dolor irure."
        },
        {
          id: 6,
          title: "Note Title",
          content:
            "Lorem fugiat consectetur laborum incididunt id minim duis mollit ea dolore dolor irure."
        },
        {
          id: 7,
          title: "Note Title",
          content:
            "Lorem fugiat consectetur laborum incididunt id minim duis mollit ea dolore dolor irure."
        },
        {
          id: 8,
          title: "Note Title",
          content:
            "Lorem fugiat consectetur laborum incididunt id minim duis mollit ea dolore dolor irure."
        },
        {
          id: 9,
          title: "Note Title",
          content:
            "Lorem fugiat consectetur laborum incididunt id minim duis mollit ea dolore dolor irure."
        }
      ],
      title: "",
      content: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    const notes = this.state.notes.slice();
    notes.push({
      id: Date.now(),
      title: this.state.title,
      content: this.state.content
    });
    this.setState({
      notes,
      title: "",
      content: ""
    });
    document.getElementById("form").reset();
  };
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <VerticalNav />
            <Col xs="9">
              <Switch>
                <Route
                  path="/list-view"
                  render={() => <ListView notes={this.state.notes} />}
                />
                <Route
                  path="/create-new-view"
                  render={() => (
                    <CreateNewView
                      handleInputChange={this.handleInputChange}
                      handleSubmit={this.handleSubmit}
                    />
                  )}
                />
                <Route
                  path="/note-view/:id"
                  render={props => <NoteView {...props} {...this.state} />}
                />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
//render={() => <NoteView note={this.state.notes[id]} />}
