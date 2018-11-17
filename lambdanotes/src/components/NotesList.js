import React from 'react'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { getNotes } from '../actions/noteAction'


//const NotesList = (props) => {
class NotesList extends React.Component {

    componentDidMount(){
        this.props.getNotes()
    }

    
    

    render(){
        const emptyArr = [];
        return (
            <div className="noteslist-container">
                <h2> Your Notes: </h2>
                <div className="notebox-container">
                    {this.props.notes.map(note => {
                        return(
                            <div className="notebox" key={note._id}>
                                <h2>
                                    <Link to={`/notes/${note._id}`}>{note.title.toUpperCase()}</Link>
                                </h2>
                                <div className="contentbox">
                                    <p> {note.textBody}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <h2> SORTED Notes: </h2>
            
                    {this.props.notes.map(note => {
                        emptyArr.push(note.title)
                        console.log(typeof emptyArr)
                        return(
                            <div>
                                {/* <div>
                                    {note.title.toUpperCase()}
                                </div> */}
                                <div>
                                    {emptyArr.sort()}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        error: state.error,
        loading: state.loading
    }
}

export default connect(mapStateToProps, { getNotes })(NotesList)

    
//}

//export default NotesList

{/* <Link to={`/notes/${note._id}`}>{note.title.toUpperCase()}</Link> */}