import React from "react";
import axios from "axios";

// const Note = props => {
//   console.log(props.notes);
//   return (
//     <div className="note-card">
//       <h2>{props.info.title}</h2>
//       <p>{props.info.textBody}</p>
//       <span>{props.info.tags}</span>
//     </div>
//   );
// };

// export default Note;

class Note extends React.Component {
  state = {
    note: []
  };

  delete = () => {
    console.log(this.props.match.params.id);
    this.props.delete(this.props.match.params.id);
    this.props.history.push("/notes");
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(res => this.setState({ note: res.data }))
      .catch(err => console.error(err));
  }

  render() {
    const { note } = this.state;
    return (
      <div className="note-card">
        <h2>{note.title}</h2>
        <p>{note.textBody}</p>
        <span>{note.tags}</span>

        <button type="submit" onClick={this.delete}>
          Delete Item
        </button>
      </div>
    );
  }
}

export default Note;
