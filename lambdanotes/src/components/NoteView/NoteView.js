import React, { Component } from 'react'
import './index.css';
import DeleteNote from '../DeleteNote/DeleteNote';

export default class NoteView extends Component {
  
  render() {
    return (
      <div>
        <div className="top-content float-right">
          <button type="button" class="btn btn-link">Edit</button>
          <button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModal">Delete</button>
        </div>
        <DeleteNote />
        <h3 className='content-container'>View Note</h3>
        <p className='notesList'>afkjla;sj afal;fjkasdfaijf ias;fjk;asfj a ja;lfdkasldfjasldkfjalshfdaklsdfhalskhdfaskljdfhaskdfjahkj ahldjkfhaskjdfhalskdfhalskjdfhalksjdfhasjkdfhaslkjdfhaslkjdfhas</p>
      </div>
    )
  }
}
