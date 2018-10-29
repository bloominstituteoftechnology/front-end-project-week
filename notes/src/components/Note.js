import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

const Note = props => {
    if (props.note) {
        console.log(props, 'sadss')
        const { title, content, id } = props.note
        return (
            <>
            <p>{title}</p>
            <p>{content}</p>
            <Link to ={`/edit/${id}`}><button>Edit Note</button></Link>
            <Link to={`/delete/${id}`}><button>Delete Note</button></Link>
            </>
            
        )
    } else {
        return (
            <h3>uhh</h3>
        )
    }
    // add an error message
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params
    return {
        note: state.notes.find(note => note.id === id)
    }
}

export default connect(mapStateToProps, { })(Note)