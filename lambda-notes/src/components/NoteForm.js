import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledNoteForm = styled.div`
  padding: ${props => props.theme.dimensions.noteForm.padding};

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    padding: ${props => props.theme.dimensions.noteForm.headingPadding};
  }

  input,
  textarea {
    width: ${props => props.theme.dimensions.noteForm.width};
    border-radius: ${props =>
    props.theme.dimensions.noteForm.inputBorderRadius};
    border-width: ${props => props.theme.dimensions.noteForm.borderWidth};
    border-style: solid;
    border-color: ${props => props.theme.color.border};
    font-family: ${props => props.theme.font.body};
    color: ${props => props.theme.color.formText};
    line-height: ${props =>
    props.theme.dimensions.noteForm.inputTextLineHeight};
  }

  input[name='title'] {
    height: ${props => props.theme.dimensions.noteForm.inputTitleHeight};
    width: ${props => props.theme.dimensions.noteForm.inputTitleWidth};
    margin: ${props => props.theme.dimensions.noteForm.inputTitleMargin};
    padding: ${props => props.theme.dimensions.noteForm.inputTitlePadding};
  }

  textarea[name='textBody'] {
    margin: ${props => props.theme.dimensions.noteForm.inputTextMargin};
    padding: ${props => props.theme.dimensions.noteForm.inputTextPadding};
    min-height: ${props => props.theme.dimensions.noteForm.inputTextMinHeight};
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
    this.inputTitle = React.createRef();
    this.updateInput = this.updateInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  componentDidMount() {
    this.inputTitle.current.focus();
  }
  updateInput(event) {
    const { value, name } = event.target;

    
    this.setState({ [name]: value });
  }
  handleFormSubmit(event) {
    event.preventDefault();
    this.props.handleFormSubmit(this.state);
  }

  render() {
    const { title, textBody } = this.state;
    const { titleText, buttonText } = this.props;
    return (
      <StyledNoteForm>
        <h1>{titleText}</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Note Title"
            value={title}
            onChange={this.updateInput}
            ref={this.inputTitle}
          />
          <textarea
            name="textBody"
            placeholder="Note Content"
            value={textBody}
            onChange={this.updateInput}
          />
          <Button onClick={this.handleFormSubmit}>{buttonText}</Button>
        </form>
      </StyledNoteForm>
    );
  }
}
