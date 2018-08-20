import React, {Component} from 'react'


class CreateNote extends Component {

    render() {
        return (

            <div className ="create-note-form">
                <h3>Create new Note:</h3>
                <input type="text" placeholder = "Note Title"/>
                <input type="text" placeholder = "Note Content"/>
                <button className = "btn-side-bar">Save</button>
            </div>

        )
    }
}

export default CreateNote 