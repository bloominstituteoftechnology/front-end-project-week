import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

class EditNote extends React.Component {
  constructor(props){
    super();
    this.onFormChange = this.onFormChange.bind(this);
  }
  onFormChange = event => {
    var index = this.props.match.params.id;
    var whatIsChanging = event.target.name;
    const editedNote = this.state.notes;
    editedNote[index][whatIsChanging] = event.target.value;
    this.setState({editedNote});
  }
  onUpdateClick = (e) => {
    this.props.editNote(this.state.notes);
    console.log(this.state.notes);
    console.log(this.props.match.params.id)
    axios.put(`http://localhost:8000/api/notes/${this.state.notes[this.props.match.params.id].id}`, {
      "title": this.state.notes[this.props.match.params.id].title,
      "content": this.state.notes[this.props.match.params.id].content
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  componentWillMount(){
    this.setState({
      notes: this.props.notes,
      id: this.props.match.params.id,
    })
  }
  render(){
    return (
      <div>
        <h2>
          Edit Note:
        </h2>
        <form className="newnote-container">
          <input type="text" className="title-input" name="title" value={this.state.notes[this.props.match.params.id].title} onChange={this.onFormChange}></input>
          <textarea rows="20" cols="50" className="body-input" name="content" value={this.state.notes[this.props.match.params.id].content} onChange={this.onFormChange}></textarea>
          <Link to={"/"} style={{ textDecoration: 'none' }}>
            <button className="save-button" onClick={this.onUpdateClick}>Update</button>
          </Link>
        </form>
      </div>
    )
  }
}

export default EditNote;
