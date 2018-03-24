import React, { Component } from 'react';
import { Button } from '../AtomComps/Button';
import { CardLarge } from '../AtomComps/CardLarge';

import * as Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;

export default class NoteComp extends Component {
  state = {
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

  addNote = () => {
    if (this.state.title !== '' && this.state.content !== '') {
      this.props.handleSubmit({
        title: this.state.title,
        content: this.state.content
      });
      this.scrollTo();
      this.setState({ title: '', content: '' });
    } else {
      alert('Fill out Title AND Content!');
    }
  };

  render() {
    return (
      <div>
        {this.props.selectedNote.title === '' ? (
          <form
            action="submit"
            onChange={this.handleChange}
            onSubmit={this.addNote}
          >
            <div>
              <input
                name="title"
                value={this.state.title}
                type="text"
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
            <div onClick={this.addNote}>
              <Button btnName="Save" />
            </div>
          </form>
        ) : (
          <div className="ViewNote">
            <CardLarge
              title={this.props.selectedNote.title}
              content={this.props.selectedNote.content}
            />
          </div>
        )}
      </div>
    );
  }
}
