import React from "react";

class EditNote extends React.Component {
  constructor(props){
    super();
    this.state = {
      id: "",
      title: "",
      body: ""
    }
  }
  render(){
    return (
      <div>
        <h2>
          Edit Note:
        </h2>
        <form className="newnote-container">
          <input type="text" placeholder="Note Title" className="title-input" name="title" value={this.props.notes[this.props.match.params.id].title}></input>
          <textarea rows="20" cols="50" className="body-input" placeholder="Note Content" name="body" value={this.props.notes[this.props.match.params.id].body}></textarea>
          <div className="save-button" >Update</div>
        </form>
      </div>
    )
  }
}

export default EditNote;
