import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

const styles = {
  root: {
    color: 'white',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '15px',
  },
  title: {
    marginBottom: '15px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  titleField: {
    width: '300px',
    backgroundColor: '#EEEEEE',
  },
  textField: {
    width: '100%',
    backgroundColor: '#EEEEEE',
  },
  titleLabel: {
    textAlign: 'center',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // border: '1px solid black',
    fontSize: '28px',
  },
  buttons: {
    marginTop: '15px',
    flex: '1',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '15px 30px 0 30px',
  },
  button: {
    width: '80px',
  },
  buttonText: {
    // color: 'white',
  },
  navLink: {
    outline: 'none',
    textDecoration: 'none',
    color: 'inherit',
    border: 'none',
  }
}

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      text: this.props.text,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSaveClick() {
    this.props.handleSave(this.state.title, this.state.text, this.props.id);
    this.props.openModal();
  }

  render() {

    const { classes } = this.props;

    return (
      <Paper className={ classes.paper }>
        <form>
          <div className={classes.title}>
            <TextField name='title' value={this.state.title} onChange={this.handleChange} className={classes.titleField} variant='outlined' placeholder='Title' />
            <Typography variant='h4' classes={{ root: classes.titleLabel }}>
              Edit Note
            </Typography>
          </div>
          <TextField name='text' multiline rows='20' rowsMax="20" value={this.state.text} onChange={this.handleChange} className={classes.textField} variant='outlined' placeholder='Content' />
          <div className={classes.buttons}>
            <Button onClick={ this.handleSaveClick } variant='outlined' size='small' color='primary' className={ classes.button }>
              <Typography color='primary' variant='button' className={ classes.buttonText }>
                Save
              </Typography>
            </Button>

            <NavLink className={ classes.navLink } to={`/Notes/Edit/Preview/${this.props.id}`}>
              <Button onClick={ () => { this.props.handlePreview(this.state.title, this.state.text, this.props.id) }} size='small' variant='outlined' color='secondary' className={ classes.button }>
                <Typography color='secondary' variant='button' className={ classes.buttonText }>
                  Preview
                </Typography>
              </Button>
            </NavLink>
          </div>
        </form>
      </Paper>
    );
  }
}

export default withStyles(styles)(Note);
