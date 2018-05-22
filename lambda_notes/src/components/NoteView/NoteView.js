import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteCard from '../NoteCard/NoteCard';

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      note: null 
    };
  }

  componentDidMount(){
    const id = this.props.params.id;
    this.fetchMovie(id);
  }

  fetchMovie = id => {
    this.setState(() => ({ movie: id }));  
  };

  render() {
    return (
      <div>
        <Link>Edit</Link>
        <Link>Delete</Link>
      {/* <NoteCard movie={this.state.note}/> */}
      </div>
    );
  }
}

export default NoteView;