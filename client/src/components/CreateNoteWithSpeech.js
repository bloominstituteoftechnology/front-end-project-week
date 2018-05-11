import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { startListening, stopListening, addToRegister, clearRegister } from '../actions/speech'
import Mic from './Mic'
import withSpeech from './hoc/withSpeech'
import './styles/Speak.css'

const mapStateToProps = ({
  speech: { isListening, register }
}) => ({ isListening, register })

const mapDispatchToProps = {
  startListening,
  stopListening,
  addToRegister,
  clearRegister,
}

const CreateNoteWithSpeech = ({
  isListening,
  register,
  start,
  stop,
  onSave
}) => {
  return (
    <div className="Speak">
      <Mic
        startListening={start}
        stopListening={stop}
      />
      {isListening
        ? null : (
          <button
            onClick={() => onSave(register)}
            className="saveSpeechBtn mainBtn"
          >
            Looks good?
          </button>
        )
      }
      <div className="transcript">
        {register.map(t => <p key={t}>{t}</p>)}
      </div>
    </div>
  )
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withSpeech,
)(CreateNoteWithSpeech)
