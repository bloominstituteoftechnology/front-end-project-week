import React from 'react';
import { connect } from 'react-redux';
import { ListView } from '../components';
import { getNotes } from '../actions';
import { NavBar } from '../components';

class NavBarViewer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    if (this.props.fetching) {
      return <h2>Fetching best &#9835;</h2>;
    }
    return (
      <div className='NoteListViewer_wrapper'>
        <div className='nav-bar'>
          <h1>Lambda Notes</h1>
          <nav>
            <ul>
            {/* <li> <a href='https://fe-notes.herokuapp.com/note/get/all'>View Your Notes</a> </li>  */}
          {/* <button onClick={this.props.getNotes}>GET &#9835;</button> */}
          {/* <li> <a href='https://fe-notes.herokuapp.com/note/create'>+ Create New Note</a> </li>  */}
            </ul>
          </nav>
          </div>
        <NavBar />
        <button onClick={this.props.getNotes}>GET &#9835;</button>
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
  { getNotes }
)(NavBarViewer)