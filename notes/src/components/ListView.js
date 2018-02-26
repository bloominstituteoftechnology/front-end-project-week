import React from 'react';
import { connect } from 'react-redux';
import './ListView.css';

class ListView extends React.Component {

  render() {
    return (
      <div className='list-view'>
        {this.props.notes ?
        <ul className='list-notes'>
          {this.props.notes.map(note => {
            return (
              <li>{note.entry}</li>
            );
          })}
        </ul>
        :
        <div className='nothing-to-view'>
          Please Add a note
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

export default connect()(ListView);