import React, { Component } from 'react';
import SideBar from '../SideBar/SideBar.js';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './OneView.css';
import { Link } from 'react-router-dom';

import axios from 'axios';



class AddedNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      notes: [],
    }
  }

  // display = () => {
  //     this.setState({
  //         display: !this.state.display
  //     })
  // }

  componentDidMount() {
    const id = this.props.match.params.id
    // this.setState(() => ({ id: Number(id), notes: this.props.notes }))

    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((response) => {
        this.setState({ notes: response.data, id: Number(id) })
      })
      .catch(err => console.log(err));


  }

  handleDelete = () => {
    const id = this.state.id
    axios.delete(`${process.env.REACT_APP_API}/${id}`)
      .then(response => {
        this.props.history.push('/')
        this.setState({ notes: response.data, id: null })
        this.props.handleRefresh()
      })
      .catch(err => {
        console.log(err);
      })
  }

  filterNotes = (note) => {
    if (note.id === this.state.id) {
      return (
        <div className='noteView' key={note.id}>
         <SideBar />
          <div className="sideBar_pop noteCard">
            <div className='links'>
              <Link to={`/edit/${note.id}`} style={backgroundstyle} >edit</Link>
              <Link to='/'><h1 onClick={this.handleDelete} className='btn'>delete</h1></Link>
            </div>
            <h1 className='title'>{note.title}</h1>
            <p className='note'>{note.content}</p>
          </div>
        </div>
      )
    }
  }


  render() {
    return (
      <div className='single-note'>
        {this.state.notes.map(this.filterNotes)}
      </div>

      // <div>
      //   {this.state.mounted === false ? (
      //     <div className="links">
      //       <p>Waiting...</p>
      //     </div>
      //   ) : (
      //       <div>
      //         <div className={this.state.display === false ? (
      //           "none"
      //         ) : (
      //             "modal block"
      //           )}>
      //           <div className="modalQuestion">Are you sure you want to delete this?
      //                       </div>

      //           <div className="modalButtons">
      //             <Link to="/" >
      //               <button style={backgroundstyle} onClick={() => {
      //                 this.display();
      //                 this.state.handleDelete(this.state.index)
      //               }}>Delete</button>
      //             </Link>
      //             <button onClick={this.display}>No</button>
      //           </div>
      //         </div>

      //         <div className={this.state.display === false ? (
      //           "block"
      //         ) : (
      //             "modalLayover"
      //           )}>
  //     <div className="noteView">
  //       <SideBar />
  //       <div className="sideBar_pop noteCard">
  //         <div className="links">
  //           <Link to={{
  //             state: {
  //               index: this.state.index
  //             },
  //             pathname: `/edit/${this.state.index}`
  //           }}>
  //             edit
  //                                       </Link>
  //           <button onClick={this.display}>delete</button>
  //         </div>
  //         <h1 className="title">{this.state.notes[this.state.index].title}</h1>
  //         <p className="note">{this.state.notes[this.state.index].notes}</p>
  //       </div>
  //     </div>
  //             </div >
  //           </div >
  //         )
  // }

  //     </div>
  //       )
  // }
    )}
  }

const backgroundstyle = {
  backgroundColor: '#D0011B',
}



export default AddedNote;