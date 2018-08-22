import React, {  } from 'react';
import {  Link } from "react-router-dom";



export const SingleView = props => {
    let denoted = props.notes.find(note => note.id === parseInt(props.match.params.id, 10));
    if(props.notes.length > 0) {
        return (
            <div>
                { props.showModal && (
                <div className="modal-wrap" >
                    <div className="modal-content" >
                        <h3>Are you sure you want to delete this?</h3>
                        <div className="modal-btn-wrap" >
                            <Link to=""> <div className="modal-btn-delete" onClick={() => props.deleteNote(denoted.id)}  >Delete</div ></Link>
                            <div className="modal-btn-no" onClick={() => props.modalToggle()} >No</div >
                        </div>
                    </div>
                </div> )}
                <div className="view-links" >
                    <Link to={`/notes/${denoted.id}/edit`} >edit</Link> {/* {`/notes/${this.props.match.params.id}/edit`} */}
                    &nbsp; &nbsp;
                    <div className="delete-link" onClick={() => props.modalToggle()} >delete</div>
                </div>
                <h3 className="single-view-title">{denoted.title}</h3>
                <p className="single-view-text" >{denoted.text}</p>
            </div>
        )
    } else return (<div>I've got a bad feeling about this...</div>)
    
}