import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { SideNav } from "../components";
import { Grid } from "@material-ui/core";
import "../styling/NoteView.css";

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.cancelDelete = this.cancelDelete.bind(this);
    this.state = {
      deleting: false
    };
  }

  confirmDelete() {
    this.setState({
      deleting: true
    });
  }

  cancelDelete() {
    this.setState({
      deleting: false
    });
  }

  render() {
    let note = this.props.notes.filter(
      note => note._id === this.props.match.params.id
    );
    note = note[0];
    return (
      <div>
        {/* This ternary is to ensure that this page only loads if there is a note
        This is to prevent the app crashing trying to perform functions on resources
        not yet loaded into the system */}
        {note ? (
          <Grid
            container
            spacing={0}
            style={{ height: "100%", overflow: "scroll", background: "#a60c07" }}
          >
            {this.state.deleting ? (
              <Grid item xs className="modalWrapper modal" id="deleteModal">
                <h2 className="modalText modal">
                  Are you sure you want to delete this?{" "}
                </h2>
                <div className="modalButtons modal">
                  <NavLink to="/notes" className="modal">
                    <button
                      onClick={() =>
                        this.props.deleteNote(this.props.match.params.id)
                      }
                      style={{ background: "#D0021B" }}
                      className="button2 modal"
                    >
                      Delete
                    </button>
                  </NavLink>
                  <button
                    onClick={() => this.cancelDelete()}
                    className="button2 modal"
                  >
                    Cancel
                  </button>
                </div>
              </Grid>
            ) : (
              <span />
            )}
            <Grid item xs={1}>
              <Route path="/notes/:id" render={(props) => <SideNav {...props} cancelDelete={this.cancelDelete.bind(this)} />}/>
            </Grid>
            <div
              style={{
                marginLeft: "calc(150px + 2vw)",
                width: "calc(100% - (150px + 2vw)"
              }}
            >
              <Grid item xs={12}>
                <div
                  className="note"
                  style={{
                    background: this.state.deleting ? "gray" : "#F3F3F3",
                    opacity: this.state.deleting ? ".4" : "1"
                  }}
                >
                  <div className="noteViewButtonWrap">
                    <NavLink to={`/edit/${this.props.match.params.id}`}>
                      edit
                    </NavLink>
                    <span
                      onClick={() => this.confirmDelete()}
                      style={{ marginLeft: "4vh" }}
                    >
                      delete
                    </span>
                  </div>
                  <div
                    onClick={() => this.cancelDelete()}
                    style={{ height: "100vh", background: '#a60c07'}}
                  >
                    <div onClick={() => this.cancelDelete()}>
                      <h3 style={{textShadow: '-2px -1px 30px -5px rgba(255,255,255,1)'}}> {note.title} </h3>
                    </div>
                    <div
                      onClick={() => this.cancelDelete()}
                      className="noteText"
                    >
                      <div onClick={() => this.cancelDelete()}>
                        <p style={{textShadow: '-2px -1px 30px -5px rgba(255,255,255,1)'}}>{note.body}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </div>
          </Grid>
        ) : null}
      </div>
    );
  }
}

export default NoteView;
