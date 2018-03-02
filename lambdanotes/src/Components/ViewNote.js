import React, { Component } from 'react';
import './viewnote.css';
import { Link } from 'react-router-dom';

class ViewNote extends Component {

    state = {
        toggleModal: false,
    }

    openDeleteModal = () => {
        let x = document.getElementById("openModal")
        let y = document.getElementById("noteView")
        if (x.className === "noDisplay") {
            y.className ="opaqueNoteView";
            x.className = "modalWindow";
        } else {
            x.className = "noDisplay";
            y.className = "";
        }
        console.log(x);
        console.log(y);
      
    
    }
    render () {
        return (
            <div>
                <div id="noteView" className="">
                    <button type="submit" onClick={this.openDeleteModal}>Delete</button>
                    <button type="submit"><Link to="/Update">Update</Link></button>
                    <h1>{this.props.note}</h1>
                    <p>{this.props.details}</p>
                </div>
                <div id="openModal" className="noDisplay">
                    <h3>Are you sure you want to delete this?</h3>
                    <form onSubmit={this.props.noteDelete}>
                    <button type="submit" className="redDelete"> Delete </button>
                    </form>
                    <button type="submit" onClick={this.openDeleteModal} className="blueCancel"> Cancel </button>
                </div>
                
            </div>
        )
    }

}




export default ViewNote; 