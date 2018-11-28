import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

class NotePreview extends Component {
  render() {
    return (
      <Paper>
        <Typography>
        </Typography>
      </Paper>
    );
  }
}

export default withStyles(styles)(NotePreview);
