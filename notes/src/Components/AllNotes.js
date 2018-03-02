import React, { Component } from 'react';
import './allNotes.css';
class AllNotes extends Component {
  render() {
  return(
    <div className="Notes" >
      
        <h1> Your Notes </h1>
        <div>
        <ul>
          {this.props.notes.map(notes => {
            return (

              <li className="note-container" key={notes.id}>
                <h3>  {notes.name} </h3>
                <hr /> <p>{notes.data}</p>
              </li>
            )
          })}
        </ul>
      </div>
      </div>
  )
}
}
/* render() {
  return (
      <div className="Notes">
        <h1>Your Notes:</h1>
          <div>
              <ul>
                  {this.props.notes.map(notes => {
                      return (
                          <li className="note-container-list" key={notes.id}>
                              <h4>{notes.title}</h4> <hr/> <p>{notes.text}</p>
                          </li>
                      )
                  })}
              </ul>
          </div>
      </div>
     */
export default AllNotes;