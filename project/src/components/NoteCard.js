import React, {Component} from 'react'

class NoteCard extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = "note-card">
                <h2 className = "card-title">{this.props.title}</h2>
                <p className = "card-content">{this.props.note}</p>
            </div>
        )
    }
} 

export default NoteCard