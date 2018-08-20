import React, {Component} from 'react'


class CreateNote extends Component {

    render() {
        return (

            <div className ="create-note-form">
                <h3>Create New Note:</h3>
                <input className = "input-title" type="text" placeholder = "Note Title"/> 
                <br/>
                <input className = "input-content" type="text" placeholder = "Note Content"/>
                <br/>
                <button className = "btn-side-bar">Save</button>
                {/* Would like to fix the placeholder inside of the input-content also to the right margin is off by 11px */}
            </div>

        )
    }
}

export default CreateNote 