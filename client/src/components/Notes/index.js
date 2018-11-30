import React, { Component } from 'react';
import Note from './Note/index';
import { getAllNotes, deleteNote } from '../actions/index';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import ModalDelete from './ModalDelete/index';
import Options from './Options/index';
import { setSortedNotes } from './actions/index';

const styles = {
  container: {
    margin: '100px auto 0px auto',
    // border: '1px solid black',
    width: '90vw',
    maxWidth: '1920px',
    display: 'flex',
  },
  notes: {
    display: 'flex',
    flex: '1',
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
      },
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
    this.handleExport = this.handleExport.bind(this);
  }

  handleDelete() {
    this.props.deleteNote(this.state.deleteNote.id);
  }

  openDeleteModal(id) {
    this.setState({ deleteNote: { modalOpen: true, id }});
  }

  closeDeleteModal() {
    this.setState({ deleteNote: { modalOpen: false, id: '' }});
  }

  handleExport(arr, title = 'Notes') {

    // console.log(arr)

    let csvContent = "data:text/csv;charset=utf-8,";
    for (let i in arr) {
      // console.log(csvContent);

      let keyArr = Object.keys(arr[i]);
      for (let j in keyArr) {
        csvContent = `${csvContent}\n\r ${keyArr[j]}: ${arr[i][keyArr[j]]}\n\r`
        //let s = `${csvContent}${keyArr[j]}:${arr[i].keyArr[j]}`;
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

  componentDidMount() {
    this.props.getAllNotes()
    setTimeout(() =>{
      this.setState({ notesAreLoading: false });

    }, 1000);
  }

  render() {


    const { classes } = this.props;

    const notes = [...this.props.notes];
    var sortedNotes = [];
    const loadNotes = () => {

      if (this.props.notes.length > 0 && this.props.isFetching === false && this.state.notesAreLoading === false) {

        if (this.props.sortNotes.newest) {

          sortedNotes = notes.reverse();

        } else if (this.props.sortNotes.alpha.sort) {

          sortedNotes = [];
          if (this.props.sortNotes.alpha.dir === 'A-Z') {
            sortedNotes = notes.sort((a, b) => {
              const titleA = a.title.toUpperCase();
              const titleB = b.title.toUpperCase();

              return titleA > titleB ? 1 : -1
            });
          } else if (this.props.sortNotes.alpha.dir === 'Z-A') {
            sortedNotes = notes.sort((a, b) => {
              const titleA = a.title.toUpperCase();
              const titleB = b.title.toUpperCase();

              return titleA > titleB ? -1 : 1
            });
          }
        } else if (this.props.sortNotes.title.sort) {

          if (this.props.sortNotes.title.dir === 'Ascend') {
            sortedNotes = notes.sort((a, b) => {

              const titleA = a.title.length;
              const titleB = b.title.length;

              return titleA > titleB ? 1 : -1
            });
          } else if (this.props.sortNotes.title.dir === 'Descend') {
            sortedNotes = notes.sort((a, b) => {

              const titleA = a.title.length;
              const titleB = b.title.length;

              return titleA > titleB ? -1 : 1
            });
          }
        } else if (this.props.sortNotes.text.sort) {

          if (this.props.sortNotes.text.dir === 'Ascend') {
            sortedNotes = notes.sort((a, b) => {

              const titleA = a.textBody.length;
              const titleB = b.textBody.length;

              return titleA > titleB ? 1 : -1
            });
          } else if (this.props.sortNotes.text.dir === 'Descend') {
            sortedNotes = notes.sort((a, b) => {

              const titleA = a.textBody.length;
              const titleB = b.textBody.length;

              return titleA > titleB ? -1 : 1
            });
          }

        } else {
          sortedNotes = notes;
        }
        sortedNotes = sortedNotes.filter( note => note.textBody.length > this.props.textLength );
        return sortedNotes.map( (note, i) => <Note handleDelete={this.handleDelete} openDeleteModal={this.openDeleteModal} key={note._id} id={note._id} title={note.title} text={note.textBody} note={ note } handleExport={ this.handleExport } />);
      } else {
        return <CircularProgress size={100} thickness={2.0} className={classes.progress} />
      }
    }

    return (
      <div style={ styles.container }>
        <Options exportCsv={ this.handleExport } notes={ notes } />
        <div style={styles.notes}>
          {loadNotes()}
          <ModalDelete isDeleting={this.props.isDeleting} handleDelete={this.handleDelete} open={this.state.deleteNote.modalOpen} closeDeleteModal={this.closeDeleteModal} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    notes: state.notes,
    isDeleting: state.isDeleting,
    sortNotes: state.sortNotes,
    textLength: state.filterNotes.textLength,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getAllNotes: () => {
      dispatch(getAllNotes());
    },
    deleteNote: id => {
      dispatch(deleteNote(id));
    },
    setSortedNotes: notes => {
      dispatch(setSortedNotes(notes));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Notes));
