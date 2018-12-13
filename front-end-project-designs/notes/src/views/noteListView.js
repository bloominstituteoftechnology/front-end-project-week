import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FullView from "../components/fullView";
import { fetchNotes, addNote, deleteNote, fetchSingle, editNote } from "../actions";
import { Switch, Route } from "react-router-dom";
import SingleView from "../components/singleNoteView";
import Form from "../components/form";
import EditForm from "../components/editForm";
class NoteListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newNote: {
        tag: [],
        title: "",
        note: ""
      },
      title:"",
      textBody:"",
    };
  }
  componentDidMount() {
    console.log("hhhh");
    this.props.fetchNotes();
  }
  handleChanges = event => {
    this.setState({
      newNote: {
        ...this.state.newNote,
        [event.target.name]: event.target.value
      }
    });
  };
  handleChangesEdit = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
  };
  addNewNote = event => {
    this.props.addNote(this.state.newNote);
  };
  handleDelete = id => {
    this.props.deleteNote(id);
  };
  getNote = () => {
    this.props.fetchNotes();
  };
  handleFetchSingle = id => {
    this.props.fecthSingle(id);
  };

  editNote=(id)=>{
    const {title,textBody}=this.state
    this.props.editNote(id,{title,textBody});
  }
  render() {
    console.log("render here");
    if (this.props.fetchingNotes) {
      return <h1>Hold on, we're getting your notes</h1>;
    }
    // return (
    //     this.props.notes.map((note)=>{
    //         return(
    //             <NoteView note={note}/>
    //         )
    //     })
    // );
    return (
      <Switch>
        <Route
          path="/form/add"
          render={() => (
            <Form
              handleChanges={this.handleChanges}
              addNewNote={this.addNewNote}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => <FullView notes={this.props.notes} />}
        />
        <Route
          path="/notes/:id"
          render={props => (
            <SingleView
              {...props}
              singleNote={this.props.singleNote}
              handleDelete={this.handleDelete}
              handleFetchSingle={this.handleFetchSingle}
              getNote={this.getNote}
            />
          )}
        />
        <Route
          path="/form/edit/:id"
          render={(props) => (
            <EditForm
              {...props}
              handleChanges={this.handleChangesEdit}
              editNote={this.editNote}
            />
          )}
        />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  console.log("map state here" + state);
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes,
    selected: state.selected,
    error: state.error,
    singleNote: state.singleNote
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { fetchNotes, addNote, deleteNote, fetchSingle, editNote }
  )(NoteListView)
);
