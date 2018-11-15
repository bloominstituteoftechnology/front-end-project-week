import React, {Component} from 'react';
import Notes from "./components/Notes";
import CreateNoteForm from "./components/CreateNoteForm";

class App extends Component {
    render() {
        return (
            <>
                <Notes/>
                <CreateNoteForm/>
            </>
        );
    }
}

export default App;
