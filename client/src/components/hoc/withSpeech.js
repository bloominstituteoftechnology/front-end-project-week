import React, { Component } from 'react'

const head = arr => arr[0]

// withSpeech :: Required Props: startListening, stopListening, addToRegister (all functions)
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

export default withSpeech