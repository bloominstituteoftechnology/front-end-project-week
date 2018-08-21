import React, { Component } from 'react';
import { connect } from 'react-redux';

import Note from '../components/notes/Note';


class NotesContainer extends Component {
  render() {
    return (
      <div>
        {
          this.props.notes.map((item, index) => <Note
            key={index}
            id={item.id}
            title={item.title}
            description={item.description}
            deleteNote={this.deleteNote}
          />)
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(mapStateToProps, {})(NotesContainer);