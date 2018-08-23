import React, { Component } from 'react';
import styled from 'styled-components';

const View = styled.div`
// background: #f2f1f2;
// height: 100vh;
// height: 100%;

`

const Actions = styled.div`

`

const Button = styled.button`
float: right;
`

const NoteName = styled.h2`

`

const NoteText = styled.p`

`


class ViewNote extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = { 
            id: props.match.params.id,
            note: props.note,
            delete: props.delete
         }
         console.log(this.state.note[this.state.id].noteName)
         console.log(this.state.id)
    }



    render() { 
        return (<View className='col'>

        <Actions><Button onClick={this.state.delete}>delete</Button><Button>edit</Button></Actions>

        <NoteName>{this.state.note[this.state.id].noteName}</NoteName>

        <NoteText>{this.state.note[this.state.id].noteText}</NoteText>

    </View> );
    }
}
 
export default ViewNote;