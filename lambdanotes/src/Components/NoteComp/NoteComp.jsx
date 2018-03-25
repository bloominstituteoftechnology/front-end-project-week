import React, { Component } from 'react';
import { Button } from '../AtomComps/Button';

import * as Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;
export default class NoteComp extends Component {
  state = {
    id: 5,
    title: '',
    content: ''
  };

  scrollTo = () => {
    scroll.scrollTo(0);
  };

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  clearState = () => {
    console.log('clear state called');
    this.setState({ id: null, title: '', content: '' });
  };

  editClicked = () => {
    this.setState({
      id: this.props.selectedNote.id,
      title: this.props.selectedNote.title,
      content: this.props.selectedNote.content
    });
    this.props.isUpdating(true);
  };

  cancelClicked = () => {
    this.props.isUpdating(false);
  };

  addNote = () => {
    let noteNum = this.state.id;
    noteNum += 1;
    if (this.state.title !== '' && this.state.content !== '') {
      this.props.handleSubmit({
        id: noteNum,
        title: this.state.title,
        content: this.state.content
      });
      this.scrollTo();
      this.setState({ id: noteNum, title: '', content: '' });
    } else {
      alert('Fill out Title AND Content!');
    }
  };

  render() {
    const classes = this.props.updatingState ? 'HideNote' : 'NormalNote';
    return (
      <div>
        {this.props.selectedNote.title === '' || this.props.updatingState ? (
          <form action="submit" onSubmit={this.addNote}>
            <div>
              <input
                name="title"
                value={this.state.title}
                type="text"
                onChange={this.handleChange}
                placeholder="Note Title"
                required={true}
                style={{
                  width: '60%',
                  height: '50px',
                  paddingLeft: '10px',
                  marginBottom: '20px',
                  fontSize: 20
                }}
              />
            </div>
            <div>
              <textarea
                name="content"
                value={this.state.content}
                type="text"
                onChange={this.handleChange}
                placeholder="Note Content"
                style={{
                  padding: '20px',
                  width: '80%',
                  fontSize: 20
                }}
                wrap="hard"
                rows="20"
                required={true}
              />
            </div>
            <div style={{ display: 'flex' }}>
              {this.props.updatingState ? (
                <div
                  onClick={() => {
                    this.props.updateNote({
                      id: this.state.id,
                      title: this.state.title,
                      content: this.state.content
                    });
                    this.scrollTo();
                  }}
                  style={{ marginRight: '20px' }}
                >
                  <Button btnName="Update" />
                </div>
              ) : (
                <div onClick={this.addNote} style={{ marginRight: '20px' }}>
                  <Button btnName="Save" />
                </div>
              )}
              {this.props.updatingState ? (
                <div onClick={this.cancelClicked}>
                  <Button btnName="Cancel" />
                </div>
              ) : (
                <div style={{ display: 'none' }} />
              )}
            </div>
          </form>
        ) : (
          <div className="ViewNote">
            <div className={classes}>
              <div className="EditNoteBtnGroup">
                <p onClick={this.editClicked}>edit</p>
                <p
                  onClick={() => {
                    this.props.deleteNote({
                      id: this.props.selectedNote.id,
                      title: this.props.selectedNote.title,
                      content: this.props.selectedNote.content
                    });
                    this.scrollTo();
                  }}
                >
                  delete
                </p>
              </div>
              <div className="Note_title">{this.props.selectedNote.title}</div>
              <div className="Note_content">
                {this.props.selectedNote.content}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
