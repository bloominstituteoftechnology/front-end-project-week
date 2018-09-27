import React, { Component } from 'react';

import Note from './Note';
// import { Route } from 'react-router-dom'

let pages = 0
var divs = []
let i = 0
var pages_length = []
let filteredNoteList= ''
let page_numbers = []

class NoteList extends Component {

  render() {
    divs = []

    filteredNoteList = this.props.noteList

    pages = parseInt((
      this.props.noteList.filter(item => filteredNoteList).length-1)
      /9)+1


      pages_length = Array.from(Array(pages).keys())
      page_numbers = pages_length.map(item => `page${item}`)
      ;

    return this.props
    ?
    (
      <div className="note-list">
          {
            page_numbers.map((item, index) => {
              return (<div className={`note-page ${this.props.active === item ? "active" : ""}`} id={item}>
                {filteredNoteList.slice((index*9),(index+1)*9)
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
