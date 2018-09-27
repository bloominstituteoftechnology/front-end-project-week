import React, { Component } from 'react';

import Note from './Note';
// import { Route } from 'react-router-dom'

let pages = 0
var divs = []
let i = 0
var whatevs = []
let filteredNoteList= ''

class NoteList extends Component {



  render() {
    divs = []
    filteredNoteList = this.props.noteList.filter(item =>
      (JSON.stringify(item.title)+JSON.stringify(item.textBody))
      .toLowerCase().includes(this.props.filter.toLowerCase()))
    pages =
    parseInt((
      this.props.noteList.filter(item =>
        (JSON.stringify(item.title)+JSON.stringify(item.textBody))
        .toLowerCase().includes(this.props.filter.toLowerCase())).length-1
      )/9)+1
      console.log(pages);
      whatevs = Array.from(Array(pages).keys())
      console.log('whatevs:', whatevs);
      console.log('props:', this.props);
      console.log('FilteredNoteList:', filteredNoteList);
    // for(i=0; i<pages; i++){
    //   // divs.includes(`<div className="note-list" id="page${i}">`) ? '' :
    //   divs.push(`<div className="note-list" id="page${i}">`)
    // }
    console.log(divs);
    // console.log('NoteList Component came first:', this.props.noteList);
    return this.props
    ?
    (
      <div className="note-list">

          {
            whatevs.map(item => {
              return (<div className="note-list" id={`page${item}`}>{filteredNoteList.slice((item*9),(item+1)*9)
              .map(note => {
                return (
                  <Note
                    match={this.props.match}
                    note={note}
                    key={note._id}
                  />
                );
              })
            }</div>)
            })
        }
      </div>
    )
    : (<h2>API Error...</h2>)
  }
}

export default NoteList;
