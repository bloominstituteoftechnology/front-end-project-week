import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import NoteCard from '../NoteCard/NoteCard';
import '../NoteView/NoteView.css';

class NoteView extends Component {
  // constructor(props) {
  //   super(props);
  //     this.state = { 
  //       note: null 
  //     );
  // }

  // componentDidMount(){
  //   const id = this.props.params.id;
  //   this.fetchMovie(id);
  // }
    
  // fetchMovie = id => {
  //   this.setState(() => ({ movie: id }));  
  // };

  render() {
    return (
      <div>
        <Link to="/note/edit" className="Noteview-Link" style={{color: 'black'}}>Edit</Link>
      {/* <NoteCard movie={this.state.note}/> */}
        <div className="NoteView-Container">
          <h4 className="NoteView-Header">Note Title</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam iusto maxime dolores at accusamus sapiente, reiciendis labore, et sit consectetur nobis numquam a eaque omnis laudantium nesciunt dolor eos expedita! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis est earum laborum modi voluptates. Fugiat adipisci dolore accusamus enim facilis saepe, sint modi recusandae harum illo molestias ducimus suscipit veritatis.</p>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis est earum laborum modi voluptates. Fugiat adipisci dolore accusamus enim facilis saepe, sint modi recusandae harum illo molestias ducimus suscipit veritatis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis est earum laborum modi voluptates. Fugiat adipisci dolore accusamus enim facilis saepe, sint modi recusandae harum illo molestias ducimus suscipit veritatis.</p>
        </div>
      </div>
    );
  }
}

export default NoteView;