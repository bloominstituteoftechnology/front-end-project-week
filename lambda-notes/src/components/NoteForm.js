import React, { Component } from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import Button from './Button';
import TagDisplay from './TagDisplay';

const StyledNoteForm = styled.div`
  padding: ${props => props.theme.dimensions.noteForm.padding};

  form {
    display: flex;
    flex-direction: column;

    &.tagForm {
      flex-flow: row wrap;
      align-items: center;

      button {
          margin: 0;
      }
    }
  }

  h1 {
    padding: ${props => props.theme.dimensions.noteForm.headingPadding};
}

  label {
      width: 100%;
      font-family: ${props => props.theme.font.body};
      color: ${props => props.theme.color.formText};
      font-size: ${props => props.theme.dimensions.noteForm.labelFontSize};
      padding: ${props => props.theme.dimensions.noteForm.labelPadding};
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

  input[name='tagInput'] {
    height: ${props => props.theme.dimensions.noteForm.inputTitleHeight};
    width: ${props => props.theme.dimensions.noteForm.inputTitleWidth};
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
    const { title, textBody, tags } = note;
    const tagObjs = tags.map(tagName=>this.makeTagObjFromName(tagName));
    this.state = {
      title,
      textBody,
      tags: tagObjs,
      tagInput: '',
    };
    this.inputTitle = React.createRef();
    this.updateInput = this.updateInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewTag = this.addNewTag.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
  }
  componentDidMount() {
    this.inputTitle.current.focus();
  }
  makeTagObjFromName(name) {
    return {name, id: shortid.generate()};
  }
  updateInput(event) {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }
  handleFormSubmit(event) {
    event.preventDefault();
    const {title, textBody, tags } = this.state;
    const tagArr = tags.map(tagObj => tagObj.name);
    this.props.handleFormSubmit({title, textBody, tags: tagArr });
  }
  addNewTag(event) {
    event.preventDefault();
    const { tagInput, tags } = this.state;
    let newTagArr = tagInput.split(';').map(tag=>this.makeTagObjFromName(tag.trim()));
    newTagArr = newTagArr.filter(tag => (tags.indexOf(tag) === -1));
    newTagArr = [...tags, ...newTagArr];
    this.setState({ tagInput: '', tags: newTagArr });
  }
  deleteTag(id) {
    const { tags } = this.state;
    const filteredTags = tags.filter(tag => (tag.id !== id));
    this.setState({tags: filteredTags});

  }

  render() {
    const { title, textBody, tags, tagInput } = this.state;
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
        </form>
        <form className="tagForm" onSubmit={this.addNewTag}>
          <input
            type="text"
            name="tagInput"
            id="tagInput"
            placeholder="Add Tags"
            value={tagInput}
            onChange={this.updateInput}
          />
          <Button onClick={this.addNewTag}>Add New Tag</Button>
          <label htmlFor="tagInput">Enter new tags, separated by semi-colons (;)</label>
        </form>
        <TagDisplay tags={tags} writable={true} deleteTag={this.deleteTag} />
        <Button onClick={this.handleFormSubmit}>{buttonText}</Button>
      </StyledNoteForm>
    );
  }
}
