import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NotePreview from './NotePreview';

const NoteCard=styled.div`

`
const NoteTitle = styled.h3`
`

const NoteBody = styled.p`
`

class NoteView extends React.Component {
    //need a compnent did mount get request
    constructor(props){
        super(props);
        this.state = {
            note: null
        }
    }
    componentDidMount(props) {
        const id = this.props.match.params.id;
        this.fetchNote(id);
    }

    fetchNote = id => {
        // console.log(this.state.id);
        axios
         .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
         .then(response => {
             this.setState(() => ({ note: response.data }));
         })
         .catch(error => {
             console.error(error);
         });
    };

    componentWillReceiveProps(newProps){
        if(this.props.match.params.id !== newProps.match.params.id){
          this.fetchNote(newProps.match.params.id);
        }
    }

    render() {
        if (!this.state.note) {
            return <div>Loading Note information...</div>;
        }
        console.log(this.state.note.title, this.state.note.textBody);
        return <NoteCard note={this.state.note}> 
                    <NoteTitle>{this.state.note.title}</NoteTitle>
                    <NoteBody>{this.state.note.textBody}</NoteBody>  
                </NoteCard>
        
    }
}
export default NoteView;

