import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'

class NoteView extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = "note-page">
                <div className = "note-links">
                    <Link to = "/:id/edit"><span>edit</span></Link>
                    <Link to = "/edit"><span>delete</span></Link>
                </div>
                <h2 className = "note-title">{this.props.notes[this.props.match.params.id].title}</h2>
                <p className = "note-content">{this.props.notes[this.props.match.params.id].note}</p>
            </div>
        )
    }
} 

export default withRouter(NoteView) 