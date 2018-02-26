import React from 'react';
import { connect } from 'react-redux';
import './ListView.css';

class ListView extends React.Component {

  render() {
    return (
      <div className='list-view'>
        {this.props.notes ?
        <ul className='list-notes'>
          <h2>Your Notes:</h2>
          {this.props.notes.map((note, i) => {
            return (
              <li key={i} className='list-note'>
              <div>{note.title}</div>
              <div>{note.entry}</div>
              </li>
            );
          })}
        </ul>
        :
        <div className='nothing-to-view'>
          <h2>Please Add a note</h2>
        </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps)(ListView);