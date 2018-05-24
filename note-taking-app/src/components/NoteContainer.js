import React from 'react';
import { connect } from 'react-redux';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';

import Notes from './Notes';
import AddNoteForm from './AddNoteForm';
import UpdateNoteForm from './UpdateNoteForm';
import Note from './Note';

import { getNotes, getTags, getAuthState } from '../actions';

import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { Persona } from 'office-ui-fabric-react/lib/Persona';

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
    openPanel: false
  }
  componentDidMount = () => {
    this.props.getNotes()
    this.props.getTags()
    this.props.getAuthState()
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
      signInSuccessWithAuthResult: () => false,
    }
  }
  signOut = () => {
    this.hidePanel()
    firebase.auth().signOut()
  }
  render () {
    const { openPanel } = this.state
    const { notesReducer } = this.props
    const { isSignedIn, user } = this.props.userReducer
    return (
      <div style={style.root}>
        { !isSignedIn?
          <PrimaryButton
            iconProps={ { iconName: 'ContactCard' } }
            text='Sign In'
            onClick={this.showPanel}
            style={style.signInButton}
          />
          :
          <div style={style.accountNameDisplay} onClick={this.showPanel}>
            <Persona
              imageUrl={user.photoURL}
            />
          </div>
        }
        { isSignedIn ? 
          <NoteContainerChild {...notesReducer}/>
          :
          <div>Please sign in to view notes</div>
        }
        
        <Panel
          isOpen={ openPanel }
          isLightDismiss={ true }
          headerText={isSignedIn? user.displayName : 'Sign In'}
          onDismiss={ this.hidePanel }
        >
          {!isSignedIn?
            <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()} uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
            :
            <div>
              <DefaultButton
                text='Sign Out'
                onClick={this.signOut}
              />
            </div>
          }
        </Panel>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notesReducer: state.notesReducer,
    userReducer: state.userReducer
  }
}

const style = {
  signInButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  accountNameDisplay: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  root: {
    paddingTop: 55,
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }
}

export default connect(mapStateToProps, { getNotes, getTags, getAuthState })(NoteContainer);