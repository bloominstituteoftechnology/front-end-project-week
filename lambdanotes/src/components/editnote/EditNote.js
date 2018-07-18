import React from "react";

class EditNote extends React.Component {
  constructor(props){
    super();
    this.state = {
      notes: [
        {
          id: "",
          title: "",
          body: ""
        }
      ]
    }
    this.onFormChange = this.onFormChange.bind(this);
  }
  onFormChange = event => {
  this.setState({[event.target.name]: event.target.value})
  }
  onUpdateClick = () => {
    this.props.editNote(this.state.notes);
  }
  componentDidMount(){
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
          <input type="text" placeholder="Note Title" className="title-input" name={`notes${this.props.match.params.id}.title`} value={this.state.notes[this.props.match.params.id].title} onChange={this.onFormChange}></input>
          <textarea rows="20" cols="50" className="body-input" placeholder="Note Content" name="body" value={this.state.notes[this.props.match.params.id].body} onChange={this.onFormChange}></textarea>
          <div className="save-button" onClick={this.onUpdateClick}>Update</div>
        </form>
      </div>
    )
  }
}

export default EditNote;
