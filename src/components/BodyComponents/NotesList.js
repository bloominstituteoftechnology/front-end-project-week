import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { CSVLink } from 'react-csv';
import Search from '../BodyComponents/Search';
import NoteCard from './NoteCard';

class NotesList extends Component {
  state = {
    filteredNotes: [],
  };

  render() {
    return (
      <Fragment>
        <div
          style={{ textDecoration: 'underline' }}
          className="d-flex justify-content-between"
        >
          <Search search={this.filterTheNotes} />
          <CSVLink
            data={this.props.notes}
            filename={'user_notes_csv'}
            target="_self"
          >
            Download notes as CSV File
          </CSVLink>
        </div>
        <h3 className="mt-5 ml-3">Your Notes:</h3>
        <div className="d-flex flex-wrap justify-content-around">
          {/* <CardColumns> */}
          {console.log(this.state.filteredNotes, 'filteredNotes')}
          {this.state.filteredNotes.map(note => (
            <NoteCard key={note._id} note={note} />
          ))}
          {/* </CardColumns> */}
        </div>
      </Fragment>
    );
  }
  componentDidMount() {
    this.setState({ filteredNotes: this.props.notes });
    // this.filterTheNotes('');
  }

  componentWillReceiveProps(props) {
    if (props.notes && this.state.filteredNotes !== props.notes) {
      this.setState({ filteredNotes: props.notes });
    }
  }

  filterTheNotes = searchFor => {
    const filteredNotes = this.props.notes.filter(
      item =>
        item.title.toLowerCase().includes(searchFor.toLowerCase()) ||
        item.body.toLowerCase().includes(searchFor.toLowerCase())
    );
    this.setState({ filteredNotes });
  };
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps)(NotesList);
