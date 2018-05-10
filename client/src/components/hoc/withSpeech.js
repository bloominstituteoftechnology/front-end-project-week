import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { startListening, stopListening, addToRegister, clearRegister } from '../../actions/speech'
import Mic from '../Mic'

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
  class WithSpeech extends Component {

    componentDidMount = () => {
      window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      this.recognition = new window.SpeechRecognition()
      this.recognition.interimResults = true
    }

    componentWillUnmount = () => {
      this.recognition.removeEventListener('result', this.accumulateTranscript)
    }

    startListening = () => {
      this.props.startListening()
      this.recognition.addEventListener('result', this.accumulateTranscript)
      this.recognition.start()
    }

    stopListening = () => {
      this.props.stopListening()
      this.recognition.stop()
    }

    accumulateTranscript = e => {
      const transcript = Array.from(e.results)
        .map(head)
        .map(({ transcript }) => transcript)
        .join('')

      if (e.results[0].isFinal)
        // this.props.addToRegister(transcript)
    }

    render() {
      return <Comp {...this.props} />
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(WithSpeech)
}

const Speak = props => {
  const { onSave } = props

  return (
    <div className="Speak">
      <Mic
        startListening={props.startListening}
        stopListening={props.stopListening}
      />
      <button onClick={() => onSave(props.register)}>Looks good?</button>
      <div className="transcript">
        {props.register.map(t => <p key={t}>{t}</p>)}
      </div>
    </div>
  )
}

export default withSpeech(connect(mapStateToProps, mapDispatchToProps)(Speak))
