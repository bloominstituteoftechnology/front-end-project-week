import React from 'react';
import { connect } from 'react-redux';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';

import Notes from './Notes';
import AddNoteForm from './AddNoteForm';
import UpdateNoteForm from './UpdateNoteForm';
import Note from './Note';

import { getNotes, getTags } from '../actions';

import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel } from 'office-ui-fabric-react/lib/Panel';

const NoteContainerChild = ({ isFetching, isSelecting, isAdding, isUpdating, isDeleting }) => {
  if (!isFetching) {
    if (isAdding) return <AddNoteForm />
    if (isSelecting) return <Note />
    if (isUpdating) return <UpdateNoteForm />
    return <Notes />
  } 
  return 'Loading...'
}

class NoteContainer extends React.Component {
  state = {
    openPanel: false,
    isSignedIn: false
  }
  componentDidMount = () => {
    this.props.getNotes()
    this.props.getTags()
  }
  showPanel = () => {
    this.setState({ openPanel: true })
  }
  hidePanel = () => {
    this.setState({ openPanel: false })
  }

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => {
        this.hidePanel()
        return false
      }
    }
  }
  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => {
          console.log(user)
        }
    );
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  // componentWillUnmount() {
  //   this.unregisterAuthObserver();
  // }
  render () {
    const { openPanel, hidePanel } = this.state
    console.log(this.state)
    return (
      <div style={style.root}>
        {
          !this.state.isSignedIn?
          <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()} uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
          :
          <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
        }
        <NoteContainerChild {...this.props}/>
        
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { notesReducer } = state
  return notesReducer
}

const style = {
  authButton: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  root: {
    paddingTop: 55,
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }
}

export default connect(mapStateToProps, { getNotes, getTags })(NoteContainer);