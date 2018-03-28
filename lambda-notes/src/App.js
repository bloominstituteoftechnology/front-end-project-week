import React, { Component } from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import {
  Button,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Input
} from 'reactstrap';
import SampleData from './SampleData';

const ViewNotes = props => (
  <div className="ViewNotes">
    <div className="LeftSide">
      <h1 className="LambdaNotes">Lambda Notes</h1>
      <Link to="/">
        <Button className="LeftSideButtons">View Your Notes</Button>
      </Link>
      <Link to="/CreateNote">
        <Button className="LeftSideButtons">+ Create New Note</Button>
      </Link>
    </div>

    <div className="RightSide">
      <h4 className="YourNotes">Your Notes:</h4>
      <div className="CardsDiv">
        {props.notes.map(note => {
          return (
            <div className="Cards" key={note.key}>
              <Card className="Card">
                <CardBody>
                  <CardTitle className="CardTitle CardText">
                    {note.title}
                  </CardTitle>
                  <hr className="CardDivider" />
                  <CardText className="CardText">{note.content}</CardText>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

const CreateNote = props => (
  <div className="CreateNote">
    <div className="LeftSide">
      <h1 className="LambdaNotes">Lambda Notes</h1>
      <Link to="/">
        <Button className="LeftSideButtons">View Your Notes</Button>
      </Link>
      <Button className="LeftSideButtons">+ Create New Note</Button>
    </div>
    <div className="RightSide">
      <h4 className="CreateNewNote">Create New Note</h4>
      <div className="FormDiv">
        <Form onSubmit={props.addItem}>
          <FormGroup>
            <Input
              innerRef={e => (this._inputElement = e)}
              type="text"
              name="noteTitle"
              id="noteTitle"
              placeholder="Note Title"
            />
          </FormGroup>

          <FormGroup>
            <Input
              innerRef={e => (this._inputElement2 = e)}
              type="textarea"
              rows="14"
              name="noteContent"
              id="noteContent"
              placeholder="Note Content"
            />
          </FormGroup>
          <Button className="SubmitButton float-left" type="submit">
            Save
          </Button>
        </Form>
      </div>
    </div>
  </div>
);

class App extends Component {
  state = {
    notes: []
  };
  addItem = this.addItem.bind(this);
  handleTitleChange = this.handleTitleChange.bind(this);

  addItem(e) {
    if (this._inputElement.value !== '') {
      let newNote = {
        key: Date.now(),
        title: this._inputElement.value,
        content: this._inputElement2.value
      };
      this.setState(prevState => {
        return {
          notes: prevState.notes.concat(newNote)
        };
      });

      this._inputElement.value = '';
      this._inputElement2.value = '';
    }

    e.preventDefault();
  }

  handleTitleChange(e) {
    this.setState({ title: e._inputElement.innerRef });
  }

  componentDidMount() {
    this.setState({ notes: SampleData });
    console.log('CDM', this.state.notes);
  }

  render() {
    console.log('RENDER', this.state.notes);
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={props => <ViewNotes {...props} notes={this.state.notes} />}
          />
          <Route
            path="/CreateNote"
            render={props => (
              <CreateNote
                {...props}
                addItem={this.addItem}
                notes={this.state.notes}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
