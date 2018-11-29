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
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
  },
  modalCtr: {
    // border: '1px solid black',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  closeButton: {
    display: 'flex',
    justifyContent: 'center',
  },
  modalText: {
    textAlign: 'center',
  },
  progress: {

  }

});

class ModalAdd extends Component {
  constructor(props) {
    super(props);

    this.handleCloseClick = this.handleCloseClick.bind(this);

  }

  handleCloseClick() {
    this.props.closeModal();
  }

  render() {

    const { classes } = this.props;

    return (
        <Modal open={this.props.open} classes={{ root: classes.modal }}>
          <Paper classes={{ root: classes.paper }}>
            <div className={ classes.modalCtr }>
              <Typography variant="title" classes={{title: classes.modalText}}>
                Note saved successfully!
              </Typography>
              <div className={classes.closeButton}>
                <Button onClick={ this.handleCloseClick }>
                  <Typography>
                    Close
                  </Typography>
                </Button>
              </div>
            </div>
          </Paper>
        </Modal>
    );
  }
}

export default withStyles(styles)(ModalAdd);
