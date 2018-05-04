// React and Router
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Actions
import { get_notes, query_notes } from '../../actions';

// Styling
import { Form, Input } from 'reactstrap';
import './ListView.css';

class ListView extends Component {
  state = {
    query: '',
  };

  componentDidMount() {
    this.props.get_notes();
  }
  renderNotes = () => {
    const { filtered, notes } = this.props;
    const notesToRender = this.state.query.length > 0 ? filtered : notes;
    return notesToRender.map(note => {
      return (
        <Link
          to={`/notes/${note._id}`}
          key={`${note._id} ${note.title}`}
          className="mx-2 my-3"
        >
          <div className="note p-3">
            <h3>{note.title}</h3>
            <p className="pt-2">
              {note.content.length > 125
                ? `${note.content.slice(0, 125)}…`
                : note.content}
            </p>
          </div>
        </Link>
      );
    });
  };

  render(props) {
    console.log('notes', this.props.notes);
    return (
      <div className="list-view pl-4 pt-5">
        <Form className="search">
          <Input
            type="text"
            placeholder="Search..."
            value={this.state.query}
            onChange={this.handleSearch}
            className="search-input col-4 mr-4"
          />
        </Form>
        <h2 className="my-3 ml-2">Your Notes:</h2>
        <div className="list-view-notes">{this.renderNotes()}</div>
      </div>
    );
  } // end of render()

  handleSearch = event => {
    event.preventDefault();
    this.setState({ query: event.target.value });
    const banan = this.props.query_notes(event.target.value);
    console.log(
      'this.props.filtered',
      this.props.filtered,
      'event',
      event.target.value,
      'state',
      this.state.query,
      banan
    );
  };
} // end of ListView

const mapStateToProps = state => {
  return {
    notes: state.notes,
    filtered: state.filtered,
  };
};

export default connect(mapStateToProps, { get_notes, query_notes })(ListView);
