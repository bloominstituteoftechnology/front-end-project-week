import React from "react";
import data from "./Data";
import ShowNote from "./ShowNote";
import LeftPanal from "./LeftPanal";
import Myheader from "./Myheader";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class SelectedNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: data
    };
  }

  showSelected() {
    const p = this.state.notes.filter(
      el => this.props.match.params.id == el.id
    );
    return p[0];
  }

  handleDelete = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="delete">
            <p>Are you sure You want to delete this note?</p>
            <div className="delete-btns">
              <button
                onClick={() => {
                  onClose();
                }}
                className="deleteBtn"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  onClose();
                }}
                className="noBtn"
              >
                {" "}
                No{" "}
              </button>
            </div>
          </div>
        );
      }
    });
  };

  render() {
    return (
      <div>
        <div className="single-header">
          <div className="single-header-link">
            <Link to={`/editNote`}>
              <div>Edit</div>
            </Link>
          </div>
          <div className="single-header-link">
            <Link to="/">
              <div onClick={this.handleDelete}> Delete </div>{" "}
            </Link>
          </div>
        </div>
        <div className="container0">
          <LeftPanal />

          <div className="container1">
            <Myheader p={this.showSelected()} c={"single-note-title"} />
            <ShowNote p={this.showSelected()} c="single-note" />
          </div>
        </div>
      </div>
    );
  }
}

export default SelectedNotes;
