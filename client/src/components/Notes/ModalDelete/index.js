import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  paper: {
    outline: 'none',
    width: '380px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
  }
});

class ModalDelete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cancel: false,
    };

  }

  handleClose = () => {
    this.setState({ cancel: true });
  };

  render() {

    const { classes } = this.props;

    return (
        <Modal open={this.props.open} onClose={this.handleClose} classes={{ root: classes.modal }}>
          <Paper classes={{ root: classes.paper }}>
            <Typography variant="title">
              Are you sure you want to delete this note?
            </Typography>
            <div className={classes.buttons}>
              <Button onClick={this.props.closeDeleteModal}>
                <Typography>
                  Cancel
                </Typography>
              </Button>

              <Button>
                <Typography>
                  Delete
                </Typography>
              </Button>
            </div>
          </Paper>
        </Modal>
    );
  }
}

export default withStyles(styles)(ModalDelete);
