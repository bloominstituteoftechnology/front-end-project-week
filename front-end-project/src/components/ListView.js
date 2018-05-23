import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/ListView.css'

const ListView = props => {
    return (
        <div className="main-text">
            <div className="row yourNotes">
                <h3 style={{ textAlign: "left" }}> Your Notes: </h3>
            </div>
            {props.notes.map(note => {
                return (
                    <div className="row mein-row no-gutters" key={note.id}>
                        <NavLink to={`/note/${note.id}`}><div className="card mein-card">
                            <div className="card-body">
                                <h5 className="card-title"> {note.title} </h5>
                                <p className="card-text"> {note.content} </p>
                            </div>
                        </div></NavLink>
                    </div>
                    )
                }
            )
        } 
        </div>
    )
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(ListView)