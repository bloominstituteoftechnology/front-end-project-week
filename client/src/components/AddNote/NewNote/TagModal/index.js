import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    outline: 'none',
    padding: '20px',
    minHeight: '160px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    textAlign: 'center',
  },
  button: {
    width: '80px',
  },
  buttonText: {
    fontSize: '16px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  }
};

class TagModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      value: '',
    }

    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleCancel() {
    this.props.handleTagClose();
  }

  handleChange(e) {
    this.setState({ value: e.target.value});
  }

  handleClick() {
    this.props.handleAddTag(this.state.value);
    this.props.handleTagClose();
  }

  render() {

    const { classes } = this.props;

    return (
      <Modal open={this.props.open} className={ classes.modal }>
        <Paper className={ classes.paper }>
          <Typography variant='h5' className={ classes.text }>
            Tag
          </Typography>

          <TextField variant='outlined' label='Tag' value={this.state.value} onChange={ this.handleChange } />

          <div className={ classes.buttons }>

            <Button className={ classes.button } onClick={ this.handleCancel }>
              <Typography variant='button' className={ classes.buttonText }>
                Cancel
              </Typography>
            </Button>

            <Button className={ classes.button } >
              <Typography variant='button' className={ classes.buttonText } onClick={ this.handleClick }>
                Add
              </Typography>
            </Button>


          </div>
        </Paper>
      </Modal>
    );
  }
}

export default withStyles(styles)(TagModal);
