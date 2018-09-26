import React from 'react';


class NoteForm extends React.Component{
    constructor(){
        super()
        this.state = {
            noteTitle: "",
            noteBody: "",
            id:""
        }
    }

    render(){
        return(
            <div>
                <div>
                <input type="text" placeholder="Title" />
                <input type="textbox" placeholder="notes" />
                </div>
            </div>
        )
    }
}

export default NoteForm;