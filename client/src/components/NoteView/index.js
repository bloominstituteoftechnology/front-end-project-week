import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import marked from 'marked';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { connect } from 'react-redux';

const styles = {
  paper: {
    margin: '100px auto 0 auto',
    width: '60vw',
    padding: '40px 60px',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    textAlign: 'center',
    fontSize: '36px',
  },
  text: {
    fontSize: '18px',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '80px',
  },
  buttonText: {
    color: 'white',
  },
  navLink: {
    outline: 'none',
    textDecoration: 'none',
    color: 'inherit',
    border: 'none',
  },
  deleteButton: {
    width: '80px',
    borderColor: '#ff1744',
  },
  deleteBtnText: {
    color: '#ff1744',
  }
};


class NoteView extends Component {
  constructor(props) {
    super(props);
  }

  parseMarkdown(md) {
    marked.setOptions({
      gfm: true,
    });
    return marked(md);
  }

  render() {

    const { classes } = this.props;

    const getNote = id => {
      const notes = this.props.notes;
      for (let i in notes) {
        if (notes[i]._id === id) {
          return notes[i];
        }
      }
    }

    const note = getNote(this.props.id);

    return (
      <Paper classes={{ root: classes.paper }}>
        <div className={ classes.buttons }>
          <div style={{ width: '200px', display: 'flex', justifyContent: 'space-between', }}>
            <Button className={ classes.button } color='primary' size='small' variant='outlined'>
              <Typography variant='button' color='primary'>
                Edit
              </Typography>
            </Button>

            <Button className={ classes.deleteButton } color='secondary' size='small' variant='outlined'>
              <Typography variant='button' className={ classes.deleteBtnText }>
                Delete
              </Typography>
            </Button>
          </div>

          <Button className={ classes.button } color='secondary'size='small' variant='outlined'>
            <Typography variant='button' color='secondary'>
              Export
            </Typography>
          </Button>
        </div>
        <Typography variant='h4' classes={{ h4: classes.title }} dangerouslySetInnerHTML={{__html: this.parseMarkdown(note.title) }} />
        <Typography variant='title' classes={{ title: classes.text }} dangerouslySetInnerHTML={{__html: this.parseMarkdown(note.textBody) }} />
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
}

export default connect(mapStateToProps, null)(withStyles(styles)(NoteView));
