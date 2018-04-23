import { createNote } from "../../actions";

class CreateNote extends Component {
  state = {
    noteTitle: "",
    noteContent: ""
  };

  render() {
    return (
      <div className="Note_Creator">
        <h1>Create New Note:</h1>
        <input
          type="text"
          placeholder="Title"
          name="noteTitle"
          value={this.state.noteTitle}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <input
          type="text"
          placeholder="Content"
          name="noteContent"
          value={this.state.noteContent}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <button
          onClick={() => {
            this.props.createNote({
              noteTitle: this.state.noteContent,
              noteContent: this.state.noteContent
            });
            this.setState({ noteTitle: "", noteContent: "" });
          }}
        >
          Save
        </button>
      </div>
    );
  }
}
