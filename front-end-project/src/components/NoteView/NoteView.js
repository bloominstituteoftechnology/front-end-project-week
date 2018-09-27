import React, { Component } from "react";
import "./index.css";
import DeleteNote from "../DeleteNote/DeleteNote";
import { Link } from 'react-router-dom';

class NoteView extends Component {
state={
  note: {},
  title:{},
  id:{}
}

componentDidMount(){
const id = this.props.match.params.id;
const note = this.props.notes.filter(note => note.id===Number(id));
this.setState({note:note[0]})
console.log(note[0]);
}
  render() {
    return (
      <div classname="noteView_container">
        <div className="noteView_topContent">
          {/* <h3 className="content_header">{this.state.matched[0].title}</h3>
          <div>
            <Link to= {`/edit/${this.props.match.params.id}`} className="edit_delete">
              edit
            </Link>
            <Link to="#" className="edit_delete" onClick={this.showModal}>
              delete
            </Link>
          </div>
        </div>
        <div className="notesList">
        <p className="">{this.state.matched[0].body}</p> */}
        </div>
        <DeleteNote toggle={this.state.displayDelete} showModal={this.showModal}/>
      </div>
    );
  }
}

export default NoteView;
