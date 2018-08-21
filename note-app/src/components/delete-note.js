import React from 'react'
import {Link} from 'react-router-dom'
import SideBar from './side-bar';

class DeleteModal extends React.Component {

    passIndexUpToState = index => {
        this.props.select(index)
    }
    deleteNote = index => {
        this.props.delete(index)
    }
    render() {
        const title = this.props.location.state.title
        const content = this.props.location.state.content
        const index = this.props.location.state.index
        return (
            <div className="main-container">
              <SideBar/>
              <div className = "create-note-form deleting-form">
                <div className = "full-note-header deleting">

                  <h6>edit</h6> 
                  <h6>delete</h6>
                </div>
                <div className = "content-div deleting">
                  <h3>{title}</h3> 
                  <p>{content}</p>
                </div>
                <div className ="delete-question">
                    <h6>Are you sure you want to delete this?</h6>
                    <Link to = "/"><button onClick = {() => this.deleteNote(index)} className = "btn-side-bar btn-delete">Delete</button></Link>
                    <Link to = {`/${this.props.match.params.id}`}><button onClick = {() => this.passIndexUpToState(index)} className = "btn-side-bar">No</button></Link>
                </div>
              </div>
            </div>
            
        )
    }
}

export default DeleteModal;