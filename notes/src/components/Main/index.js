import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ListView from "../ListView";
import CreateNote from "../CreateNote";
import Navigation from "../Navigation";
import Note from "../Note";
import EditNote from "../EditNote";
import DeleteModal from "../DeleteModal";
import UserAuthentication from "../UserAuthentication";

import "./main.css";
import {
  fetchNotes,
  createNote,
  updateNote,
  deleteModal,
  closeModal,
  deleteNote
} from "../../actions";

class Main extends Component {
  componentDidMount() {
    this.props.fetchNotes();
    //   // set State to fetching if no notes list is present
    //   this.setState({ fetching: true, deleted: false })
    //
    // // make an API call to get notes
    // axios.get('https://fe-notes.herokuapp.com/note/get/all')
    //      .then(res => {
    //        this.setState({
    //          notes: res.data,
    //          fetching: false,
    //          fetched: true
    //        })
    //      })
    //      .catch(err => {
    //        this.setState({
    //          error: err
    //       })
    //     })
  }

  // getNotes = () => {
  //   this.setState({fetching: true})
  //   axios.get('https://fe-notes.herokuapp.com/note/get/all')
  //               .then(res => this.setState({
  //                 notes: res.data,
  //                 fetched: true,
  //                 fetching: false,
  //                 deleting: false,
  //                 deleted: false
  //               }))
  //               .catch(err => {
  //          this.setState({
  //            error: err
  //         })
  //       })
  // }

  // createNote = (note) => {
  //   this.setState({ creatingNote: true, fetched:false })
  //
  //   axios.post('https://fe-notes.herokuapp.com/note/create', note)
  //        .then(res => this.setState({
  //          creatingNote: false,
  //          fetched: true
  //        }))
  //        .catch(err => {
  //          this.setState({
  //            error: err
  //         })
  //       })
  //       setTimeout(() => {this.setState({
  //         creatingNote: false,
  //         fetched: true
  //       })},1000);
  // }

  // updateNote = (note) => {
  //   this.setState({updating: true, fetched:false})
  //
  //   axios.put(`https://fe-notes.herokuapp.com/note/edit/${note.id}`, {...note})
  //        .then(res => {
  //          this.setState({updating: false, fetched: true})
  //        })
  //        .catch(err => {
  //          this.setState({
  //            error: err
  //         })
  //       })
  //
  //   setTimeout(() => {
  //     this.setState({updating: false, fetched: true});
  //   },2000)
  //
  // }

  // deleteModal = (id) => {
  //   this.setState({deleting: true, deleted:false, id: id})
  // }
  // delete = () => {
  //   const id = this.state.id
  //   axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
  //        .then(res => {
  //         this.getNotes();
  //         this.setState({deleting: false, deleted:true})
  //        })
  //        .catch(err => {
  //          this.setState({error: err})
  //        })
  // }
  // closeModal = () => {
  //   this.setState({deleting:false})
  // }
  render() {
    return (
      <section className="main-container">
        <section className="loading-container">
          {this.props.created || this.props.deleted || this.props.updated ? (
            <p className="loading position-top">Updated...</p>
          ) : null}
        </section>
        <Navigation getNotes={this.props.fetchNotes} />

        <Route
          path="/"
          exact
          render={props => (
            <ListView notes={this.props.notes} fetching={this.props.fetching} />
          )}
        />

        <Route
          path="/note/create"
          exact
          render={props => (
            <CreateNote
              createNote={this.props.createNote}
              creatingNote={this.props.creating}
            />
          )}
        />

        <Route
          path="/notes/:id"
          exact
          render={props => (
            <Note
              {...props}
              delete={this.props.deleteModal}
              deleting={this.props.delete}
            />
          )}
        />

        <Route
          path="/notes/:id/edit"
          exact
          render={props => (
            <EditNote
              {...props}
              update={this.props.updateNote}
              updating={this.props.updating}
            />
          )}
        />

        <Route path="/auth" exact render={props => <UserAuthentication />} />

        {this.props.deleting ? (
          <DeleteModal
            delete={this.props.deleteNote}
            close={this.props.closeModal}
            id={this.props.id}
          />
        ) : null}
        {this.props.deleted ? <Redirect exact push to="/" /> : null}

        {this.props.updated ? <Redirect exact push to="/" /> : null}

        {this.props.created ? <Redirect exact push to="/" /> : null}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.notesReducer.fetching,
    fetched: state.notesReducer.fetched,
    creating: state.notesReducer.creating,
    created: state.notesReducer.created,
    deleting: state.notesReducer.deleting,
    deleted: state.notesReducer.deleted,
    updating: state.notesReducer.updating,
    updated: state.notesReducer.updated,
    error: state.notesReducer.error,
    id: state.notesReducer.id,
    notes: state.notesReducer.notes
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchNotes, createNote, updateNote, deleteModal, closeModal, deleteNote }
  )(Main)
);
