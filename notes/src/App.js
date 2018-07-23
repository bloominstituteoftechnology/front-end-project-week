import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Grid } from 'react-bootstrap'
import Sidebar from './components/Sidebar'
import AddNote from './components/AddNote'
import ViewNotes from './components/ViewNotes'
import ViewNote from './components/ViewNote'
import EditNote from './components/EditNote'
import DeleteNote from './components/DeleteNote'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Sidebar />
        <Grid>
          <Route path="/view/:id" component={ViewNote} />
          <Route path="/edit/:id" component={EditNote} />
          <Route path="/delete/:id" component={DeleteNote} />
          <Route path="/add" component={AddNote} />
          <Route exact path="/view" component={ViewNotes} />
        </Grid>
      </Fragment>
    </Router>
  )
}

export default App
