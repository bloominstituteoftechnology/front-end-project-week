import React, { Component } from 'react';
import styled from 'styled-components';

const modalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  max-width: 100%;
`

class LambdaDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.handleSelectNote(id);
    }

    deleteNote = () => {
        this.props.handleDeleteNote(this.props.match.params.id)
    }

    render() {
        return (
            <modalStyle>
                <h2>Are you sure you want to delete this?</h2>
                <button onClick={this.deleteNote}>Yes</button>
                <button>No</button>
            </modalStyle>
        )
    }
}

export default LambdaDelete;