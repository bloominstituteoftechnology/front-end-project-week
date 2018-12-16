import React from 'react';
import EllipsisText from 'react-ellipsis-text';
import Markdown from 'react-markdown';
import TopNav from './TopNav';

import { NotesView, NotesHeader, NotesWrapper, NotesContent, Notes, NotesTitle, NotesBody } from '../style'


class NotesList extends React.Component  {
    constructor(props){
        super(props)
    }

    truncate = (string) => {
        if (string.length > 140)
           return string.substring(0, 140)+'...';
        else
           return string;
     };

   
    render (){
    console.log(typeof(this.props.notes))
    

    if(this.props.notes.length === 0 ) {
        return (<div>Loading</div>)
    } else {

    
    return(
        <NotesView>
            <TopNav
                filteredSearch={this.props.filteredSearch}
                handleSearchInput={this.props.handleSearchInput}
                sortTitle={this.props.sortTitle}
                sortRecent={this.props.sortRecent}
            />
           
            <NotesHeader>Your Notes:</NotesHeader>
            <NotesWrapper> 
                {this.props.notes.map(note => {
                    return (
                        
                        <NotesContent key={note._id}>
                            
                        <Notes key={note._id} onClick={ () => 
                            
                            this.props.history.push(`/note/${note._id}`)
                            
                            }>
                            <NotesTitle>{note.title}</NotesTitle>
                            <NotesBody>

                               <Markdown source={this.truncate(note.textBody)}/> 
                                 {/* <EllipsisText text={note.textBody} length={'200'}/> */}
                            </NotesBody>
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