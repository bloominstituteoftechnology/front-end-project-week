import React, { Component } from 'react';
import {  Link } from "react-router-dom";



export const SingleView = props => {
    if(props.notes.length > 0) {
        return (
            <div>
                { props.showModal && (
                <div>
                    <div className="modal-content" >
                        <h3>Are you sure you want to delete this?</h3>
                        <Link to=""> <div className="modal-btn-delete" onClick={() => props.deleteNote(props.notes[props.match.params.id].id)}  >Delete</div ></Link>
                        <div className="modal-btn-no" onClick={() => props.modalToggle()} >No</div >
                    </div>
                </div> )}
                <div className="view-links" >
                    <Link to="" >edit</Link> {/* {`/notes/${this.props.match.params.id}/edit`} */}
                    &nbsp; &nbsp;
                    <div className="delete-link" onClick={() => props.modalToggle()} >delete</div>
                </div>
                <h3 className="single-view-title">{props.notes[props.match.params.id].title}</h3>
                <p className="single-view-text" >{props.notes[props.match.params.id].text}</p>
            </div>
        )
    } else return (<div>I've got a bad feeling about this...</div>)
    
}