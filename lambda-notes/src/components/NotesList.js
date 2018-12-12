import React from 'react';
import { NotesView, NotesHeader, NotesWrapper, NotesContent, Notes, NotesTitle, NotesBody } from '../style'


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
        <NotesView>
            <NotesHeader>Your Notes:</NotesHeader>
        <NotesWrapper>
            
            {this.props.notes.map(note => {
                return (
                <NotesContent key={note._id}>
                    
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
        </NotesView>
    );
        }
    }
};

export default NotesList