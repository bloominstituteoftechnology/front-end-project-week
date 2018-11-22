import React from 'react'
import { Link } from 'react-router-dom' 

import { connect } from 'react-redux'
import { getNotes } from '../../actions/noteAction'

class UnSorted extends React.Component {
    constructor(){
        super()
    }

    componentDidMount(){
        this.props.getNotes()      //gets notes from actions, which comes from store
    }

    render(){
        return(
            <div id="myDIV">
                    <h2> Your Notes (Unsorted): </h2>
                    <div className="notebox-container">
                        {this.props.notes.map(note => {
                            return(
                                <div className="notebox" key={note._id}>
                                    <h2>
                                        Title: <Link to={`/notes/${note._id}`}>{note.title.toUpperCase()}</Link>
                                    </h2>
                                    <div className="contentbox">
                                        <p> <strong>Content:</strong> {note.textBody.slice(0, 100) + (note.textBody.length > 100 ? "..." : "")}</p>
                                    </div>
                                    <p> <strong>ID:</strong> {note._id}</p>
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
        loading: state.loading,
    }
}


export default connect(mapStateToProps, {getNotes})(UnSorted)
//export default connect(mapStateToProps, { getNotes })(NotesList)
            