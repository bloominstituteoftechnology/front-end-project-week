import React from "react";
import { Link } from "react-router-dom";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      notes: "",
      id: "",
      edit: false,
      modal: false,
      list: true
    };
  }

  componentDidMount() {
    if (this.props.note) {
      const note = this.props.note;
      this.setState({
        title: note.title,
        notes: note.notes,
        id: note.id
      });
    } else {
      const id = this.props.match.params.id;
      this.fetchNote(id);
      this.setState({ list: false });
    }
  }

  fetchNote = id => {
    id = parseInt(id, 10);
    const note = this.props.notes.filter(note => note.id === id)[0];
    this.setState({
      title: note.title,
      notes: note.notes,
      id: note.id
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdate = note => {
    this.props.updateNote(note);
    this.setState({ edit: false });
  };

  handleDelete = id => {
    this.toggleModal();
    this.props.deleteNote(id);
  };

  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    const { title, notes, id, edit, modal, list } = this.state;
    return (
      <div className="noteContainer">
        {list ? (
          <div className="noteCard">
            <h3>{title}</h3>
            <div className="noteCardWrapper">
              <p className="noteCardText">{notes}</p>
            </div>
          </div>
        ) : (
          <div className="noteView">
            {edit ? (
              <div className="noteForm">
                <h3>Edit Note:</h3>
                <form>
                  <input
                    name="title"
                    value={title}
                    placeholder="Note Title"
                    onChange={e => this.handleChange(e)}
                  />
                  <textarea
                    name="notes"
                    value={notes}
                    placeholder="Note Content"
                    onChange={e => this.handleChange(e)}
                  />
                  <button
                    className="button"
                    onClick={() => this.handleUpdate({ title, notes, id })}
                  >
                    Save
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <div className="noteActions">
                  <a onClick={() => this.setState({ edit: true })}>edit</a>
                  <a onClick={() => this.toggleModal()}>delete</a>
                </div>
                <h3>{title}</h3>
                <p>{notes}</p>
              </div>
            )}
            {modal ? (
              <div>
                <div className="modalBackground" />
                <div className="modalPosition">
                  <div className="modal">
                    <p>Are you sure you want to delete this?</p>
                    <div className="modalActions">
                      <Link
                        className="buttonDelete"
                        to="/"
                        onClick={() => this.handleDelete(id)}
                      >
                        Delete
                      </Link>
                      <div className="modalSplit" />
                      <button
                        className="button"
                        onClick={() => this.toggleModal()}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

export default Note;
