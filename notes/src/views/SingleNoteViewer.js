import React from 'react';
import { connect } from 'react-redux';
import { SingleNote } from '../components';
import { getSingleNote } from '../actions';

class SingleNoteViewer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getSingleNote(id);
  }

  render() {
    if (this.props.fetching) {
      return <h2>Fetching your &#9835;</h2>;
    }
    if (this.props.note) {
      console.log('this.props.note', this.props.note)
      return (
        <div>
          <SingleNote 
          note={this.props.note} />
        </div>
      )
    } else {
      return (
        <h2>NOTE UNAVAILABLE</h2>
      )
    }
  }
}

const mapStateToProps = state => {
  console.log('STATE', state)
  return {
    note: state.singleFlatNote.noteSelected,
    error: state.singleFlatNote.error,
    fetching: state.singleFlatNote.fetching
  }
}

export default connect(
  mapStateToProps, 
  { getSingleNote }
)(SingleNoteViewer)