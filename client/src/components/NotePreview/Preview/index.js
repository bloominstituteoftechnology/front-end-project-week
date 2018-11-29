import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  paper: {
    margin: '100px auto 0 auto',
    width: '60vw',
    padding: '15px',
  },
  title: {
    textAlign: 'center',
  }
};

class NotePreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { classes } = this.props;


    return (
      <Paper classes={{ root: classes.paper }}>
        <Typography variant='h4' classes={{ h4: classes.title }}>
          {this.props.note.title}
        </Typography>
      </Paper>
    );
  }
}

export default withStyles(styles)(NotePreview);
