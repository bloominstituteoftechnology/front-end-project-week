import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      notes: this.props.notes,
      openModal: false
    };
  }
  componentDidMount() {
    let searchID;

    if (this.props.match.params.id) {
      searchID = this.props.match.params.id;
    } else {
      searchID = this.props.id;
    }

    console.log("component mounting param", searchID);

    const foundNote = this.state.notes.find(
      note => note.id === Number(searchID)
    );

    console.log("foundNote", foundNote);

    if (!foundNote) return;
    this.setState(() => ({ note: foundNote }));
  }

  openModalHandler = e => {
    this.setState({ openModal: true });
  };

  closeModalHandler = e => {
    this.setState({ openModal: false });
  };

  deleteDelayer = () => {
    setTimeout(() => {
      this.props.history.push("/");
    }, 500);
  };

  render() {
    return (
      <div className="note-main">
        <div className="editdelete">
          <Link to={`/edit/${this.props.match.params.id}`}>
            <div className="edit">edit</div>
          </Link>

          <div className="delete" onClick={this.openModalHandler}>
            delete
          </div>
        </div>

        <div
          className={`${this.state.openModal ? "modal" : "modal-nodisplay"}`}
        >
          <div className="modal-content">
            <p>Are you sure you want to delete this?</p>

            <div className="form-button-group">
              <div onClick={this.deleteDelayer}>
                <button
                  className="form-button delete"
                  onClick={e =>
                    this.props.deleteHandler(e, this.props.match.params.id)
                  }
                >
                  Delete
                </button>
              </div>

              <button className="form-button" onClick={this.closeModalHandler}>
                No
              </button>
            </div>
          </div>
        </div>

        <div className="note-title">{this.state.note.title}</div>

        <div className="note-note">{this.state.note.note}</div>
      </div>
    );
  }
}
