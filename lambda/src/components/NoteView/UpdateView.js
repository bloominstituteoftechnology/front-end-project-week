import React from 'react';
import { H2, TitleInput, ContentInput, Button } from '../StyledComponents';

class Note extends React.Component {
  state = {
    title: '',
    content: '',
    id: null
  };

  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;
    const notes = this.props.notes[id];
    console.log(notes);
    this.setState({
      title: notes.title,
      content: notes.content,
      id: id
    });
  }

  onInputChnage = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSumbit = event => {
    console.log('~~~~~~~~~~~CREATE NEW NOTE~~~~~~~~');
    console.log(this.props);
    this.props.addNewNote(this.state);
  };

  render() {
    return (
      <div className="newNote">
        <TitleInput
          onChange={this.onInputChnage}
          type="text"
          name="title"
          placeholder="Note Title"
          value={this.state.title}
        />
        <ContentInput
          onChange={this.onInputChnage}
          type="text"
          name="content"
          rows="40"
          col="5"
          placeholder="Note Content"
          wrap="soft"
          value={this.state.content}
        />
        <Button onClick={this.onSumbit} submit>
          Submit
        </Button>
      </div>
    );
  }
}

function UpdateNotes(props) {
  return (
    <div className="appView">
      <H2>Update Notes:</H2>
      <Note {...props} />
    </div>
  );
}

export default UpdateNotes;
