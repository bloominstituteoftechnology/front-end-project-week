import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
  },
  textField: {
    width: '100%',
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
    width: '100px',
  },
  buttonText: {
    color: 'white',
  }

}

class NewNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      text: '',
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {

    const { classes } = this.props;

    return (
      <Paper className={ classes.paper }>
        <form>
          <div className={classes.title}>
            <TextField name='title' value={this.state.title} onChange={this.handleChange} className={classes.titleField} variant='outlined' placeholder='Title' />
            <Typography variant='h4' classes={{ root: classes.titleLabel }}>
              Add Note
            </Typography>
          </div>
          <TextField name='text' multiline rows='20' rowsMax="20" value={this.state.text} onChange={this.handleChange} className={classes.textField} variant='outlined' placeholder='Content' />
          <div className={classes.buttons}>
            <Button variant='contained' color='primary' className={ classes.button }>
              <Typography variant='button' className={ classes.buttonText }>
                Save
              </Typography>
            </Button>

            <Button variant='contained' color='secondary' className={ classes.button }>
              <Typography variant='button' className={ classes.buttonText }>
                Preview
              </Typography>
            </Button>
          </div>
        </form>
      </Paper>
    );
  }
}

export default withStyles(styles)(NewNote);
