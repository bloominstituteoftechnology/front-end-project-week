import React, { Component } from 'react';
import '../Styles.css';
// import { Link } from 'react-router-dom'
// import EDITNOTE from './EditNote';

class NoteView extends Component {
  constructor (props){
    super(props)
    this.state={
      note:[],
    }
  }

  componentDidMount() {
    // this.note=
  }


  render() {
    //const { title, text } = note;
    return (
      <div className="APP__NOTEVIEW">
        <p>edit</p>
        {/* <Link to={`/edit/${note.id}`}>edit</Link> */}
        <p>delete</p>
        {/* <h2>{note.title}</h2> */}
      </div>
    );
  };
};

export default NoteView;

