import React from 'react';
import { connect } from 'react-redux';

import Note from './Note';

import { remove_edit } from '../actions/index';

import './css/SortOverview.css';

class SortOverview extends React.Component {
  state = {
    sort: 'sort',
    reverse: false,
    sorted: [],
  };
  render() {
    return (
      <div className="sort">
        {this.state.sort === 'sort' ? (
          <div>
            <h1 className="sort-header"> How Would You Like to Sort? </h1>
            <div>
              <button className="sort-buttons" onClick={this.clickAlphabetically}>
                Alphabetically by Title
              </button>
              <button className="sort-buttons" onClick={this.clickRevAlphabetically}>
                Reverse Alphabetically by Title
              </button>
              <button className="sort-buttons" onClick={this.clickChronologically}>
                Chronologically by Date
              </button>
              <button className="sort-buttons" onClick={this.clickRevChronologically}>
                Reverse Chronologically by Date
              </button>
            </div>
          </div>
        ) : null}
        {this.state.sort === 'alphabetically' ? (
          <div>
            {this.state.reverse ? (
              <h1 className="sort-header"> Reverse Alphabetically Sorted by Title</h1>
            ) : (
              <h1 className="sort-header"> Alphabetically Sorted by Title</h1>
            )}
            <ul className="sorted-notes">
              {this.state.sorted.map(note => {
                const noteObj = { body: note[1], title: note[3], dateString: note[4] };
                return <Note key={note[2]} note={noteObj} />;
              })}
            </ul>
          </div>
        ) : null}
        {this.state.sort === 'chronologically' ? (
          <div>
            <h1 className="sort-header"> Chronologically Sorted by Date</h1>
            <ul className="sorted-notes">
              {this.state.sorted.map(note => {
                const noteObj = { body: note[2], title: note[1], dateString: note[4] };
                return <Note key={note[3]} note={noteObj} />;
              })}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }

  clickAlphabetically = () => {
    this.setState({ sort: 'alphabetically', reverse: false });
    let sorted = [];
    this.props.notes.map(note => {
      return sorted.push([
        note.title.toLowerCase(),
        note.body,
        note.id,
        note.title,
        note.dateString,
      ]);
    }, []);
    sorted = sorted.sort();
    this.setState({ sorted });
    this.props.remove_edit();
  };

  clickChronologically = () => {
    this.setState({ sort: 'chronologically', reverse: false });
    let sorted = [];
    this.props.notes.map(note => {
      return sorted.push([note.date, note.title, note.body, note.id, note.dateString]);
    }, []);
    sorted = sorted.sort();
    this.setState({ sorted });
    this.props.remove_edit();
  };

  clickRevAlphabetically = () => {
    this.setState({ sort: 'alphabetically', reverse: true });
    let sorted = [];
    this.props.notes.map(note => {
      return sorted.push([
        note.title.toLowerCase(),
        note.body,
        note.id,
        note.title,
        note.dateString,
      ]);
    }, []);
    sorted = sorted.sort();
    sorted = sorted.reverse();
    this.setState({ sorted });
    this.props.remove_edit();
  };

  clickRevChronologically = () => {
    this.setState({ sort: 'chronologically', reverse: true });
    let sorted = [];
    this.props.notes.map(note => {
      return sorted.push([note.date, note.title, note.body, note.id, note.dateString]);
    }, []);
    sorted = sorted.sort();
    sorted = sorted.reverse();
    this.setState({ sorted });
    this.props.remove_edit();
  };
}

const mapStateToProps = state => {
  return {
    notes: state.currentUserNotes,
  };
};

export default connect(mapStateToProps, { remove_edit })(SortOverview);
