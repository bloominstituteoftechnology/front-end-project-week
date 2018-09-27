import React, { Component } from 'react';
import styled from 'styled-components';

import { Button, Tag } from '../styles';

const StyledInput = styled.input`
  display: block;
  width: 60%;
  border: none;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  font-size: inherit;
  color: inherit;
  font-family: inherit;
  transition: all 0.2s;
  margin-bottom: 3rem;

  &:focus {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    outline: none;
  }

  &::placeholder {
    color: #bdbdbd;
  }
`;

const StyledTextarea = styled.textarea`
  display: block;
  padding: 1rem;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1.4rem;
  color: inherit;
  width: 100%;
  height: 30rem;
  margin-bottom: 2rem;

  &::placeholder {
    color: #ccc;
  }

  &:focus {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    outline: none;
  }
`;

const FormButton = Button.extend`
  width: 25rem;
`;

const InlineInput = StyledInput.extend`
  display: inline-block;
  margin-right: 1rem;
`;

class NotesForm extends Component {
  state = {
    title: '',
    textBody: '',
    tags: [],
    tag: '',
  };

  componentDidMount() {
    if (this.props.preloadedState) {
      this.setState(this.props.preloadedState);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.preloadedState && this.props.preloadedState) {
      if (prevProps.preloadedState.id !== this.props.preloadedState.id) {
        this.setState(this.props.preloadedState);
      }
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  deleteTag = name =>
    this.setState(({ tags }) => ({ tags: tags.filter(tag => tag !== name) }));

  onFormSubmit = e => {
    e.preventDefault();
    const { title, textBody, tags } = this.state;
    this.props.onFormSubmit({ title, textBody, tags });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <StyledInput
          onChange={this.handleChange}
          value={this.state.title}
          type="text"
          name="title"
          placeholder="Note Title"
          autoComplete="off"
        />
        <StyledTextarea
          value={this.state.textBody}
          placeholder="Note Content"
          onChange={this.handleChange}
          name="textBody"
        />
        <InlineInput
          type="text"
          name="tag"
          onChange={this.handleChange}
          value={this.state.tag}
          placeholder="Add tag"
          autoComplete="off"
          onKeyDown={event => {
            const { key, target } = event;
            if (key === 'Enter') {
              event.stopPropagation();
              target.value = '';
            }
          }}
        />
        <Button
          type="button"
          onClick={() => {
            this.setState(({ tags, tag }) => ({
              tags: [...tags, tag],
              tag: '',
            }));
          }}
        >
          Add Tag
        </Button>
        <div style={{ marginBottom: '2rem' }}>
          {this.state.tags.map(tag => (
            <Tag key={tag}>
              {tag + ' '}{' '}
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => this.deleteTag(tag)}
              >
                &times;
              </span>
            </Tag>
          ))}
        </div>
        <FormButton>{this.props.buttonText}</FormButton>
      </form>
    );
  }
}

export default NotesForm;
