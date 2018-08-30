import React, { Component } from "react";
// import { Link } from "react-router-dom";


class EditNote extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: props.notes,
      note: '',
      _id: '',
      title: '',
      textBody: '',
    };
  }



  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  };


  // handleEdit = (event, _id) => {
  //   event.preventDefault();
  //   const notes = this.state.notes.map(note => {
  //     if (note._id)
  //   })
  // }

  render (props){
    return (
<div>
      {/* <Link /> */}
      <div className="note-header">
        {props.note.title}
      </div>
      <div className="note-content" >
        {props.note.textBody}
      </div>
    </div>
    )
  }
}



export default EditNote;
