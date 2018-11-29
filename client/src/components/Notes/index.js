import React, { Component } from 'react';
import Note from './Note/index';
import { getAllNotes } from '../actions/index';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import ModalDelete from './ModalDelete/index';

const styles = {
  notes: {
    display: 'flex',
    margin: '100px auto 0px auto',
    width: '90vw',
    maxWidth: '1400px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // border: '1px solid black',
  },
  progress: {
    marginTop: '150px'
  },
}


class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notesAreLoading: true,
      deleteNote: {
        modalOpen: false,
        delete: false,
        id: '',
      }
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);

  }

  handleDelete(id) {
    this.setState({ deleteNote: { modalOpen: true, id }});
  }

  openDeleteModal(id) {
    this.setState({ deleteNote: { modalOpen: true, id }});
  }

  closeDeleteModal() {
    this.setState({ deleteNote: { modalOpen: false, id: '' }});
  }

  componentDidMount() {
    this.props.getAllNotes()
    setTimeout(() =>{
      this.setState({ notesAreLoading: false });

    }, 1000);
  }

  render() {

    const { classes } = this.props;

    const notes = [...this.props.notes];
    const loadNotes = () => {

      if (this.props.notes.length > 0 && this.props.isFetching === false && this.state.notesAreLoading === false) {
        return notes.map( (note, i) => <Note handleDelete={this.handleDelete} openDeleteModal={this.openDeleteModal} key={note._id} id={note._id} title={note.title} text={note.textBody}/>);
      } else {
        return <CircularProgress size={100} thickness={2.0} className={classes.progress} />
      }
    }

    return (
      <div style={styles.notes}>
        {loadNotes()}
        <ModalDelete open={this.state.deleteNote.modalOpen} closeDeleteModal={this.closeDeleteModal} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    notes: state.notes
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getAllNotes: () => {
      dispatch(getAllNotes())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Notes));
