import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Note.css'

export default class Navbar extends Component {
  render() {
    return(
      <div className="container">
      <aside className="Navbar">
        <h1 className="title">Lambda <br/> Note</h1>
        <br />
        <div className="field">
          <label className="label">Search</label>
          <div className="control">
            <input className="input" type="text" placeholder="Note Search" />
          </div>
        </div>
        <Link to="/add-note">
        <button className="button is-info is-outlined is-fullwidth">+ Add A Note</button>
        </Link>
      </aside>
      </div>
    )
  }
}
