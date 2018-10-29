import React from "react";
import axios from "axios";

class FullNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      deleted: false
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getNote(id);
  }

  getNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(() => {
        this.setState({ deleted: true });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <h2>{this.state.notes.title}</h2>
        <p>{this.state.notes.textBody}</p>
      </div>
    );
  }
}

export default FullNote;
