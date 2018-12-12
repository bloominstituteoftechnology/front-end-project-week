import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import marked from 'marked';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { deleteNote } from '../actions/index';
import ModalDelete from './ModalDelete/index';

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
    overflowWrap: 'break-word',
  },
  text: {
    fontSize: '18px',
    overflowWrap: 'break-word',
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

  parseMarkdown(md) {
    marked.setOptions({
      gfm: true,
      breaks: true,
    });
    return marked(md);
  }

  handleDelete() {
    this.props.deleteNote(this.props.id);
  }

  openDeleteModal(id) {
    this.setState({ deleteNote: { modalOpen: true, id }});
  }

  closeDeleteModal() {
    this.setState({ deleteNote: { modalOpen: false, id: '' }});
  }

  handleExport(arr, title = 'Notes') {


    let note = arr.filter(note => note._id === this.props.id);
    title = note[0].title;

    let csvContent = "data:text/csv;charset=utf-8,";
    for (let i in note) {

      let keyArr = Object.keys(arr[i]);

      for (let j in keyArr) {
        csvContent = `${csvContent}\n\r ${keyArr[j]}: ${arr[i][keyArr[j]]}\n\r`
      }

      csvContent = `${csvContent}\n\r----------------------------------\n\r\n\r`;

    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${title}.csv`);

    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "my_data.csv".
    link.remove();

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
            <NavLink to={`/Notes/Edit/${this.props.id}`} className={ classes.navLink }>
              <Button className={ classes.button } color='primary' size='small' variant='outlined'>
                <Typography variant='button' color='primary'>
                  Edit
                </Typography>
              </Button>
            </NavLink>

            <Button className={ classes.deleteButton } onClick={() => this.openDeleteModal(this.props.id)} color='secondary' size='small' variant='outlined'>
              <Typography variant='button' className={ classes.deleteBtnText }>
                Delete
              </Typography>
            </Button>
          </div>

          <Button className={ classes.button } color='secondary'size='small' variant='outlined'>
            <Typography variant='button' color='secondary' onClick={ () => this.handleExport(this.props.notes) }>
              Export
            </Typography>
          </Button>
        </div>
        <Typography variant='h4' classes={{ h4: classes.title }} dangerouslySetInnerHTML={{__html: this.parseMarkdown(note.title) }} />
        <Typography variant='title' classes={{ title: classes.text }} dangerouslySetInnerHTML={{__html: this.parseMarkdown(note.textBody) }} />
        <ModalDelete isDeleting={this.props.isDeleting} handleDelete={this.handleDelete} open={this.state.deleteNote.modalOpen} closeDeleteModal={this.closeDeleteModal} />
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    isDeleting: state.isDeleting,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    deleteNote: id => {
      dispatch(deleteNote(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NoteView));
