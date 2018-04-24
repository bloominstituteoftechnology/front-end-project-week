import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class NoteForm extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
  
      this.state = {
        value: ''
      };
    }
  
    handleChange(e) {
      this.setState({ value: e.target.value });
    }
  
    render() {
      return (
        <form>
          <FormGroup
            controlId="formBasicText"
          >
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
          </FormGroup>
        </form>
      );
    }
  }
  
export default NoteForm;