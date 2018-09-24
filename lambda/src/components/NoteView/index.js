import React from 'react';
import { H1, UnderLinedP, NoteOptions, Button } from '../StyledComponents';
import { Link } from 'react-router-dom';

class NoteView extends React.Component {
  state = {
    title: 'Note Title',
    content: 'Note Content',
    id: null,
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    const notes = this.props.notes[id];
    console.log(notes);
    this.setState({
      title: notes.title,
      content: notes.content,
      id: id
    });
  }

  render() {
    return (
      <div className="appView">
        <NoteOptions>
          <Link to={`/notes/update/${this.state.id}`}>
            <UnderLinedP>edit</UnderLinedP>
          </Link>
          <UnderLinedP onClick={this.toggle}>delete</UnderLinedP>
        </NoteOptions>
        <div className="NoteView">
          <H1>{this.state.title}</H1>
          <p>{this.state.content}</p>
        </div>
        {this.state.modal ? (
          <div id="myModal" className="modal">
            <div className="modalData">
              <div className="modal-content">
                <p>Are you sure you want to delete this?</p>
              </div>
              <div className="modal-options">
                <Button delete>Delete</Button>
                <Button>No</Button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default NoteView;
