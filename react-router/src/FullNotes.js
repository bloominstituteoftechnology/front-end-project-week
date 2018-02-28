import React from 'react'
import NoteAPI from '../api'
import { Link } from 'react-router-dom'

// The FullNotes iterates over all of the notes and creates
// a link to their profile pages.
const FullNotes = () => (
  <div>
    <ul>
      {
        NoteAPI.all().map(p => (
          <li key={p.notes}>
            <Link to={`/lambdanotes/${p.note}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default FullNotes
