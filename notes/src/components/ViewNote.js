import React from 'react';
import './ViewNote.css';
import { NavLink, Link } from 'react-router-dom';
import notes from '../kitty-ipsum';

class ViewNote extends React.Component {
  state = {
    note: null,
  }

  componentDidMount() {
    // console.log(this.props);
    const id = this.props.match.params.id;
    console.log("this is the id from params: ", id);
    console.log("this is what the import of notes got us: ", notes)
    let returnedNote = notes.filter(obj => obj.id === 2);
    console.log("this is returnedNote after filter: ", returnedNote);
    this.setState( {note: returnedNote} );
    console.log("this is what is in state now: ", this.state.note);
  }

  render() {
    // console.log('you called NewNote from NoteList');
    return (
      <div className="newNoteDiv">
        <div className="leftBar">
          <div>
            <h1>Lambda</h1>
            <h2>Notes</h2>
            <button className="btns">
              <Link to="/">View Your Notes</Link>
            </button>
            <button className="btns">+ Create New Note:</button>
          </div>
        </div>
        <div className="rightBar">
          <div>
            <h5><NavLink to="/notes/:id/Edit">Edit</NavLink></h5>
            <h5>Delete</h5>
            <h3>Note Name</h3>
          </div>
          <div>
              <form>
                <input className="titleForm" value={"abc"} />
              </form>
            </div>
            <div>
              <form>
                <input className="contentForm" value={"content"} />
              </form>
            </div>
          <div>
            <button type="submit" className="btns">
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewNote;
