import React, { Component } from "react";
import "./index.css";
import DeleteNote from "../DeleteNote/DeleteNote";
import { Link } from 'react-router-dom';

class NoteView extends Component {
state={
  content:'',
  title:'',
  id:null,
  displayDelete: false
}

componentDidMount(){
const id = this.props.match.params.id;
console.log(this.props.notes);
let note = this.props.notes.filter(note => note.id===Number(id));
note= note[0];
this.setState({content:note.content, title:note.title, id:note.id});
}

showModal = () => {
  this.setState({displayDelete: true})
  return this.state.displayDelete;
}
render() {
    return (
      <div classname="noteView_container">
        <div className="noteView_topContent">
          <h3 className="content_header">{this.state.title}</h3>
          <div>
            <Link to= {`/edit/${this.state.id}`} className="edit_delete">
              edit
            </Link>
            <Link to="#" className="edit_delete" onClick={this.showModal}>
              delete
            </Link>
          </div>
        </div>
        <div className="notesList">
        <p className="">{this.state.content}</p>
        </div>
        <DeleteNote toggle={this.state.displayDelete} id={this.state.id} showModal={this.showModal}/>
      </div>
    );
  }
}

export default NoteView;
