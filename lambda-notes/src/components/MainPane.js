import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import NoteGrid from './NoteGrid';
import notes from '../dummydata';
export default class MainPane extends Component {
  render() {
    return (
      <main>
        <Route path="/" exact render={routeProps => <NoteGrid {...routeProps} notes={notes} /> }/>
        <Route path="/add" />
        <Route path="/view/:id" />
        <Route path ="/edit/:id" />
      </main>
    )
  }
}
