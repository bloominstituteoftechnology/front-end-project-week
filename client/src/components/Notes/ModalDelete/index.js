import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link, NavLink } from 'react-router-dom';

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

  },
  navLink: {
    textDecoration: 'none',
  }

});

class ModalDelete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      delete: false,
      cancel: false,
      loading: true,
    };

    this.handleDeleteClick = this.handleDeleteClick.bind(this);

  }

  handleCancel = () => {
    this.setState({ cancel: true });
  };

  handleDeleteClick() {
    this.setState({ delete: true });
    this.props.handleDelete();
  }

  render() {

    const { classes } = this.props;

    const modalContent = () => {
      if (this.state.delete === false) {
        return (
          <div className={ classes.modalCtr }>
            <Typography variant="title" classes={{title: classes.modalText}}>
              Are you sure you want to delete this note?
            </Typography>
            <div className={classes.buttons}>
              <Button onClick={this.props.closeDeleteModal}>
                <Typography>
                  Cancel
                </Typography>
              </Button>

              <Button onClick={this.handleDeleteClick}>
                <Typography>
                  Delete
                </Typography>
              </Button>
            </div>
          </div>
        );
      } else {
        if (this.props.isDeleting) {
          setTimeout(() => {
            this.setState({ loading: false });
          }, 1000);
        } else if (!this.props.isDeleting) {
          const handleClose = () => {
            this.props.closeDeleteModal();
            window.location.reload();
          }
          if (this.state.loading) {
            return <CircularProgress size={40} thickness={3.0} className={classes.progress} />;
          }
          return (
            <div className={ classes.modalCtr }>
              <Typography variant="title" classes={{title: classes.modalText}}>
                Note successfully deleted!
              </Typography>
              <div className={classes.closeButton}>
                <Link to='/Notes/All' className={ classes.navLink }>
                <Button onClick={() => this.props.closeDeleteModal(this.state.cancel) }>
                  <Typography>
                    Close
                  </Typography>
                </Button>
                </Link>
              </div>
            </div>
          );
        }
      }
    }


    return (
        <Modal open={this.props.open} onClose={this.handleClose} classes={{ root: classes.modal }}>
          <Paper classes={{ root: classes.paper }}>
            {modalContent()}
          </Paper>
        </Modal>
    );
  }
}

export default withStyles(styles)(ModalDelete);
