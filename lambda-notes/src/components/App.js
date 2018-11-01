import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  getAllNotes,
  postNote,
  putNote,
  deleteNote,
  addChecked,
  removeChecked,
  deleteAllChecked,
  clearAllChecked,
  checkAll,
  bulkAddNotes,
  removeSelfAdded,
  setSearchParam,
  sortToBeginning,
  addToUndeadArmy,
  removeFromUndeadArmy
} from '../actions'
import { PageContainer } from '../styles/App'
import Sidebar from './Sidebar'
import DisplayAll from './DisplayAll'
import DisplayOne from './DisplayOne'
import Add from './Add'

const mapStateToProps = ({
  notes,
  checked,
  searchParam,
  selfAdded,
  sortedOrder,
  undeadArmy
}) => ({
  notes,
  checked,
  searchParam,
  selfAdded,
  sortedOrder,
  undeadArmy
})

const zombieNote = {
  title: 'Zombie Note',
  text:
    'This is a zombie note. If you delete it it will come back to life within five seconds.'
}

class App extends Component {
  componentDidMount() {
    this.props.getAllNotes()

    // create a zombie card that will keep coming back to life
    // if it is ever deleted

    const keepZombiesAlive = setInterval(() => {
      const { notes, postNote, getAllNotes, undeadArmy, addToUndeadArmy } = this.props
      getAllNotes()

      // const notesIds = notes.map(({ _id }) => _id)
      // console.log(notesIds.length)
      // console.log(undeadArmy.length)


      // if (undeadArmy.length < 5) {
      //   addToUndeadArmy()
      // }

      // const numberOfUndead = 3

      // while (undeadArmy.length < numberOfUndead) {
      //   addToUndeadArmy()
      // }

      // undeadArmy.forEach(soldier => {
      //   if (!notesIds.includes(soldier)) {
      //     removeFromUndeadArmy(soldier)
      //     addToUndeadArmy()
      //   }
      // })


      for (let i = 0; i < notes.length; i++) {
        if (notes[i].title === zombieNote.title) {
          break
        }

        if (i === notes.length - 1) {
          postNote(zombieNote)
        }
      }


    }, 5000)
  }

  render() {
    const {
      notes,
      checked,
      postNote,
      putNote,
      deleteNote,
      addChecked,
      removeChecked,
      deleteAllChecked,
      getAllNotes,
      clearAllChecked,
      checkAll,
      bulkAddNotes,
      removeSelfAdded,
      setSearchParam,
      searchParam,
      selfAdded,
      sortedOrder,
      sortToBeginning,
      addToUndeadArmy,
      removeFromUndeadArmy,
      undeadArmy,
      history
    } = this.props

    return (
      <PageContainer>
        <Sidebar
          deleteAllChecked={deleteAllChecked}
          getAllNotes={getAllNotes}
          clearAllChecked={clearAllChecked}
          checkAll={checkAll}
          bulkAddNotes={bulkAddNotes}
          removeSelfAdded={removeSelfAdded}
          setSearchParam={setSearchParam}
          searchParam={searchParam}
        />

        <Route
          exact
          path="/"
          render={props => (
            <DisplayAll
              {...props}
              history={history}
              notes={notes}
              checked={checked}
              addChecked={addChecked}
              removeChecked={removeChecked}
              searchParam={searchParam}
              selfAdded={selfAdded}
              sortedOrder={sortedOrder}
              sortToBeginning={sortToBeginning}
            />
          )}
        />

        <Route
          path="/note/:id"
          render={props => (
            <DisplayOne
              {...props}
              history={history}
              deleteNote={deleteNote}
              putNote={putNote}
              {...notes.filter(({ _id }) => _id === props.match.params.id)[0]}
            />
          )}
        />

        <Route
          path="/add"
          render={props => (
            <Add {...props} history={history} postNote={postNote} />
          )}
        />
      </PageContainer>
    )
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getAllNotes,
      postNote,
      putNote,
      deleteNote,
      addChecked,
      removeChecked,
      deleteAllChecked,
      clearAllChecked,
      bulkAddNotes,
      removeSelfAdded,
      checkAll,
      setSearchParam,
      sortToBeginning,
      addToUndeadArmy,
      removeFromUndeadArmy
    }
  )(App)
)
