import React from 'react';
import { connect } from 'react-redux';

import Note from './Note';

import './css/SortOverview.css';

//Instead of changing pages for each switch, instead, just display different shit based on a state (alphabetically: false) etc

class SortOverview extends React.Component {
  state = {
    sort: 'sort',
    sorted: [],
  };
  render() {
    return (
      <div className="sort">
        {this.state.sort === 'sort' ? (
          <div>
            <h1 className="sort-header"> How Would You Like to Sort? </h1>
            <div>
              <button onClick={this.clickAlphabetically}> Alphabetically by Title </button>
              <button onClick={this.clickChronologically}> Chronologically by Date </button>
            </div>
          </div>
        ) : null}
        {this.state.sort === 'alphabetically' ? (
          <div>
            <h1 className="sort-header"> Alphabetically Sorted by Title</h1>
            <ul className="sorted-notes">
              {this.state.sorted.map(note => {
                const noteObj = {body: note[1], title:note[3]};
                return <Note key={note[2]} note={noteObj} />;
              })}
            </ul>
          </div>
        ) : null}
        {this.state.sort === 'chronologically' ? (
          <h1 className="sort-header"> Chronologically Sorted by Date</h1>
        ) : null}
      </div>
    );
  }
  clickAlphabetically = () => {
    this.setState({ sort: 'alphabetically' });
    this.sortAlphabetically();
  };

  sortAlphabetically = () => {
    let sorted = [];
    console.log('Notes prop:', this.props.notes);
    this.props.notes.map(note => {
      return sorted.push([note.title.toLowerCase(), note.body, note.id, note.title]);
    }, [])
    sorted = sorted.sort();
    console.log('Notes after sort is called: ', sorted)
    this.setState({sorted})
  }

  clickChronologically = () => {
    this.setState({ sort: 'chronologically' });
  };

}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, null)(SortOverview);
