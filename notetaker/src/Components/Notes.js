import React from 'react';

const Notes = props => {
  return(
    <div>
      {props.fetchingFriends ? <p>Fetching Notes...</p> : null }
      <ul>
        {props.notes.map(note => {
          return (
            <li>
              {note.title}: EMAIL: {note.content}, ID: {note.id}
              {/* <button onClick={() => props.deleteFriend(friend.id)}>Delete</button> */}
            </li>
          )
        })}           
      </ul>
    </div>
    )
}

export default Notes;