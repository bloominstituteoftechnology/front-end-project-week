import React from 'react';
import { connect } from 'react-redux';
import { ListView } from '../components';
// import { getNotes } from '../actions';

class NoteListViewer extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   this.props.getNotes();
  // }

  render() {
    if (this.props.fetching) {
      return <h2>Fetching best &#9835;</h2>;
    }
    return (
      <div>
      {/* <div className='NoteListViewer_wrapper'> */}
        <ListView notes={this.props.notes} />
        {/* <button onClick={this.props.getNotes}>GET &#9835;</button> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('STATE', state)
  return {
    notes: state.flatNotes.notes,
    error: state.flatNotes.error,
    fetching: state.flatNotes.fetching
  }
}

export default connect(
  mapStateToProps, 
  // { getNotes }
)(NoteListViewer)
