import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Note extends React.Component {

    render() {
        return (
            <ANote onClick={()=>this.props.history.push(`/myNotes/${this.props.note._id}`)}>
                <h2>{this.props.note.title}</h2>
                {this.props.note.textBody.length > 150 ?
                <p>{this.props.note.textBody.slice(0,150)} . . . </p>
                :
                <p>{this.props.note.textBody}</p>
                
                }
            </ANote>
        )
    }
}

const ANote = styled.div`
    width: 200px;
    height: 200px;
    background: #29B7BC;
    margin: 10px;
    border: 2px solid teal;
    padding: 10px 20px;

    h2 {
        border-bottom: 2px solid teal;
        margin: 0;
    }
`

export default Note;