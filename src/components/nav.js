import React from 'react';
import "../css/note.css"
import NavNoteList from "./navNoteList"
import { getNotes } from '../actions';
import { connect } from 'react-redux';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      inputText: '',
      title: "",
      id: "",
      enableList: false,
    };
  }
 
  componentDidMount() {
		this.props.getNotes();
  }
  
  enableList = (e) => {
    e.preventDefault();
    let enableList = this.state.enableList;
    enableList = !enableList;
    this.setState({ enableList: enableList });
  }
  
sortThis = () => {
  const newNotes = this.props.notes.sort((a, b) => a.title.localeCompare(b.title))
//const newNotes =  this.props.notes.sort((a, b) => parseFloat(a.title) - parseFloat(b.title));
//console.log(newNotes)
this.setState({ notes: newNotes });

 } 
  render() {

    

    return (
      <form className="nav-left">
        <div className="nav-title">Lambda Notes</div>
        <ul className="nav-list">
          <li className="nav-left-item icon1">
            <button className="nav-button" value="noteList" onClick={this.props.noteList} name="noteList">View Notes</button>
          </li>
          <li className="nav-left-item">
            <div id="icon2" className="nav-left-icon-1"></div>
            <button className="nav-button" value="noteCreate" onClick={this.props.noteCreate} name="noteCreate">+ Create New Note</button>
          </li>
          <li className="nav-left-item">
            <div id="icon2" className="nav-left-icon-1"></div>
            <button className="nav-button" value="noteCreate" onClick={this.enableList} name="noteCreate">{(this.state.enableList) ? <p>Disable Quick Select</p>:<p>Enable Quick Select</p>}</button>
          </li>
          <li className="nav-left-item">
            <div id="icon2" className="nav-left-icon-1"></div>
          </li>
        </ul>{(this.state.enableList) ?
        <ul className="nav-title-list">
        {this.props.notes.map((note, index) => {
						return <NavNoteList key={index} title={note.title} viewNote={this.props.viewNote} textBody={note.textBody} id={note.id} noteView={this.props.noteView} notes={this.state.notes} />
					})}
       
        </ul>: null}
        {(this.state.enableList) ? <div className="sort-button" onClick={this.sortThis}>Sort By Title</div> : null}
      </form>
    );
  }
}

const mapStateToProps = state => {
	const { notesReducer } = state;
	return {
		notes: notesReducer.notes,
		error: notesReducer.error,
		gettingNotes: notesReducer.gettingNotes
	};
};

export default connect(mapStateToProps, {
	getNotes
})(Nav);

