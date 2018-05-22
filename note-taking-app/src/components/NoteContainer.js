import React from 'react';
import { connect } from 'react-redux';

import Notes from './Notes';
import AddNoteForm from './AddNoteForm';
import UpdateNoteForm from './UpdateNoteForm';
import Note from './Note';

import { getNotes, getTags } from '../actions';

import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import FirebaseAuthentication from './FirebaseAuthentication';

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
  }
  showPanel = () => {
    this.setState({ openPanel: true })
  }
  hidePanel = () => {
    this.setState({ openPanel: false })
  }
  render () {
    const { openPanel } = this.state
    return (
      <div style={style.root}>
        <DefaultButton
          iconProps={ { iconName: 'ContactCard' } }
          text='Log In'
          onClick={this.showPanel}
          style={style.authButton}
        />
        <NoteContainerChild {...this.props}/>
        <Panel
          isOpen={ openPanel }
          isLightDismiss={ true }
          headerText='Sign In'
          onDismiss={ this.hidePanel }
        >
          <FirebaseAuthentication />
        </Panel>
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