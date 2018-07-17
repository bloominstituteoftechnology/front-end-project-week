import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const StyledNoteForm = styled.div`
  padding: ${ props => props.theme.dimensions.noteForm.padding };

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    padding: ${ props => props.theme.dimensions.noteForm.headingPadding };
  }

  input, textarea {
    width: ${ props => props.theme.dimensions.noteForm.width };
    border-radius: ${ props => props.theme.dimensions.noteForm.inputBorderRadius };
    border-width: ${ props => props.theme.dimensions.noteForm.borderWidth };
    border-style: solid;
    border-color: ${ props => props.theme.color.border };
    font-family: ${ props => props.theme.font.body };
    color: ${ props => props.theme.color.formText };
    line-height: ${ props => props.theme.dimensions.noteForm.inputTextLineHeight };
  }
  
  input[name="title"] {
    height: ${ props => props.theme.dimensions.noteForm.inputTitleHeight };
    width: ${ props => props.theme.dimensions.noteForm.inputTitleWidth };
    margin: ${ props => props.theme.dimensions.noteForm.inputTitleMargin };
    padding: ${ props => props.theme.dimensions.noteForm.inputTitlePadding };
  }
  
  textarea[name="textBody"] {
    margin: ${ props => props.theme.dimensions.noteForm.inputTextMargin };
    padding: ${ props => props.theme.dimensions.noteForm.inputTextPadding };
    min-height: ${ props => props.theme.dimensions.noteForm.inputTextMinHeight };
  }

`;

export default class NoteForm extends Component {
  constructor(props) {
    super(props);
    const { note } = props;
    const { title, textBody } = note;
    this.state = {
      title,
      textBody
    };
    this.updateInput = this.updateInput.bind(this);
  }
  updateInput(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }
  
  render() {
    const { title, textBody } = this.state;
    const { titleText, buttonText } = this.props;
    return (
      <StyledNoteForm>
        <h1>{ titleText }</h1>
        <form>
          <input 
            type="text"
            name="title"
            placeholder="Note Title"
            value={ title }
            onChange={ this.updateInput } />
          <textarea 
            name="textBody"
            placeholder="Note Content"
            value = { textBody }
            onChange={ this.updateInput } />
          <Link to="/">
            <Button>
              { buttonText }
            </Button>
          </Link>
        </form>
      </StyledNoteForm>
    )
  }
}