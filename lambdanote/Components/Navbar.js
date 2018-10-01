import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Note from './Note'
import './Note.css'

export default class Navbar extends Component {
  render() {
    return(
      <div class="container">
      <aside className="Navbar">
        <h1 className="title">Lambda <br/> Note</h1>
        <br />
        <div class="field">
          <label class="label">Search</label>
          <div class="control">
            <input class="input" type="text" placeholder="Note Search" />
          </div>
        </div>
        <a class="button is-info is-outlined is-fullwidth">+ Add A Note</a>
      </aside>
      </div>
    )
  }
}
