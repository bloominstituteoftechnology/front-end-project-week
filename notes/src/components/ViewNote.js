import React from 'react';
import './ViewNote.css';
import { NavLink, Link } from 'react-router-dom';
import kitty from '../kitty-ipsum';

class ViewNote extends React.Component {
  state = {};
    

  componentDidMount() {
    // console.log(this.props);
    const paramsId = this.props.match.params.id;
    // console.log("this is the id from params: ", typeof(paramsId), paramsId);
    // console.log("this is what the import of kitty got us: ", kitty)
    const returnedNote = kitty.find(obj => obj.id === Number(paramsId));
    // console.log("this is returnedNote after filter: ", returnedNote);
    let newState = returnedNote;
    // console.log(newState);
    this.setState(newState);
    // console.log("this is what is in state now: ", this.state);
  }

  render() {
    // console.log('you called NewNote from NoteList');
    return (
      <div className="newNoteDiv">
        <div className="leftBar">
          <div>
            <h1>Lambda</h1>
            <h2>Notes</h2>
            <NavLink to="/"><button className="btns">View Your Notes</button></NavLink>
            
            <NavLink to="/createnote"><button className="btns">+Create New Note</button></NavLink>
          </div>
        </div>
        <div className="rightBar">
          <div>
            <h5><NavLink to="/notes/:id/Edit">Edit</NavLink></h5>
            <h5>Delete</h5>
            <h3>Note Name</h3>
          </div>
          <div>
          {this.state.id}
        </div>
            <div>
              <form>
                <input className="contentForm" value={this.state.text} />
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
