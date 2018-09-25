import React from 'react';

import {
  H2,
  TitleInput,
  ContentInput,
  Button,
  TagInput
} from './StyledComponents';

 class Note extends React.Component {
  state = {
    title: '',
    textBody: '',
    tags: ''
  };

   onInputChnage = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

   onSumbit = event => {
    console.log(this.state.tags.split(','));
    this.props.addNewNote({
      ...this.state,
      tags: this.state.tags.split(',')
    });
  };

   render() {
    return (

      <div className = 'new-note'>
        <TitleInput
          onChange={this.onInputChnage}
          type = 'text'
          name = 'title'
          placeholder = 'Title'
        />

        <ContentInput
          onChange = {this.onInputChnage}
          type = 'text'
          name = 'textBody'
          rows = '40'
          col = '5'
          placeholder = "Text here"
          wrap = 'soft'
        />

        <TagInput
          onChange={this.onInputChnage}
          type = 'text'
          name = 'tags'
          placeholder = 'Please enter tags separated by commas.'
        />

        <Button onClick={this.onSumbit} submit>
          Submit
        </Button>
      </div>
    );
  }
}

 function AddNote(props) {
  return (
    <div className = 'appView'>
      <H2>Create note:</H2>
      <Note {...props} />
    </div>
  );
}

 export default AddNote;
