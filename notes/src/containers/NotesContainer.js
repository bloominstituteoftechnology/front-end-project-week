import React from 'react';
import {connect} from 'react-redux';
import Notes from '../components/Notes';
import {fetchNotes} from '../store/actions';

class NotesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    console.log('notes', this.props);
    return (
      <div>
        <h2 style={{display: 'inline'}}>notes container</h2>
        <Notes {...this.props} notes={this.props.notes} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(
  mapStateToProps,
  {fetchNotes},
)(NotesContainer);
