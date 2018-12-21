import React, { Component } from 'react'
import SideBar from './SideBar'
//Component composed of a 2-part form in order to create new notes.
//This component shall be displayed upon the user clicking "create note", which will trigger createNote()
//This component shall take in a) a title and b) some content and store it this component's state.
//This component's state shall be the shape of a note object.
//This component shall ship its state data to the store through the createNote action.
class NoteForm extends Component {
    render() {
        return (
            <div>
                <SideBar/>
                <form>
                    <input name="title" placeholder="Title" type="text"/>
                    <input name="content" placeholder="Text" type="text"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    };
};

export default NoteForm;