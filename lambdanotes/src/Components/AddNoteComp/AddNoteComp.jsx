import React, { Component } from 'react';
import { Button } from '../AtomComps/Button';
import * as Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;

export default class AddNoteComp extends Component {
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
              required="required"
              wrap="hard"
              rows="20"
              required={true}
            />
          </div>
          <div onClick={this.addNote}>
            <Button btnName="Save" />
          </div>
        </form>
      </div>
    );
  }
}
