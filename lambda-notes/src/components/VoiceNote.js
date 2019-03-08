import React, { Component } from 'react';
import Recorder from 'react-mp3-recorder';
import ReactAudioPlayer from 'react-audio-player';
import blobToBuffer from 'blob-to-buffer';
import axios from 'axios';
import styled from 'styled-components';

import { HomeContainer } from './Home'

const Button = styled.div`
    color: white;
    background-color: #16ccc9;
    width: 85%;
    height: 60px;
    font-size: 22px;
    border: 1px solid #8e8b8b;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
    margin-bottom: 30px;
    cursor: pointer;
    &:hover {
    color: #16ccc9;
    background-color: white;
    border: 1px solid #16ccc9
}
`

export default class VoiceNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: ''
        }
    }
    

    onRecordingComplete = (blob) => {
        blobToBuffer(blob, (err) => {
        if (err) {
            console.error(err)
            return
        }

        console.log('recording', blob)

        if (this.state.url) {
            window.URL.revokeObjectURL(this.state.url)
        }

        this.setState({
            url: window.URL.createObjectURL(blob)
        })
        })
    }

    onRecordingError = (err) => {
        console.log('error recording', err)

        if (this.state.url) {
        window.URL.revokeObjectURL(this.state.url)
        }

        this.setState({ url: null })
    }

    transcriptVoice = () => {
        const config = {
            method: 'POST',
            url: 'https://api.rev.ai/revspeech/v1beta/jobs',
            headers: {
                'Authorization': 'Bearer 02duCfEL0hN8eLXPqrm0FxMi3yW4SwvsI3DgFvpy3fvQojblbsJ0v30iT15sHUFEUu72wNI9VG0xUOa5w9qsO9cf_WbMk',
                'Content-Type': 'multipart/form-data',
            },
            media: this.state.url,            
        }
        axios(config).then(response => console.log(response));
    }

    render () {
        const {
        url
        } = this.state
        console.log(url)
        return (
        <HomeContainer>
            <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                minHeight: '100vh'
            }}
            >
            <div>
                <Recorder
                onRecordingComplete={this.onRecordingComplete}
                onRecordingError={this.onRecordingError}
                style={{
                    margin: '0 auto'
                }}
                />

                <p>
                Click and hold to start recording.
                </p>

                {url && (
                <div>
                    <ReactAudioPlayer
                    src={url}
                    controls
                    style={{
                        minWidth: '500px'
                    }}
                    />
                    <Button onClick={this.transcriptVoice}>Transcript!</Button>
                </div>
                )}
            </div>
            </div>
        </HomeContainer>
        )
    }    
}