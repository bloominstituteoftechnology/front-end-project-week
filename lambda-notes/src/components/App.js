import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  getAllNotes,
  getNoteById,
  postNote,
  putNote,
  deleteNote
} from '../actions'
import { PageContainer } from '../styles/App'
import Sidebar from './Sidebar'
import DisplayAll from './DisplayAll'
import DisplayOne from './DisplayOne'
import Add from './Add'

const mapStateToProps = ({ notes }) => ({ notes })

class App extends Component {
  state = {
    pageToDisplay: 'all'
  }

  componentDidMount() {
    this.props.getAllNotes()
  }

  changeDisplayedPage = page => {
    this.setState({ pageToDisplay: page })
  }

  render() {
    const { pageToDisplay } = this.state
    const { notes, postNote, putNote, deleteNote } = this.props
    const { changeDisplayedPage } = this

    console.log(notes)

    return (
      <PageContainer>
        <Sidebar changeDisplayedPage={changeDisplayedPage} />

        <Route
          exact
          path="/"
          render={props => (
            <DisplayAll
              {...props}
              notes={notes}
              deleteNote={deleteNote}
              changeDisplayedPage={changeDisplayedPage}
            />
          )}
        />

        <Route
          path="/note/:id"
          render={props => (
            <DisplayOne
              {...props}
              deleteNote={deleteNote}
              putNote={putNote}
              changeDisplayedPage={changeDisplayedPage}
            {...notes.filter(({ _id }) => _id === props.match.params.id)[0]}
              
            />
          )}
        />

        <Route
          path="/add"
          render={props => <Add {...props} postNote={postNote} />}
        />
      </PageContainer>
    )
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { getAllNotes, getNoteById, postNote, putNote, deleteNote }
  )(App)
)

// {pageToDisplay === 'all' && (
//           <DisplayAll
//             notes={notes}
//             deleteNote={deleteNote}
//             changeDisplayedPage={changeDisplayedPage}
//           />
//         )}

//         {pageToDisplay.length > 20 && (
//           <DisplayOne
//             deleteNote={deleteNote}
//             putNote={putNote}
//             changeDisplayedPage={changeDisplayedPage}
//             {...notes.filter(({ _id }) => _id === pageToDisplay)[0]}
//           />
//         )}

//         {pageToDisplay === 'create' && <Add postNote={postNote} />}


// {...notes.filter(({ _id }) => true)[0]}