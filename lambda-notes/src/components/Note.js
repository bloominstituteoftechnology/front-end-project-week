import React, {Component} from 'react';
import styled from 'styled-components';

const NoteView = styled.div`

    max-width: 200px;
    width: 100%;
    margin: 10px;


`

class Note extends Component {
    
    render() {

        return ( 
            <NoteView>
                <h1>{this.props.title}</h1>
                <div>
                    <p>{this.props.content}</p>
                </div>
                <button onClick={this.props.delete}>Delete</button>
            </NoteView>
         );
    }
}
 
export default Note;