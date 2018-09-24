import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class NoteView extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = "note-page">
                <div className = "note-links">
                    <Link to = "/edit"><span>edit</span></Link><span>delete</span>
                </div>
                <h2 className = "note-title">{this.props.notes[this.props.match.params.id].title}</h2>
                <p classname = "note-content">{this.props.notes[this.props.match.params.id].note}</p>
            </div>
        )
    }
}

export default NoteView