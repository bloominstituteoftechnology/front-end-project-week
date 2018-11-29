import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import marked from 'marked';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

const styles = {
  paper: {
    margin: '100px auto 0 auto',
    width: '60vw',
    padding: '40px 60px',
    display: 'block',
  },
  title: {
    textAlign: 'center',
    fontSize: '36px',
    overflowWrap: 'break-word',
  },
  text: {
    fontSize: '18px',
    overflowWrap: 'break-word',
  },
  button: {
    width: '80px',
  },
  buttonText: {
    //color: 'black',
  },
  navLink: {
    outline: 'none',
    textDecoration: 'none',
    color: 'inherit',
    border: 'none',
  }
};

class NotePreview extends Component {
  constructor(props) {
    super(props);
  }

  parseMarkdown(md) {
    marked.setOptions({
      gfm: true,
    });
    return marked(md);
  }

  componentDidMount() {

  }

  render() {
    // console.log(this.props)
    const { classes } = this.props;

    return (
      <Paper classes={{ root: classes.paper }}>
        <NavLink to={this.props.prevRoute} className={ classes.navLink }>
          <Button color='primary' variant='outlined' size='small' className={ classes.button }>
            <Typography color='primary' className={ classes.buttonText }>
              Back
            </Typography>
          </Button>
        </NavLink>
        <Typography variant='h4' classes={{ h4: classes.title }} dangerouslySetInnerHTML={{__html: this.parseMarkdown(this.props.note.title) }} />
        <Typography variant='title' classes={{ title: classes.text }} dangerouslySetInnerHTML={{__html: this.parseMarkdown(this.props.note.text) }} />
      </Paper>
    );
  }
}

export default withStyles(styles)(NotePreview);
