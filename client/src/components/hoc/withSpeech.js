import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { startListening, stopListening, addToRegister, clearRegister } from '../../actions/speech'
import Mic from '../Mic'
import '../styles/Speak.css'

const head = arr => arr[0]

const mapStateToProps = ({
  speech: { isListening, register }
}) => ({ isListening, register })

const mapDispatchToProps = {
  startListening,
  stopListening,
  addToRegister,
  clearRegister,
}

const withSpeech = Comp => {
  return class WithSpeech extends Component {
    componentDidMount = () => {
      window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      this.recognition = new window.SpeechRecognition()
      this.recognition.interimResults = true
    }

    componentWillUnmount = () => {
      this.recognition.removeEventListener('result', this.accumulateTranscript)
    }

    start = () => {
      this.props.startListening()
      this.recognition.addEventListener('result', this.accumulateTranscript)
      this.recognition.start()
    }

    stop = () => {
      this.props.stopListening()
      this.recognition.stop()
    }

    accumulateTranscript = e => {
      const transcript = Array.from(e.results)
        .map(head)
        .map(({ transcript }) => transcript)
        .join('')

      if (head(e.results).isFinal)
        this.props.addToRegister(transcript)
    }

    render() {
      return <Comp
        {...this.props}
        start={this.start}
        stop={this.stop}
      />
    }
  }
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
