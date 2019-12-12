import React, { useEffect } from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import { useStyles } from "./Dashboard";

import CssBaseline from "@material-ui/core/CssBaseline";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Note from "./Note";

import {
  fetchNotes,
  fetchTags,
  fetchUserNotes,
  fetchUserTags
} from "../actions/actions";

// import "../styles/App.css";

function Notes(props) {
  useEffect(() => {
    const { path } = props.match;

    if (path === "/my-notes") {
      const user = this.props.user;
      props.fetchUserNotes(user);
      props.fetchUserTags(user);
    } else {
      props.fetchNotes();
      props.fetchTags();
    }
  }, []);

  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  // sortNotes = (a, b) => {
  //   if (b.id < a.id) return 1;
  //   if (b.id > a.id) return -1;
  //   return 0;
  // };

  // let sortedNotes = this.props.notes.sort(this.sortNotes);
  // if (!notes) {
  //   return (
  //   <div className="componentContainer"></div>
  //   );
  // } else {

  let notes = props.notes;
  const { path } = props.match;
  return (
    <div className="componentContainer">
      <CssBaseline />
      <Container maxWidth="lg" className={classes.container}>
      {path === "/my-notes" ? <h2>Your Notes:</h2> : <h2>All Notes:</h2>}      
        <Grid container spacing={3}>
          {notes.map(note => (
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Note key={note.id} note={note} tags={props.tags} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    notes: state.notes,
    tags: state.tags,
    user: state.user
  };
};

export default connect(
  mapStatetoProps,
  { fetchNotes, fetchTags, fetchUserNotes, fetchUserTags }
)(Notes);
// }
