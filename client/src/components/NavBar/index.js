import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Note from '@material-ui/icons/Note';
import NoteAdd from '@material-ui/icons/NoteAdd';
import IconButton from '@material-ui/core/IconButton';
import Search from './Search/index';
import Tooltip from '@material-ui/core/Tooltip';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = theme => ({
  root: {

  },
  toolbarRoot: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    color: 'white',

  },
  icon: {
    color: 'white',
  },
  iconButton: {
    marginLeft: '15px'
  },
  tools: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

class NavBar extends Component {
  render() {

    const { classes } = this.props;

    return (
        <AppBar>
          <Toolbar classes={{root: classes.toolbarRoot}}>
            <Typography variant='title' classes={{title: classes.title}}>
              Lambda Notes
            </Typography>

            <div className={ classes.tools }>
              <Search />

              <Link to='/Notes/All'>
                <Tooltip title='View Notes'>

                  <IconButton aria-label='View-Notes' classes={{root: classes.iconButton}}>
                    <Note className={ classes.icon } />
                  </IconButton>
                </Tooltip>
              </Link>

              <Link to='/Notes/New'>
                <Tooltip title='Add Note'>
                  <IconButton aria-label='Add Note' classes={{root: classes.iconButton}}>
                    <NoteAdd className={ classes.icon } />
                  </IconButton>
                </Tooltip>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
    );
  }
}

export default withStyles(styles)(NavBar);
