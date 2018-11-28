import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {

  },
  title: {
    color: 'white'
  }
}

class NavBar extends Component {
  render() {

    const { classes } = this.props;

    return (
      <AppBar>
        <Toolbar>
          <Typography variant='title' classes={{title: classes.title}}>
            Lambda Notes
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavBar);
