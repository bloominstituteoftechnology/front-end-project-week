import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      tags: false,
      addTags: false
    };
  }

  componentDidMount() {
    this.props.getNotes();
  }

  searchChangeHandler = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  toggleHover = () => {
    const active = this.state.tags;
    this.setState({ tags: !active });
  };

  onMouseLeave = () => {
    this.setState({ tags: false });
  };

  addTags = () => {
    const active = this.state.addTags;
    this.setState({ addTags: !active });
  };

  render() {

    const filter = this.props.notesReceived ? this.props.notes.filter(note =>
      note.title.toLowerCase().includes(this.state.search.toLowerCase())
    ) : [{title: 'test', content:'test content', _id: '1'}];

    return (
      <div className='notes'>
        <input
          className='notes-search'
          placeholder='Search by Title'
          name='search'
          value={this.state.search}
          onChange={this.searchChangeHandler}
        />
        <div className='notes-box'>
          <ul>
            {filter.map((note, index) => {
              return (
                <li key={note._id} className='note' onClick={() => {
                    this.props.previewNote(note.title, note.content, note._id);
                  }}
                  onMouseOver={this.toggleHover}
                  onMouseOut={this.onMouseLeave}
                >
                  <div className='note-title'>
                    {note.title.length > 20 
                      ? note.title.split('').slice(0, 15).join('') + '...' 
                      : note.title}
                  </div>
                  <div className='note-content'>
                    {note.content.length > 100 
                      ? note.content.split('').slice(0, 100).join('') + '...' 
                      : note.content}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes, 
    notesReceived: state.notesReceived
  };
};

export default connect(mapStateToProps, {getNotes})(Notes);
