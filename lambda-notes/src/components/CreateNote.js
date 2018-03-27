import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/CreateNote.css';

class CreateNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
}
  addItem(e) {
    
    if (this._inputElement.value !== '') {
      let newItem = {
        title: this._inputElement.value,
        key: Date.now(),
        content: this._inputElement2.value
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
      
      this._inputElement.value = '';
      this._inputElement2.value = '';
    }
    
    console.log(this.props.state.items);

    e.preventDefault();
  }

  render() {
    return (
      <div className="CreateNote">
        <div className="LeftSide">
          <h1 className="LambdaNotes">Lambda Notes</h1>
          <Link to="/">
            <Button className="LeftSideButtons">View Your Notes</Button>
          </Link>
          <Button className="LeftSideButtons">+ Create New Note</Button>
        </div>

        <div className="RightSide">
          <h4 className="CreateNewNote">Create New Note:</h4>
          <div className="FormDiv">
            <Form onSubmit={this.addItem}>
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
  }
}

export default CreateNote;
