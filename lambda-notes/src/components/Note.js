import React, {Component} from 'react';
import styled from 'styled-components';

const NoteDisplay = styled.div`

    max-width: 200px;
    width: 100%;
    margin: 10px;


`

class Note extends Component {
    
    render() {

        return ( 
            <NoteDisplay>
                <h1>{this.props.title}</h1>
                <div>
                    <p>{this.props.content}</p>
                </div>
            </NoteDisplay>
         );
    }
}
 
export default Note;