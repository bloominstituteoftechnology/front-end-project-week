import React, { Component } from 'react';
import './App.css';
import { Redirect, Route, Link, BrowserRouter as Router } from 'react-router-dom';

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

class ViewNotes extends Component {
  constructor() {
    super();
  }

  render() {
    return (
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
        {this.props.notes.map(note => {
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
    );}

};

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
              onChange={props.handleTitleChange}
              
              
          
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
              onChange={props.handleContentChange}
            />
          </FormGroup>
          <Button className="SubmitButton float-left" type="submit">
            Save
          </Button>
        </Form>
        {props.fireRedirect && (
          <Redirect to={'/'}/>
        )}
      </div>
    </div>
  </div>
);

class App extends Component {
  state = {
    notes: [],
    fireRedirect: false
  };
  addItem = this.addItem.bind(this);
  handleTitleChange = this.handleTitleChange.bind(this);
  handleContentChange = this.handleContentChange.bind(this);

  addItem(e) {
    if (this._inputElement !== '') {
      let newNote = {
        key: Date.now(),
        title: this.props._inputElement,
        content: this.props._inputElement2
      };
      this.setState(prevState => {
        return {
          notes: prevState.notes.concat(newNote)
        };
      });

      // this._inputElement = '';
      // this._inputElement2 = '';
    }
    this.setState({ fireRedirect: true })
    e.preventDefault();
  }

  handleTitleChange(e) {
    this.setState({ title: e._inputElement });
    
  }
  handleContentChange(e) {
    this.setState({ content: e._inputElement2 });
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
            render={props => (<ViewNotes {...props} notes={this.state.notes} test="test" />
            )}
          />
          <Route
            path="/CreateNote"
            render={props => (
              <CreateNote
                {...props}
                addItem={this.addItem}
                notes={this.state.notes}
                handleTitleChange={this.handleTitleChange}
                handleContentChange={this.handleContentChange}
                fireRedirect={this.state.fireRedirect}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
