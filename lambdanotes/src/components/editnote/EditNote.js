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
        },
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
    var index = this.props.match.params.id;
    var whatIsChanging = event.target.name;
    const editedNote = this.state.notes;
    editedNote[index][whatIsChanging] = event.target.value;
    this.setState({editedNote});
  }
  onUpdateClick = () => {
    this.props.editNote(this.state.notes);
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
          <textarea rows="20" cols="50" className="body-input" name="body" value={this.state.notes[this.props.match.params.id].body} onChange={this.onFormChange}></textarea>
          <div className="save-button" onClick={this.onUpdateClick}>Update</div>
        </form>
      </div>
    )
  }
}

export default EditNote;
