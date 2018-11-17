import React, { Component } from 'react';


class Notepage extends Component {

    render() {
        return (
        <input type="text"
          placeholder="Add note..."
          ref={((input) => { this.textInput = input })}
          className="textInput"
          value={this.state.noteText}
          onChange={noteText => this.updateNoteText(noteText)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
        );
    }
}

export default Notepage;