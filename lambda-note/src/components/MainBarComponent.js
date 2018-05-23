import React, { Component } from 'react';
import NoteList from './noteList';

class MainBarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteList : [{'title': "Card Title",
                        "cardBody" : "With supporting text below as a natural lead-in to additional content."}, {'title': "Card Title",
                        "cardBody" : "With supporting text below as a natural lead-in to additional content."},{'title': "Card Title",
                        "cardBody" : "With supporting text below as a natural lead-in to additional content."}],
         }
    }



    render() {
        const mainBar = {
            backgroundColor : "#F3F3F3",
            height : "100vh",
            width : "75vw",

          }
        return (
            <div className ="col-md-9" style ={mainBar}>
                <h1 className ="m-4 font-weight-bold" >Your Notes:</h1>
                <div className ="d-flex flex-row flex-wrap pl-4 " >
                    {this.state.noteList.map( note => {
                        return <NoteList>{note}</NoteList>
                    })}
               </div>
            </div>
         )
    }
}

export default MainBarComponent;