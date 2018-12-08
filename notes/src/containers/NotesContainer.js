import React from 'react';
import {connect} from 'react-redux';

class Notes extends React.Component {
  render() {
    console.log('notes', this.props);
    return (
      <div>
        <h2 style={{display: 'inline'}}>notes component</h2>
        {this.props.notes.map(note => (
          <div>
            <h2>{note.title}</h2>
            <h3>{note.textBody}</h3>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps)(Notes);
