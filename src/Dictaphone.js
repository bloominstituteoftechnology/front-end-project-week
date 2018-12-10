import React from 'react';
import SpeechRecognition from 'react-speech-recognition';

class Dictaphone extends React.Component {
    render(){
        const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props

        if (!browserSupportsSpeechRecognition) {
            return null 
        }

        return(
            <div>
                <button onClick={resetTranscript}>Reset</button>
                <span>{transcript}</span>
            </div>
        )
    }
}

const options = {
    autoStart: false 
}

export default SpeechRecognition(options)(Dictaphone);