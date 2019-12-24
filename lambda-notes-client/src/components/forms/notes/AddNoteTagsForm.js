import React, { Component } from 'react';
import styled from "react-emotion";

const FormSection = styled("div")`
  h3 {
    font-size: 2.3rem;
    font-weight: bold;
    color: #4A494A;
    margin-bottom: 10px;
  }
  input {
    padding: 8px;
    border-radius: 5px;
    border: 1.5px solid #CBCBCB;
    margin-right: 3px;
    &:focus {
      outline: none;
    }
  }
  button {
    padding: 7px;
    color: white;
    font-size: 1.4rem;
    font-weight: bold;
    background-color: #2AC0C4;
    border: solid 1px #939797;
    margin: 0;

    &:hover {
      background-color: #23a0a4;
      cursor: pointer;
    }
  }
`;


class AddNoteTagsForm extends Component {
  state = {
    tag: ''
  }

  handleOnChange = e => this.setState({[e.target.name]: e.target.value});

  handleAddTag = (e) => {
    e.preventDefault();
    let newTag = {tag: this.state.tag, id: this.props.id}
    this.props.addNoteTag(newTag)
    this.setState({tag: ''})
  }

  render() {
    return (
      <FormSection>
        <form action="submit" onSubmit={this.handleAddTag}>
          <h3>Add A Tag:</h3>
          <input 
            type="text"
            name="tag" 
            value={this.state.tag} 
            onChange={this.handleOnChange}
            required
          />
          <button type="submit">Add Tag</button>
        </form>
      </FormSection>
    );
  }
}

export default AddNoteTagsForm;
