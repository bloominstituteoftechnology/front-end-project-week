import React from 'react';
import styled from 'styled-components';

const NoteCard=styled.div`

`

class NoteView extends React.Component {
    constructor(props){
        super(props);
        this.state={
            note: [{
               
            }]
        }
    }
    //need a compnent did mount get request
    
    render(){
        return(
            <NoteCard>

            <h3>{this.props.title}</h3>

            </NoteCard>
        )
    }
}
export default NoteView;