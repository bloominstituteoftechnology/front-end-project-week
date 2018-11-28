import React, {Component} from 'react'

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            title: '',
            txt: ''
        }
    }

    render() {
        return (
            <div className = 'NoteForm'>
            </div>
        )
    }
}

export default NoteForm;