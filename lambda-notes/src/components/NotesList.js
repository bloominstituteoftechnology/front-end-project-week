import React from 'react';
import {NotesHeader, NotesWrapper, NotesContent, Notes, NotesTitle, NotesBody } from '../style'


class NotesList extends React.Component  {
    constructor(props){
        super(props)
    }

    // componentDidMount = () => {
    //     return (
    //         window.location.reload()
    //         )
         
    // }
    render (){
    console.log(typeof(this.props.notes))
    if(this.props.notes.length === 0 ) {
        return (<div>Loading</div>)
    } else {

    
    return(
        <div className='notes-view'>
            <NotesHeader>Your Notes:</NotesHeader>
        <NotesWrapper>
            
            {Array.from(this.props.notes).map(note => {
                return (
                <NotesContent>
                    
                <Notes key={note._id} onClick={ () => 
                    
                    this.props.history.push(`/note/${note._id}`)
                    
                    }>
                    <NotesTitle>{note.title}</NotesTitle>
                    <NotesBody>{note.textBody}</NotesBody>
                </Notes>
                </NotesContent>
            );
            })}
        </NotesWrapper>
        </div>
    );
        }
    }
};

export default NotesList