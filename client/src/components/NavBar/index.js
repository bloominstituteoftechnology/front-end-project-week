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
import { connect } from 'react-redux';
import { resetNewNote } from '../AddNote/actions/index';
import { resetEditNote } from '../EditNote/actions/index';

const styles = theme => ({
  root: {
    // backgroundColor: '#1e88e5',
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

    const reset = () => {
      this.props.resetNewNote();
      this.props.resetEditNote();
    }

    return (
        <AppBar classes={{ root: classes.root }}>
          <Toolbar classes={{root: classes.toolbarRoot}}>
            <Typography variant='title' classes={{title: classes.title}}>
              Lambda Notes
            </Typography>

            <div className={ classes.tools }>
              <Search />

              <Link to='/Notes/All'>
                <Tooltip title='View Notes'>

                  <IconButton onClick={reset} aria-label='View-Notes' classes={{root: classes.iconButton}}>
                    <Note className={ classes.icon } />
                  </IconButton>
                </Tooltip>
              </Link>

              <Link to='/Notes/New'>
                <Tooltip title='Add Note'>
                  <IconButton onClick={() => this.props.resetNewNote() } aria-label='Add Note' classes={{root: classes.iconButton}}>
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

const mapDispatchToProps = dispatch => {
  return {
    resetNewNote: () => {
      dispatch(resetNewNote());
    },
    resetEditNote: () => {
      dispatch(resetEditNote());
    }
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(NavBar));
