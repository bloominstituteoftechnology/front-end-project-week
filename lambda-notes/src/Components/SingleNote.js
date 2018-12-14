import React from 'react';
import '../CSS/SingleNote.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SingleNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {}
    };
  }

  componentDidMount() {
    this.noteView(this.props.match.params.id);
  }

  componentDidUpdate() {
    axios
      .get(`http://localhost:8000/notes/${this.props.match.params.id}`)
      .then(response => {
        if (JSON.stringify(this.state.note) !== JSON.stringify(response.data)) {
          this.setState({ note: response.data[0] });
        }
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  noteView = id => {
    axios
      .get(`http://localhost:8000/notes/${id}`)
      .then(response => {
        this.setState({ note: response.data[0] });
        console.log('note view', response.data);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  };

  render() {
    if (!this.state.note) {
      return <div>Hold on for a sec!</div>;
    } else {
      return (
        <div>
          <div className={this.props.deleting ? 'delete' : 'hide-delete'}>
            <div className="modal">
              <p>Are you sure you want to delete this?</p>
              <div className="btns">
                <Link className="linkdel" to="/">
                  <div
                    onClick={() =>
                      this.props.noteDelete(this.props.match.params.id)
                    }
                    className="deletebtn"
                  >
                    Delete
                  </div>
                </Link>
                <div onClick={this.props.deleteModal} className="nobtn">
                  No
                </div>
              </div>
            </div>
          </div>
          <div className="edit-del">
            <Link
              className="linkedit"
              to={`/notes/edit/${this.props.match.params.id}`}
            >
              <p
                onClick={() =>
                  this.props.editHandler(this.props.match.params.id)
                }
              >
                edit
              </p>
            </Link>
            <p onClick={this.props.deleteModal}>delete</p>
          </div>
          <h1 className="focustitle">{this.state.note.title}</h1>
          <div className="notetxt">{this.state.note.content}</div>
        </div>
      );
    }
  }
}

export default SingleNote;
